# TODO

## Build the expanded café homepage and navigation
- Create a more comprehensive Diritto Café website that adds to the existing site rather than replacing its core identity.
- Preserve the existing brand name, Nairobi location, hours, phone number, social links, and menu category structure.
- Include clear navigation to hero, menu, story, visit, and order/contact actions.
- Include a clear reserve-a-table entry point in the main navigation, hero, and page content.

## Create the menu explorer from existing site content
- Use the existing site’s menu category content to create a structured menu explorer covering Breakfast, Appetizer, Salads, Main Dishes, Pasta, Sandwiches & Wraps, Burgers & Sliders, Tuesday Burger Offers, Kids Menu, Hot & Cold Displays, Dessert, Pizza, Trendy Beverages, Mojitos, Mocktails & Fresh Juices, Machas, Karak, Iced Tea & Shakes, and Coffee & Teas.
- Make categories filterable in the browser without a page reload.
- Use the literal item names, descriptions, and numeric prices transcribed from the live menu sheets.
- Keep the category page with no usable menu sheet explicit rather than inventing items or prices.

## Apply the requested visual direction
- Use a palette built from cream, white, orange, and black.
- Do not reuse the images from dirittocafe.com; use original or newly generated visuals instead.
- Keep the layout responsive and usable on desktop and mobile.
- Use the user-supplied café interior photo as the hero background and place the second supplied interior photo in a separate feature section.
- Place the third supplied café interior photo in the “Our table” story section.
- Use one supplied interior photo as the menu section background with responsive overlays and readable touch-friendly cards on mobile.
- Use a stronger original text-and-mark logo treatment rather than reusing the existing site logo asset.
- Use restrained badge labels for café format, location, and reservation context.
- Include the user-supplied Diritto Café badge as a circular cropped asset in the site branding.
- Use the badge-inspired high-contrast serif consistently across the hero, section headings, menu names, and editorial callouts.

## Add the reservation request flow
- Add a responsive reservation request form for name, phone, date, time, guest count, and notes.
- Show a confirmation message in the page after submission without claiming that a booking was finalized.

## Make ordering functional
- Let visitors add literal menu items to an in-page order drawer and adjust quantities.
- Show an estimated total using the transcribed prices.
- Provide a WhatsApp order handoff and a phone fallback, with availability and final-total confirmation left to the café.

## Keep the implementation JavaScript-only
- Do not use TypeScript.
- Implement the site with HTML, CSS, and JavaScript only, served by a simple Node server.

## Validate and deliver the working project
- Serve the site on the managed preview port.
- Include a valid `/manus-routes.json` manifest for the homepage route.
- Check the finished source for obvious syntax/runtime issues and save the completed work to the project checkpoint.
