const menuSections = [
  { id: "breakfast", name: "Breakfast", type: "food", items: [
    ["Diritto Special Breakfast Platter", "A combination of labneh, guacamole, cherry tomato compote, scrambled eggs, simit bread and french toast serve with berries, whipped cream and maple syrup", "1500"],
    ["Diritto Breakfast Platter", "Sour dough, fried spinach, 2 sausages, 2 eggs served with the home fries & baked beans", "1100"],
    ["Kenyan Style Breakfast Platter", "Soft, freshly made chapati served with hearty combination of eggs, sausage, creamy spinach and potato cubes", "999"],
    ["Breakfast Pan Cake Combo", "Fluffy golden pancakes served with scrambled eggs, sausage, baked beans, creamy spinach and drizzle of pan cake syrup", "1099"],
    ["Turkish Labneh With Boiled Egg", "Creamy turkish labneh paired with soft-boiled eggs, served with a touch of middle eastern flair and slice of sour dough bread", "1000"],
    ["Croissant With Scrambled Eggs & Feta", "Crispy croissant with scrambled eggs, slice avocado, sumac powder & feta cheese", "900"],
    ["Avocado Scrambled Eggs Toast", "Guacamole, scrambled eggs, feta cheese with healthy bread.", "900"],
    ["Gourmet Spicy Avo Eggs Toast", "A perfectly toasted slice of artisan bread topped with guacamole, perfectly creamy scrambled egg, cream cheese, and our signature spicy sauce", "999"],
    ["Shakshuka Al Kuwaiti", "Scrambled eggs with tomato sauce, pinenuts, fresh cream and sumac powder, served with pita bread", "1000"],
    ["Cheese Croissant", "Plain croissant filled with cheddar cheese & parmesan cheese", "600"],
    ["Sumac And Cheese Manaqish", "Sumac, feta, fresh herbs, toasted hazelnut", "900"],
    ["Za'atar Manaqish", "Zatar, fontina cheese, feta, fresh herbs, toasted pinenuts", "900"],
    ["Tropical Fresh Fruit Bowl", "A refreshing mix of hand-cut seasonal tropical fruit", "600"],
    ["Add Extra Yogurt & Honey only", "", "150"],
    ["Classic French Toast", "Classic french toast, serve with maple syrup.", "900"],
    ["Lotus And Berry Pancake", "Fluffy pancakes layered with lotus spread and fresh seasonal berries.", "950"],
    ["Lotus French Toast", "Salted toffee sauce, lotus sauce, lotus crumbs, lotus ice cream.", "1000"]
  ]},
  { id: "appetizer", name: "Appetizer", type: "food", items: [
    ["Snacks Platter", "Two pieces for chicken samosa and chicken sausages served with lemon wedges", "500"],
    ["Truffle & Parmesan Fries", "Fries, topped with creamy mushroom truffle sauce and grated parmesan cheese.", "800"],
    ["Diritto Fries", "Fries, roasted onion, chopped jalapeño, cheddar, jack and diritto sauce.", "600"],
    ["Buffalo Dynamite Fries", "Fries, buffalo sauce, special sauce, jalapeno, cheddar cheese and chicken", "900"],
    ["Togarashi Spiced Fries", "Home fries tossed in togarashi spice", "500"],
    ["Combo Loaded Fries", "A portion of fries bake with cheddar cheese, topped with minced beef and chicken cubes, drizzle with homemade sauce, lettuce and onion chop", "1000"],
    ["Buffalo Boneless Wings", "Diced of fried boneless chicken mix in buffalo sauce", "1000"],
    ["Cajun Spiced Chicken Wings", "Crispy chicken wings tossed in bold cajun spice sauce serve with a portion of home fries and salad", "1250"],
    ["Peri Peri Spiced Chicken Wings", "Crispy chicken wings tossed in our home made peri peri sauce serve with a portion of home fries and salad", "1250"],
    ["Diritto BBQ Chicken Cubes", "Breaded chicken cubes fried until crispy then tossed in our homemade sweet and tangy BBQ sauce. Serve with salad", "1100"]
  ]},
  { id: "salads", name: "Salads", type: "food", items: [
    ["Diritto Chicken Ceaser Salad", "Grilled chicken, crisp romaine, crunchy croutons, and Parme-san tossed in a creamy caesar dressing", "1100"],
    ["Diritto Veg Ceaser Salad", "Crisp romaine with crunchy croutons, vegetarian parmesan, and a creamy caesar dressing", "950"],
    ["Mighty Corn Salad", "Fresh romain lettuce, fresh sweet corn, avocado, olives, cherry tomato tossed with apple cider and honey dressing", "950"]
  ]},
  { id: "mains", name: "Main Dishes", type: "food", items: [
    ["Diritto Butter Chicken", "The rich creamy and buttery sauce chicken curry served with white rice", "1400"],
    ["Lemon Basil Chicken", "Grilled chicken breast tossed in creamy basil pesto served with seasonal vegetables and rice or mashed potato", "1500"],
    ["Diritto Honey Embered Grilled Chicken", "Tender grilled chicken breast glazed with spicy peri-peri sauce and sweet honey, perfectly balanced umami flavor. Served with home fries and salad.", "1400"],
    ["Diritto Fish & Chips", "Crunchy panko coated golden fried fish serve with tangy tartar sauce, and home fries", "1400"],
    ["Grilled Rib Eye Steak", "Grilled steak served with mushroom and pepper sauce with seasonal vegetables & mashed potato", "2500"],
    ["Japanese Grilled Salmon", "Grilled salmon served with homemade japanese sauce with seasonal vegetables, rice or mashed potato", "2600"],
    ["Grilled Nile Perch With Lemon Butter Sauce", "Fresh nile perch fillet, perfectly grilled to golden perfection, serve with rich and zesty lemon butter", "1700"]
  ]},
  { id: "pasta", name: "Pasta", type: "food", items: [
    ["Diritto Alfredo Pasta", "Fussili pasta in a creamy white sauce with truffle oil, chicken & mushroom", "1300"],
    ["Spaghetti With Meat Balls", "Spaghetti pasta tossed in tomato sauce & beef mince", "1400"],
    ["Diritto Pink Pasta", "Pink sauce penne pasta with chicken mushroom", "1300"]
  ]},
  { id: "sandwiches-wraps", name: "Sandwiches & Wraps", type: "food", items: [
    ["Chicken Tikka Sandwich", "Chicken tikka layered in brioche bread slice with cheese, crisp vegetables and creamy sauce. Serve with home fries and salad", "1000"],
    ["Signature Grilled Chicken Panini Sando", "Tender grilled chicken layered with a perfectly cooked egg and fresh crisp vegetables pressed inside golden toasted panini bread. Serve with home fries and salad", "999"],
    ["Chicken & Mushroom Quesadilla", "Warm, toasted tortilla stuffed with tender chicken & mushroom, melted cheese and homemade sauce. Serve with a side of zesty salsa and home fries", "1199"],
    ["Mexican Chicken Wraps", "Mexican spiced chicken wrapped inside tortilla bread with homemade sauce and cheese. Serve with home fries and salad", "1200"]
  ]},
  { id: "burgers-sliders", name: "Burgers & Sliders", type: "food", items: [
    ["Diritto Steak House Burger", "Juicy grilled steak chops topped with mushroom sauce and cheese serve on a toasted brioche bun along with our homemade sauces and crispy vegetables. Serve with home fries", "1500"],
    ["Diritto Combo Smash Burger", "Juicy smashed beef patty and crispy fried chicken patty serve on a toasted brioche bun along with cheese slice, crispy vegetables and homemade. Sauces serve with home fries", "1400"],
    ["Crispy Chicken Burger", "Crispy fried chicken patty, brioche bun, lettuce, chimichuri sauce, cheese, onion, sliced tomato and gherkins", "1200"],
    ["Double Patty Smashed Beef Burger", "Smashed beef double patty, brioche bun, lettuce, chimichuri sauce, cheese, onion, sliced tomato and gherkins", "1400"],
    ["Diritto Combo Slider", "Juicy smashed slider beef patty and crispy fried slider chicken patty serve on our toasted Slider bun along with cheese, cripy vegetables, homemade Sauces serve with home fries", "1200"]
  ]},
  { id: "tuesday-burger-offers", name: "Tuesday Burger Offers", type: "food", items: [
    ["Diritto Combo Smash Burger", "Any 2 Burgers", "@1500"],
    ["Smashed Double Patty beef burger", "Any 2 Burgers", "@1500"]
  ]},
  { id: "kids-menu", name: "Kids Menu", type: "food", items: [
    ["Chicken Nuggets & Mini Pizza", "Kids platter (chicken nuggets, french fries and mini pizza)", "950"],
    ["Macaroni Cheese Sauce", "Classic elbow macaroni smothered in a rich, creamy, and cheesy sauce for macaroni/Macaroni with cheese sauce", "950"],
    ["Southern Fried Chicken", "Crispy, juicy chicken pieces marinated in buttermilk and mustard paste , then fried to golden perfection", "950"],
    ["Mini Pizza Platter", "Mini Chicken pizza topped with mild tomato sauce, chicken, mozzarella cheese and oregano.", "850"]
  ]},
  { id: "hot-cold-display", name: "Hot & Cold Displays", type: "food", items: [
    ["Danish Pastry", "Light, flaky pastry layered with buttery sweetness and delicate filling.", "450"],
    ["Croissant Cinnamon Roll", "Flaky croissant dough swirled with warm cinnamon sugar.", "350"],
    ["Sour Dough Bread", "Crusty artisan bread with a tangy sourdough flavor.", "750"],
    ["Multigrain Bread", "Hearty bread baked with a wholesome blend of grains and seeds.", "850"],
    ["Baguettes", "Classic french bread with a crisp crust and soft, airy interior.", "400"],
    ["Classic Butter Croissant", "Flaky, golden croissant baked with rich buttery layers.", "300"],
    ["Chocolate Croissant", "Buttery, flaky croissant filled with rich chocolate.", "400"],
    ["Pistachio Croissant", "Crispy, buttery croissant filled with creamy pistachio.", "450"],
    ["Almond Croissant", "Flaky croissant filled with sweet almond cream and topped with toasted almonds.", "450"],
    ["Lotus Croissant", "Buttery croissant filled with lotus biscoff spread and topped with crumbs.", "450"],
    ["Vanilla Gateaux", "", "450 | 2400"],
    ["Chocolate Gateaux", "", "550 | 2600"],
    ["Red Velvet Gateaux", "", "650 | 2800"],
    ["Lotus Cheese Cake", "", "900 | 6500"],
    ["Pistachio Cheese Cake", "", "900 | 6500"],
    ["Mix Berry Cheese Cake", "", "900 | 6500"],
    ["Classic Vanilla Milk Cake", "", "800"],
    ["Matcha Milk Cake", "", "1000"],
    ["Karak Chai Milk Cake", "", "900"]
  ]},
  { id: "dessert", name: "Dessert", type: "food", items: [
    ["Pistachio Kunafa Chocolate Cake", "Viral pistachio kunafa cake topped with homemade chocolate ganache", "1050"],
    ["Diritto Lotus Brownie", "Rich, fudgy brownie infused with lotus biscoff flavor served with vanilla ice cream", "1000"],
    ["Tiramisu", "Homemade ladyfinger biscuit and mascarpone cream espresso.", "900"],
    ["Diritto Newyork Style Cookie Fondant", "A warm, soft-baked cookie with serve with a rich molten chocolate sauce and scoop of Ice cream", "1000"]
  ]},
  { id: "pizza", name: "Pizza", type: "food", items: [
    ["Margarita Pizza", "Classic pizza topped with fresh tomato sauce, mozzarella, and basil.", "850"],
    ["Butter Chicken Pizza", "Classic pizza topped with fresh tomato sauce, mozzarella and our special chicken tikka cubes serve with butter chicken sauce", "1100"],
    ["Cajun Chicken Pizza", "Classic pizza topped with fresh tomato sauce, mozzarella and our special cajun spiced chicken serve with homemade sauce", "1100"],
    ["Mini Buffalo Pizza", "Classic pizza topped with fresh tomato sauce, mozzarella, and our special buffalo chicken popcorn served with homemade sauce", "1000"]
  ]},
  { id: "trendy-beverages", name: "Trendy Beverages", type: "drinks", items: [
    ["Classic Matcha Hot", "", "450"], ["Kunaffa Pistachio Latte", "", "550"], ["Berry & Bloom", "", "600"], ["Tropical Zing", "", "550"], ["Diritto Passion & Ginger", "", "550"]
  ]},
  { id: "mojitos-mocktails", name: "Mojitos, Mocktails & Fresh Juices", type: "drinks", items: [
    ["Virgin Mojitos", "", "500"], ["Watermelon & Mint", "", "550"], ["Strawberry & Mint", "", "550"], ["Pineapple & Mint", "", "550"], ["Lemon Breeze", "", "550"], ["Diritto Spiced Breeze", "", "550"], ["Watermelon Passion Punch", "", "600"], ["Ocean Fizz", "", "600"], ["Frozen Berry Chill", "", "600"], ["Diritto Lime & Shine", "", "600"], ["Diritto Orange", "", "500"], ["Diritto Passion", "", "400"], ["Diritto Watermelon", "", "400"], ["Diritto Pineapple", "", "400"]
  ]},
  { id: "machas-karak-iced-tea-shakes", name: "Machas, Karak, Iced Tea & Shakes", type: "drinks", items: [] },
  { id: "coffee-teas", name: "Coffee & Teas", type: "drinks", items: [
    ["Iced Spanish Latte", "", "400"], ["Vanilla Latte", "", "450"], ["Kunaffa Pistachio Latte", "", "550"], ["Salted Caramel Latte", "", "500"], ["Velvet Rogue Latte", "", "550"], ["Tiramisu Latte", "", "550"], ["Classic Dawa", "", "250"], ["Cinnamon Dawa", "", "250"], ["Garlic Dawa", "", "250"], ["Turmeric Dawa", "", "250"], ["Mint Dawa", "", "250"], ["Hairo V60", "", "300"], ["Chemex", "", "300"], ["Aeropress", "", "300"], ["Paragon", "", "300"], ["French Press", "", "300"], ["Cold Brew", "• Tiramisu\n• Coco Cream\n• Cardamom Rose", "400"]
  ]}
].map((section) => ({
  ...section,
  items: section.items.map(([name, description, price], index) => ({
    id: `${section.id}-${index + 1}`,
    name,
    description,
    price,
    section: section.name,
    type: section.type
  }))
}));

const menuItems = menuSections.flatMap((section) => section.items);
