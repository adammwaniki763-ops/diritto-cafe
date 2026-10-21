const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml"
};

const server = http.createServer((request, response) => {
  const requestPath = decodeURIComponent(request.url.split("?")[0]);
  const relativePath = requestPath === "/" ? "/index.html" : requestPath;
  const filePath = requestPath.startsWith("/assets/")
    ? path.join(root, "public", requestPath.slice(1))
    : path.join(root, relativePath);

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      if (requestPath !== "/" && !path.extname(requestPath)) {
        fs.readFile(path.join(root, "index.html"), (fallbackError, fallbackData) => {
          if (fallbackError) {
            response.writeHead(500);
            response.end("Server error");
            return;
          }
          response.writeHead(200, { "Content-Type": mimeTypes[".html"] });
          response.end(fallbackData);
        });
        return;
      }
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
      "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=3600"
    });
    response.end(data);
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Diritto Café listening on http://0.0.0.0:${port}`);
});
