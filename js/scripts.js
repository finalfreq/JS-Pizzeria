// function User(argument) {
//   // body...
// }
//
function Pizza(size, cost, toppings) {
  this.toppings = []
  this.size = size
  this.cost = cost
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping)
};

// Pizza.prototype.calculateCost = function() {
//   this.price += this.toppings.length
// };

//
// $(function() {
//   // body...
// });
