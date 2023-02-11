interface Strategy {
  execute(a: number, b: number): number;
}

class AdditionStrategy implements Strategy {
  execute(a: number, b: number): number {
    console.log(`Adding ${a} + ${b}`);
    return a + b;
  }
}

class SubtractionStrategy implements Strategy {
  execute(a: number, b: number): number {
    console.log(`Subtracting ${a} - ${b}`);
    return a - b;
  }
}

class Context {
  private strategy: Strategy;

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  executeStrategy(a: number, b: number): number {
    return this.strategy.execute(a, b);
  }
}

const context = new Context();

context.setStrategy(new AdditionStrategy());
console.log(`Result: ${context.executeStrategy(3, 4)}`);

context.setStrategy(new SubtractionStrategy());
console.log(`Result: ${context.executeStrategy(3, 4)}`);
