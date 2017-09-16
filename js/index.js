var app = angular.module('mah-app', []);

app.controller("mah-controller", function($scope) {
  $scope.name = "world";

  $scope.recipies = [
{
    "Name" : "Chicken Pasta",
    "Instructions" : "Step 1: Preheat oven to 200°C. Cook the penne in a large saucepan of boiling water following packet directions or until al dente. Drain well. Bake for 20 mins or until top is golden brown and pasta mixture is heated through. Serve immediately.",
    "Ingredients" : ["Chicken", "Pasta", "Cheese"],
    "Link" : "http://www.meckmin.org/wp-content/uploads/2015/08/person-placeholder-608x608.jpg"
},{
    "Name" : "Brocolli Beef salad",
    "Instructions" : "20",
    "Ingredients" : ["Brocolli", "Beef", "Cheese"], 
    "Link" : "http://www.meckmin.org/wp-content/uploads/2015/08/person-placeholder-608x608.jpg"
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
}
];
});

