describe("Pizza", function() {
  it("is initialized with set properties", function() {
    var pizza = new Pizza([], "large", 12)
    expect(pizza.size).to.equal("large")
    expect(pizza.cost).to.equal(12)
    expect(pizza.toppings).to.eql([])

  });
});
