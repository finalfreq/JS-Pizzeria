// function User(argument) {
//   // body...
// }
//
function Pizza(toppings, size, cost) {
  this.toppings = []
  this.size = size
  this.cost = cost
}

Pizza.prototype.addToppings = function(toppings) {
  this.toppings.push(toppings)
};
//
// $(function() {
//   // body...
// });
