var recipes = [
  {
    image: "../assets/imgi_2_photo-1455619452474-d2be8b1e70cd.jpg",
    reviewRate: 4.8,
    reviewCount: 2100,
    cookTime: 30,
    prepTime: 15,
    servings: 4,
    level: "medium",
    type: "pasta",
    title: "Creamy Shrimp Pasta",
    description: "Rich creamy pasta loaded with garlic butter shrimp.",

    ingredients: [
      "Pasta",
      "Shrimp",
      "Garlic",
      "Heavy cream",
      "Parmesan cheese",
    ],

    instructions: [
      "Cook pasta",
      "Sauté shrimp",
      "Prepare creamy sauce",
      "Mix together",
      "Serve hot",
      "Garnish with parsley before serving",
    ],

    nutrition: {
      caloriesValue: 590,
      proteinValue: 34,
      carbohydratesValue: 48,
      fatValue: 28,
      fiberValue: 3,
      sodium: 760,
    },

    chiefTips: [
      "Use fresh shrimp for best flavor",
      "Add parsley before serving",
      "Reserve pasta water to adjust sauce consistency",
      "Cook pasta al dente for better texture",
      "Use a non-stick pan to prevent shrimp from sticking",
    ],
  },
  {
    image: "../assets/imgi_2_photo-1529692236671-f1f6cf9683ba.jpg",
    reviewRate: 4.7,
    reviewCount: 3400,
    cookTime: 18,
    prepTime: 10,
    servings: 2,
    level: "easy",
    type: "burger",
    title: "BBQ Bacon Burger",
    description: "Smoky BBQ burger topped with crispy bacon and cheddar.",

    ingredients: [
      "Burger buns",
      "Ground beef",
      "BBQ sauce",
      "Bacon",
      "Cheddar cheese",
    ],

    instructions: [
      "Cook bacon",
      "Grill burger patties",
      "Add cheese",
      "Assemble burger",
      "Garnish with fresh herbs",
      "Serve hot",
    ],

    nutrition: {
      caloriesValue: 780,
      proteinValue: 42,
      carbohydratesValue: 40,
      fatValue: 45,
      fiberValue: 2,
      sodium: 1100,
    },

    chiefTips: [
      "Toast buns with butter",
      "Use smoky BBQ sauce",
      "Cook bacon until crispy",
      "Let burger rest before serving",
      "Use a meat thermometer to check doneness",
    ],
  },
  {
    image: "../assets/imgi_2_photo-1546069901-ba9599a7e63c.jpg",
    reviewRate: 4.9,
    reviewCount: 4100,
    cookTime: 22,
    prepTime: 20,
    servings: 3,
    level: "medium",
    type: "pizza",
    title: "Pepperoni Pizza",
    description: "Crispy pizza crust topped with spicy pepperoni and cheese.",

    ingredients: [
      "Pizza dough",
      "Pepperoni",
      "Mozzarella cheese",
      "Tomato sauce",
      "Olive oil",
    ],

    instructions: [
      "Prepare dough",
      "Spread sauce",
      "Add toppings",
      "Bake until golden",
      "Garnish with fresh basil",
      "Serve hot",
    ],

    nutrition: {
      caloriesValue: 650,
      proteinValue: 28,
      carbohydratesValue: 55,
      fatValue: 32,
      fiberValue: 3,
      sodium: 980,
    },

    chiefTips: [
      "Bake on high heat",
      "Use thin sliced pepperoni",
      "Let pizza cool before slicing",
      "Use fresh mozzarella for best flavor",
      "Brush crust with olive oil before baking",
    ],
  },
  {
    image: "../assets/imgi_2_photo-1547592166-23ac45744acd.jpg",
    reviewRate: 4.6,
    reviewCount: 1700,
    cookTime: 40,
    prepTime: 20,
    servings: 5,
    level: "hard",
    type: "rice",
    title: "Chicken Biryani",
    description: "Fragrant rice dish cooked with spices and tender chicken.",

    ingredients: ["Basmati rice", "Chicken", "Yogurt", "Spices", "Onions"],

    instructions: [
      "Marinate chicken",
      "Cook rice",
      "Layer ingredients",
      "Steam together",
      "Serve hot",
      "Garnish with fried onions and fresh herbs",
    ],

    nutrition: {
      caloriesValue: 720,
      proteinValue: 36,
      carbohydratesValue: 68,
      fatValue: 30,
      fiberValue: 4,
      sodium: 870,
    },

    chiefTips: [
      "Use saffron for aroma",
      "Do not overcook the rice",
      "Fry onions until golden brown",
      "Use a heavy-bottomed pot for even cooking",
      "Let biryani rest before serving to enhance flavors",
    ],
  },
  {
    image: "../assets/imgi_2_photo-1559314809-0d155014e29e.jpg",
    reviewRate: 4.8,
    reviewCount: 2800,
    cookTime: 25,
    prepTime: 15,
    servings: 4,
    level: "easy",
    type: "salad",
    title: "Caesar Salad",
    description:
      "Fresh romaine lettuce with creamy Caesar dressing and croutons.",

    ingredients: [
      "Romaine lettuce",
      "Croutons",
      "Parmesan cheese",
      "Caesar dressing",
    ],

    instructions: [
      "Wash lettuce",
      "Prepare dressing",
      "Mix ingredients",
      "Serve chilled",
      "Add dressing just before serving to keep lettuce crisp",
      "Use homemade croutons for better flavor",
    ],

    nutrition: {
      caloriesValue: 410,
      proteinValue: 22,
      carbohydratesValue: 18,
      fatValue: 26,
      fiberValue: 4,
      sodium: 620,
    },

    chiefTips: [
      "Use fresh romaine for crispiness",
      "Add dressing before serving",
      "Toss salad gently to avoid bruising the lettuce",
      "Use homemade croutons for better flavor",
      "Grill chicken for added protein",
    ],
  },
  {
    image: "../assets/imgi_2_photo-1565299585323-38d6b0865b47.jpg",
    reviewRate: 4.9,
    reviewCount: 3900,
    cookTime: 15,
    prepTime: 10,
    servings: 2,
    level: "easy",
    type: "sandwich",
    title: "Crispy Chicken Sandwich",
    description: "Crunchy fried chicken sandwich with spicy mayo.",

    ingredients: ["Chicken breast", "Burger buns", "Lettuce", "Pickles"],

    instructions: [
      "Fry chicken",
      "Toast buns",
      "Prepare sauce",
      "Assemble sandwich",
      "Serve immediately after frying",
      "Use a thermometer to ensure chicken is cooked through",
    ],

    nutrition: {
      caloriesValue: 690,
      proteinValue: 35,
      carbohydratesValue: 50,
      fatValue: 37,
      fiberValue: 3,
      sodium: 1020,
    },

    chiefTips: [
      "Double coat chicken for crispiness",
      "Use brioche buns",
      "Add pickles for tanginess",
      "Serve immediately after frying",
      "Use a thermometer to ensure chicken is cooked through",
    ],
  },
  {
    image: "../assets/imgi_2_photo-1529692236671-f1f6cf9683ba.jpg",
    reviewRate: 4.7,
    reviewCount: 1600,
    cookTime: 35,
    prepTime: 20,
    servings: 6,
    level: "medium",
    type: "soup",
    title: "Creamy Tomato Soup",
    description: "Smooth tomato soup served with herbs and cream.",

    ingredients: ["Tomatoes", "Garlic", "Cream", "Onions", "Vegetable broth"],

    instructions: [
      "Cook vegetables",
      "Blend soup",
      "Add cream",
      "Serve hot",
      "Garnish with fresh herbs",
      "Use low-sodium broth to control saltiness",
      "Simmer soup slowly for better taste",
    ],

    nutrition: {
      caloriesValue: 320,
      proteinValue: 8,
      carbohydratesValue: 26,
      fatValue: 18,
      fiberValue: 5,
      sodium: 540,
    },

    chiefTips: [
      "Roast tomatoes for richer flavor",
      "Serve with toasted bread",
      "Garnish with fresh basil",
      "Use low-sodium broth to control saltiness",
      "Simmer soup slowly for better taste",
    ],
  },
  {
    image: "../assets/imgi_2_photo-1574071318508-1cdbab80d002.jpg",
    reviewRate: 4.8,
    reviewCount: 2200,
    cookTime: 12,
    prepTime: 15,
    servings: 2,
    level: "easy",
    type: "salad",
    title: "Greek Salad",
    description: "Refreshing salad with feta cheese, olives, and vegetables.",

    ingredients: ["Cucumber", "Tomatoes", "Feta cheese", "Olives", "Olive oil"],

    instructions: [
      "Chop vegetables",
      "Mix ingredients",
      "Add dressing",
      "Serve fresh",
      "Use extra virgin olive oil",
      "Add feta at the end",
    ],

    nutrition: {
      caloriesValue: 290,
      proteinValue: 9,
      carbohydratesValue: 14,
      fatValue: 20,
      fiberValue: 4,
      sodium: 500,
    },

    chiefTips: [
      "Use extra virgin olive oil",
      "Add feta at the end",
      "Use fresh herbs for garnish",
      "Serve chilled for best taste",
      "Avoid over-mixing to keep vegetables crisp",
    ],
  },
  {
    image: "../assets/imgi_2_photo-1529692236671-f1f6cf9683ba.jpg",
    reviewRate: 4.9,
    reviewCount: 3000,
    cookTime: 50,
    prepTime: 25,
    servings: 6,
    level: "hard",
    type: "dessert",
    title: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey molten center.",

    ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour"],

    instructions: [
      "Melt chocolate",
      "Prepare batter",
      "Bake briefly",
      "Serve warm",
      "Do not overbake",
      "Serve with vanilla ice cream",
    ],

    nutrition: {
      caloriesValue: 540,
      proteinValue: 7,
      carbohydratesValue: 48,
      fatValue: 36,
      fiberValue: 3,
      sodium: 210,
    },

    chiefTips: [
      "Do not overbake",
      "Serve with vanilla ice cream",
      "Use high-quality chocolate for best flavor",
      "Grease molds well to prevent sticking",
      "Let cakes rest for a few minutes before serving",
    ],
  },
  {
    image: "../assets/imgi_2_photo-1565557623262-b51c2513a641.jpg",
    reviewRate: 4.8,
    reviewCount: 2600,
    cookTime: 10,
    prepTime: 10,
    servings: 2,
    level: "easy",
    type: "breakfast",
    title: "Avocado Toast",
    description: "Toasted bread topped with smashed avocado and seasonings.",

    ingredients: [
      "Bread slices",
      "Avocado",
      "Lemon juice",
      "Chili flakes",
      "Eggs",
    ],

    instructions: [
      "Toast bread",
      "Mash avocado",
      "Spread mixture",
      "Add toppings",
      "Season with salt and pepper",
      "Serve immediately",
    ],

    nutrition: {
      caloriesValue: 350,
      proteinValue: 12,
      carbohydratesValue: 28,
      fatValue: 21,
      fiberValue: 7,
      sodium: 340,
    },

    chiefTips: [
      "Use ripe avocados",
      "Add poached egg for extra protein",
      "Sprinkle seeds for added crunch",
      "Use whole grain bread for more fiber",
      "Season with salt and pepper to taste",
    ],
  },
];

function getMeal() {
  var random = Math.floor(Math.random() * recipes.length);
  var meal = recipes[random];
  displayRecipes(meal);
}

function displayRecipes(meal) {
  var imageCartona = document.getElementById("image-rev");
  imageCartona.src = meal.image;
  var rateCartona = document.getElementById("rate");
  rateCartona.innerHTML = meal.reviewRate;
  var revCartona = document.getElementById("rev");
  revCartona.innerHTML = meal.reviewCount;
  var cookCartona = document.getElementById("cooktime");
  cookCartona.innerHTML = meal.cookTime;
  var prepCartona = document.getElementById("preptime");
  prepCartona.innerHTML = meal.prepTime;
  var serveCartona = document.getElementById("serving");
  serveCartona.innerHTML = meal.servings;
  var levelCartona = document.getElementById("level");
  levelCartona.innerHTML = meal.level;
  var categoryCartona = document.getElementById("category");
  categoryCartona.innerHTML = meal.type;
  var titleCartona = document.getElementById("title");
  titleCartona.innerHTML = meal.title;
  var descCartona = document.getElementById("desc");
  descCartona.innerHTML = meal.description;

  // ^ hidden
  var hidden = document.getElementById("hidden");
  var total = meal.cookTime + meal.prepTime;
  if (total > 45) {
    hidden.classList.remove("d-none");
  } else {
    hidden.classList.add("d-none");
  }

  // * ingredients
  var ingredientsCartona = document.getElementById("ingredients");

  ingredientsCartona.innerHTML = "";
  for (let i = 0; i < meal.ingredients.length; i++) {
    var num = i + 1;
    ingredientsCartona.innerHTML += `
                       
                     <div  class="list-tab-one">
                        <span>${num}</span>
                        <p>${meal.ingredients[i]}</p>
                      </div>

                    
    `;
  }

  // ! nutrition
  var nutritionCartona = document.getElementById("nutrition");
  var nutritionSpans = nutritionCartona.querySelectorAll(".col-6 span");
  nutritionSpans[0].innerHTML = meal.nutrition.caloriesValue + " kcal";
  nutritionSpans[1].innerHTML = meal.nutrition.proteinValue + "g";
  nutritionSpans[2].innerHTML = meal.nutrition.carbohydratesValue + "g";
  nutritionSpans[3].innerHTML = meal.nutrition.fatValue + "g";
  nutritionSpans[4].innerHTML = meal.nutrition.fiberValue + "g";
  nutritionSpans[5].innerHTML = meal.nutrition.sodium + "mg";
  // ~ chief
  var chiefCartona = document.getElementById("chiefTips");
  chiefCartona.innerHTML = "";
  for (var i = 0; i < meal.chiefTips.length; i++) {
    chiefCartona.innerHTML += `<div class="one-four">
      <i class="fa-solid fa-circle-check"></i>
      <p>${meal.chiefTips[i]}</p>
    </div>`;
  }
  // instructions
  var instructionsCartona = document.getElementById("instructions");

  instructionsCartona.innerHTML = "";
  for (let i = 0; i < meal.instructions.length; i++) {
    var num = i + 1;
    instructionsCartona.innerHTML += `
                       
                     
                       <div class="list-tab-two">
                        <span>${num}</span>
                        <p>
                         ${meal.instructions[i]}
                        </p>
                      </div>

                    
    `;
  }
}
