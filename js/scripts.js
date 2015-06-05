allToppings = [
  "cheese",
  "red onions",
  "green onions",
  "green peppers",
  "anchovies",
  "mushrooms",
  "olives",
  "artichokes",
  "chicken",
  "pepperoni",
  "beef",
  "salami" ]

function Pizza(size, cost, toppings) {
  this.toppings = []
  this.size = size
  this.cost = cost
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping)
};

Pizza.prototype.calculateCost = function() {
  this.cost += this.toppings.length * 1.50
};


$(function() {
  $("button#cyo").click(function() {
    $("#order-form").show();
    $("#home-page").hide();
  });
});
