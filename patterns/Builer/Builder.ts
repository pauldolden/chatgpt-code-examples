class Pizza {
  private toppings: string[] = [];

  addTopping(topping: string) {
    this.toppings.push(topping);
  }

  getToppings() {
    return this.toppings;
  }
}

class PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  addPepperoni() {
    this.pizza.addTopping("Pepperoni");
    return this;
  }

  addMushroom() {
    this.pizza.addTopping("Mushroom");
    return this;
  }

  addTomato() {
    this.pizza.addTopping("Tomato");
    return this;
  }

  build() {
    return this.pizza;
  }
}

const pizza = new PizzaBuilder()
  .addPepperoni()
  .addMushroom()
  .addTomato()
  .build();

console.log(pizza.getToppings());
