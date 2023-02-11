interface Mediator {
  send(message: string, sender: Component): void;
}

class ConcreteMediator implements Mediator {
  private component1: Component;
  private component2: Component;

  setComponent1(component: Component): void {
    this.component1 = component;
  }

  setComponent2(component: Component): void {
    this.component2 = component;
  }

  send(message: string, sender: Component): void {
    if (sender === this.component1) {
      this.component2.notify(message);
    } else {
      this.component1.notify(message);
    }
  }
}

abstract class Component {
  protected mediator: Mediator;

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  abstract notify(message: string): void;
}

class ConcreteComponent1 extends Component {
  notify(message: string): void {
    console.log(`ConcreteComponent1 receives message: ${message}`);
  }
}

class ConcreteComponent2 extends Component {
  notify(message: string): void {
    console.log(`ConcreteComponent2 receives message: ${message}`);
  }
}

function clientCode(mediator: Mediator) {
  const component1 = new ConcreteComponent1();
  const component2 = new ConcreteComponent2();

  mediator.setComponent1(component1);
  mediator.setComponent2(component2);

  component1.setMediator(mediator);
  component2.setMediator(mediator);

  component1.notify("Hello");
  component2.notify("World");
}

const mediator = new ConcreteMediator();
clientCode(mediator);
