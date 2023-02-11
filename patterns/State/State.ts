interface State {
  handle(): void;
}

class ConcreteStateA implements State {
  handle(): void {
    console.log("ConcreteStateA handled.");
  }
}

class ConcreteStateB implements State {
  handle(): void {
    console.log("ConcreteStateB handled.");
  }
}

class Context {
  private state: State;

  setState(state: State): void {
    this.state = state;
  }

  handle(): void {
    this.state.handle();
  }
}

const context = new Context();
context.setState(new ConcreteStateA());
context.handle();
context.setState(new ConcreteStateB());
context.handle();
