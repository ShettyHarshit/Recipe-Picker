var app = angular.module('mah-app', []);

app.controller("mah-controller", function($scope) {
  $scope.name = "world";

  $scope.recipies = [
{
    "Name" : "Chicken Pasta",
    "Instructions" : "Step 1: Preheat oven to 200°C. Cook the penne in a large saucepan of boiling water following packet directions or until al dente. Drain well. Bake for 20 mins or until top is golden brown and pasta mixture is heated through. Serve immediately.",
    "Ingredients" : ["Chicken", "Pasta", "Cheese"],
    "Link" : "https://supervalu.ie/thumbnail/720x400/var/files/good-food-karma/recipe/48423/MainPasta.jpg?fill=1",
    "List" : "100 gm penne pasta, 1 cup cherry tomatoes, halved, ½ cup smoked chicken, 2 Tbsp parmesan, grated, Salt to taste, A bunch of fresh basil leaves, 2-3 garlic cloves, 1 Tbsp pine nuts, ¼ cup Parmesan, ½ cup olive oil"
},{
    "Name" : "Shrimp Fried Rice",
    "Instructions" : "In wok or large skillet, heat sesame oil over medium heat. Cook eggs in oil, stirring constantly, until thickened but still moist. Remove eggs from skillet to plate; cover to keep warm. In same skillet, heat olive oil over medium-high heat. Add broccoli, carrots and pea pods; stir-fry until crisp-tender. Reduce heat to medium. Stir in rice, garlic, gingerroot and soy sauce. Add shrimp. Cook 5 to 7 minutes, stirring frequently, until rice is hot and shrimp are pink. Stir in scrambled eggs and green onions; cook 1 minute longer. Serve immediately.",
    "Ingredients" : ["Rice", "Shrimp", "Schezwan"], 
    "Link" : "https://images-gmi-pmc.edge-generalmills.com/ffb1d868-25c3-4d9f-baa6-15df4c74b7a4.jpg",
    "List" : "1 tablespoon sesame oil, 2 eggs, slightly beaten, 1 tablespoon olive oil, 2 cups chopped fresh or frozen (thawed) broccoli, 1 cup chopped carrots, 1 cup fresh or frozen (thawed) snow pea pods, 2 cups cold cooked white rice,  1 clove garlic, finely chopped, 1 teaspoon grated gingerroot, 3 tablespoons soy sauce, 1 lb uncooked medium shrimp, peeled (tail shells removed), deveined, 1 cup chopped green onions"
},{
    "Name" : "Brocolli Beef salad",
    "Instructions" : "20",
    "Ingredients" : ["Brocolli", "Beef", "Cheese"], 
    "Link" : "http://www.meckmin.org/wp-content/uploads/2015/08/person-placeholder-608x608.jpg",
    "List" : "100 gm penne pasta, 1 cup cherry tomatoes, halved, ½ cup smoked chicken, 2 Tbsp parmesan, grated, Salt to taste, A bunch of fresh basil leaves, 2-3 garlic cloves, 1 Tbsp pine nuts, ¼ cup Parmesan, ½ cup olive oil"
},{
    "Name" : "Chicken Cheese Sandwich",
    "Instructions" : "20",
    "Ingredients" : ["Chicken", "Bread", "Cheese"],
    "Link" : "http://www.meckmin.org/wp-content/uploads/2015/08/person-placeholder-608x608.jpg"
},{
    "Name" : "Chinese Style Fish Fingers",
    "Instructions" : "20", 
    "Ingredients" : ["Fish", "Egg", "Cheese"],
    "Link" : "http://www.meckmin.org/wp-content/uploads/2015/08/person-placeholder-608x608.jpg"
},{
    "Name" : "Spicy Shrimp and Broccoli",
    "Instructions" : "Mix water, soy sauce and chili puree. Heat wok or 12-inch skillet over high heat. Add oil; rotate wok to coat side. Add shrimp, garlic and gingerroot; stir-fry 1 minute. Add broccoli, bell pepper and onions; stir-fry until shrimp are pink and firm. Stir in sake mixture. Heat to boiling, stirring constantly. Boil and stir 1 minute. Sprinkle with peanuts. Serve over rice.", 
    "Ingredients" : ["Shrimp", "Broccoli", "Onions"],
    "Link" : "https://images-gmi-pmc.edge-generalmills.com/2fb0cabb-f201-407d-8974-9341fe1dff97.jpg",
    "List" : "1 1/2 cups broccoli flowerets, 1 medium bell pepper, cut into strips, 4 medium green onions, cut into 1-inch pieces, 1/3 cup peanuts, 4 cups hot cooked rice, 2 teaspoons soy sauce, 2 teaspoons chili puree with garlic, 1 tablespoon vegetable oil"

},{
    "Name" : "Chicken Manchurian",
    "Instructions" : "Mix together the chicken, egg, flour, garlic and ginger paste, enough water so as to have a thick batter. Leave this for 5-10 minutes.Heat the oil, keeping the heat high drop heaped teaspoonfuls of batter and fry to a golden brown. Drain on absorbent paper till required. Heat 2 Tbsp of oil, and stir-fry the garlic and onion in it over high heat, till the onions look glossy. Add the capsicum and turn around a few times.Add the sauce mixture, and simmer till the sauce thickens and becomes translucent. Add the fried balls, turn around a few times and serve.", 
    "Ingredients" : ["Chicken", "Tomatoes", "Onions"],
    "Link" : "https://www.ndtv.com/cooks/images/chicken-manchurian-new.jpg",
    "List" : "1 1/2 cups broccoli flowerets, 1 medium bell pepper, cut into strips, 4 medium green onions, cut into 1-inch pieces, 1/3 cup peanuts, 4 cups hot cooked rice, 2 teaspoons soy sauce, 2 teaspoons chili puree with garlic, 1 tablespoon vegetable oil"

}
];
});

