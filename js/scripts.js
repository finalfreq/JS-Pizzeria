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

//
// $(function() {
//   // body...
// });
