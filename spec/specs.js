describe("Pizza", function() {
  it("is initialized with set properties", function() {
    var pizza = new Pizza("large")
    expect(pizza.size).to.equal("large")
    expect(pizza.cost).to.equal(0)
    expect(pizza.toppings).to.eql([])

  });

  it("can have toppings added to it", function() {
    var pizza = new Pizza("large")
    pizza.addTopping("pepperoni")
    expect(pizza.toppings).to.eql(["pepperoni"])
  });

  it("can have its price calculated", function() {
    var pizza = new Pizza("large")
    pizza.addTopping("pepperoni")
    pizza.addTopping("mushrooms")
    pizza.calculateCost()
    expect(pizza.cost).to.equal(15)
  });
});
