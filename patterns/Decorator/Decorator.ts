abstract class Component {
  abstract operation(): string;
}

class ConcreteComponent extends Component {
  operation(): string {
    return "ConcreteComponent";
  }
}

abstract class Decorator extends Component {
  protected component: Component;

  constructor(component: Component) {
    super();
    this.component = component;
  }
}

class ConcreteDecoratorA extends Decorator {
  operation(): string {
    return `ConcreteDecoratorA(${this.component.operation()})`;
  }
}

class ConcreteDecoratorB extends Decorator {
  operation(): string {
    return `ConcreteDecoratorB(${this.component.operation()})`;
  }
}

const component = new ConcreteComponent();
const decoratorA = new ConcreteDecoratorA(component);
const decoratorB = new ConcreteDecoratorB(decoratorA);
console.log(decoratorB.operation());
