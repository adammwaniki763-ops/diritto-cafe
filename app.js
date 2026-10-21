const menuGrid = document.querySelector("#menu-grid");
const filterTabs = [...document.querySelectorAll(".filter-tab")];
const searchInput = document.querySelector("#menu-search");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const reservationForm = document.querySelector("#reservation-form");
const formMessage = document.querySelector("#form-message");
const orderDrawer = document.querySelector("#order-drawer");
const orderLines = document.querySelector("#order-lines");
const orderCount = document.querySelector("#order-count");
const orderTotal = document.querySelector("#order-total");
const orderTriggers = [...document.querySelectorAll(".order-trigger")];
const cart = new Map();

function formatPrice(price) {
  if (price.startsWith("@")) return `Any 2 · KSh ${Number(price.slice(1)).toLocaleString("en-KE")}`;
  return price.split("|").map((value) => `KSh ${Number(value.trim()).toLocaleString("en-KE")}`).join(" / ");
}

function renderMenu(filter = "all", query = "") {
  const normalisedQuery = query.trim().toLowerCase();
  const visibleItems = menuItems.filter((item) => {
    const matchesFilter = filter === "all" || item.type === filter;
    const matchesQuery = !normalisedQuery || `${item.name} ${item.description} ${item.section}`.toLowerCase().includes(normalisedQuery);
    return matchesFilter && matchesQuery;
  });

  if (!visibleItems.length) {
    menuGrid.innerHTML = '<p class="menu-empty">Nothing found just yet. Try a different word or give us a call.</p>';
    return;
  }

  menuGrid.innerHTML = visibleItems.map((item) => `
    <article class="menu-card menu-item-card">
      <div class="menu-card-top"><span class="menu-card-tag">${item.section}</span><span class="menu-card-price">${formatPrice(item.price)}</span></div>
      <h3>${item.name}</h3>
      ${item.description ? `<p>${item.description.replaceAll("\n", "<br />")}</p>` : ""}
      <button class="add-to-order" type="button" data-add-item="${item.id}">Add to order <span aria-hidden="true">+</span></button>
    </article>
  `).join("");

  menuGrid.querySelectorAll("[data-add-item]").forEach((button) => button.addEventListener("click", () => addToOrder(button.dataset.addItem)));
}

function setFilter(filter) {
  filterTabs.forEach((tab) => {
    const isActive = tab.dataset.filter === filter;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
  renderMenu(filter, searchInput.value);
}

function addToOrder(itemId) {
  const item = menuItems.find((candidate) => candidate.id === itemId);
  if (!item) return;
  const existing = cart.get(itemId);
  cart.set(itemId, { item, quantity: existing ? existing.quantity + 1 : 1 });
  renderOrder();
  openOrderDrawer();
}

function changeQuantity(itemId, delta) {
  const line = cart.get(itemId);
  if (!line) return;
  line.quantity += delta;
  if (line.quantity <= 0) cart.delete(itemId);
  renderOrder();
}

function numericPrice(price) {
  const firstPrice = price.replace("@", "").split("|")[0].trim();
  return Number(firstPrice) || 0;
}

function renderOrder() {
  const lines = [...cart.values()];
  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  const total = lines.reduce((sum, line) => sum + numericPrice(line.item.price) * line.quantity, 0);
  orderCount.textContent = `${count} item${count === 1 ? "" : "s"}`;
  orderTotal.textContent = `KSh ${total.toLocaleString("en-KE")}`;

  if (!lines.length) {
    orderLines.innerHTML = '<p class="empty-order">Your order is waiting for a first good idea.</p>';
    return;
  }

  orderLines.innerHTML = lines.map(({ item, quantity }) => `
    <div class="order-line">
      <div><strong>${item.name}</strong><span>${formatPrice(item.price)}</span></div>
      <div class="quantity-control"><button type="button" data-quantity="${item.id}" data-delta="-1" aria-label="Remove one ${item.name}">−</button><span>${quantity}</span><button type="button" data-quantity="${item.id}" data-delta="1" aria-label="Add one ${item.name}">+</button></div>
    </div>
  `).join("");
  orderLines.querySelectorAll("[data-quantity]").forEach((button) => button.addEventListener("click", () => changeQuantity(button.dataset.quantity, Number(button.dataset.delta))));
}

function openOrderDrawer() {
  orderDrawer.classList.add("is-open");
  orderDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
}

function closeOrderDrawer() {
  orderDrawer.classList.remove("is-open");
  orderDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}

function buildWhatsAppMessage() {
  const lines = [...cart.values()].map(({ item, quantity }) => `${quantity} × ${item.name} (${formatPrice(item.price)})`);
  const total = [...cart.values()].reduce((sum, line) => sum + numericPrice(line.item.price) * line.quantity, 0);
  return `Hello Diritto Café, I would like to place an order:\n\n${lines.join("\n")}\n\nEstimated total: KSh ${total.toLocaleString("en-KE")}\nPlease confirm availability. Thank you.`;
}

filterTabs.forEach((tab) => tab.addEventListener("click", () => setFilter(tab.dataset.filter)));
searchInput.addEventListener("input", () => {
  const activeFilter = filterTabs.find((tab) => tab.classList.contains("is-active"))?.dataset.filter || "all";
  renderMenu(activeFilter, searchInput.value);
});
document.querySelectorAll("[data-filter-link]").forEach((link) => link.addEventListener("click", () => setFilter(link.dataset.filterLink)));
menuToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.querySelector("span").textContent = isOpen ? "×" : "+";
});
primaryNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  primaryNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.querySelector("span").textContent = "+";
}));
orderTriggers.forEach((trigger) => trigger.addEventListener("click", openOrderDrawer));
document.querySelectorAll("[data-close-order]").forEach((element) => element.addEventListener("click", closeOrderDrawer));
document.querySelector("#drawer-close").addEventListener("click", closeOrderDrawer);
document.querySelector("#send-whatsapp").addEventListener("click", () => {
  if (!cart.size) return;
  window.open(`https://wa.me/254791427316?text=${encodeURIComponent(buildWhatsAppMessage())}`, "_blank", "noopener,noreferrer");
});
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeOrderDrawer(); });
reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = new FormData(reservationForm).get("name").trim();
  formMessage.textContent = `Thanks${name ? `, ${name}` : ""}. Your request is ready — we’ll confirm your table by phone.`;
  reservationForm.reset();
});

renderMenu();
renderOrder();
