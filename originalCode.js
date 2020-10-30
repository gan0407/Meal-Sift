let recipeList = [
    'Spaghetti', 
    'Stuffed Salmon', 
    'Roasted Soy Eggplant',
    'Italian Wedding Soup',
    'Chicken Casserole',
    'Slow Cooker Chicken Tacos',
    'Chicken Feast',
    'Slow Cooker Pot Roast',
    'Vegetable Lasagna',
    'Japanese Chicken Curry',
    'Chicken Parmesan',
    'Cajun Alfredo',
    'Bacon Wrapped Chicken Pesto',
    'Stuffed Chicken',
    'Chicken Salad Sandwiches'
];

let spaghetti = [
    "ground beef", 
    "sweet italian sausage", 
    "onion", 
    "tomato sauce", 
    "spaghetti or linguine"
];

let stuffedSalmon = [
    "salmon fillet",
    "baby spinach",
    "heavy cream",
    "rice or pasta of choice"
];

let roastedSoyEggplant = [
    "eggplants",
    "soy sauce",
    "rice"
];

let italianWeddingSoup = [
    "1 pound ground chicken",
    "1 large egg",
    "2 tbsp bread crumbs",
    "1/3 cup grated parmesan cheese",
    "italian seasoning",
    "onion powder",
    "garlic powder",
    "5 3/4 cups chicken broth",
    "1 package fresh spinach",
    "1 cup orzo pasta",
    "1 package sliced carrots"
];

let chickenCasserole = [
    "6 potatoes",
    "2 pounds ground chicken",
    "1 onion",
    "10 1/2 oz can of cream chicken soup",
    "1 cup cheese"
];

let chickenTacos = [
    "3 pounds chicken breast",
    "16 oz salsa",
    "2 juiced limes",
    "1 package taco seasoning"
];

let chickenFeast = [
    "chicken",
    "potatoes",
    "green beans or asparagus"
];

let potRoast = [
    "4-5 pound chuck roast",
    "thyme",
    "1 pound carrots",
    "2 pounds yukon gold potatoes",
    "minced garlic",
    "2 cups beef broth",
    "2 tablespoons cornstarch",
    "2 tablespoons water",
    "1 packet dry onion soup mix",
    "1 onion"
];

let vegetableLasagna = [
    "4 eggplants",
    "onion",
    "minced garlic",
    "1 package of mushrooms",
    "ready to boil lasagna",
    "low fat cottage cheese",
    "grated parmesan"
];

let japaneseChickenCurry = [
    "boneless skinless chicken breasts",
    "breadcrumbs",
    "S&B curry cubes",
    "carrots and potatoes",
    "rice"
];

let chickenParm = [
    "boneless skinless chicken breasts",
    "breadcrumbs",
    "tomato sauce",
    "pasta of choice", 
    "tomato sauce"
];

let cajunAlfredo = [
    "thin sliced chicken breast or shrimp (or both)",
    "pasta of choice",
    "heavy cream",
    "cajun seasoning",
    "paremsan cheese"
];

let baconChickenPesto = [
    "boneless skinless chicken breast",
    "pesto sauce",
    "thick sliced bacon"
];

let stuffedChicken = [
    "split chicken breast",
    "cream cheese",
    "basil",
    "italian seasoning"
];

let chickenSaladSandwiches = [
    "boneless skinless chicken breast or rotisserie chicken",
    "celery",
    "onion",
    "whole wheat bread",
    "mayo"
];

const shuffled = recipeList.sort(() => 0.5 - Math.random());
let chosen = shuffled.slice(0,4);
console.log(chosen);


//for(var i=0; i<recipeList.length; i++) {
//    console.log(recipeList[i])
//}

//console.log("Spaghetti: ")
//for(var i=0; i<spaghetti.length; i++) {
//    console.log(spaghetti[i])
//}
