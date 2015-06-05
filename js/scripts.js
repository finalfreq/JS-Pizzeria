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

function Pizza(size, toppings) {
  this.toppings = []
  this.size = size
  this.cost = 0
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping)
};

Pizza.prototype.calculateCost = function() {
  this.cost += this.toppings.length * 1.50
  if (this.size === "large") {
    this.cost += 12
  } else if (this.size === "medium") {
    this.cost += 8
  } else {
    this.cost += 4
  }
  return this.cost
};


$(function() {
  allToppings.forEach(function(topping) {
    $("#toppings").append("<label><input type='checkbox' value='" + topping + "'>" + topping +" </label><br>")
  });

  $("button#cyo").click(function() {
    $("#order-form").show();
    $("#home-page").hide();
  });

  $("form#create-pizza").submit(function(event) {
    var size = $("#pizza-size").val();
    var pizza = new Pizza(size)

    $("#toppings :checked").each(function() {
      pizza.toppings.push($(this).val());
      $("ul#receipt").append("<li>" + $(this).val() + "</li>")
    });
    pizza.calculateCost();
    $("#order-form").hide();
    $("#order-finished").show();
    $(".size").append(size);
    $(".cost").append(parseFloat(pizza.cost).toFixed(2));
    event.preventDefault();
  });

  $("span#reset").click(function() {
    location.reload();
  });
});
