interface Memento {
  getState(): string;
}

class Originator {
  private state: string;

  setState(state: string) {
    console.log(`Originator: Setting state to ${state}`);
    this.state = state;
  }

  getState(): string {
    return this.state;
  }

  saveToMemento(): Memento {
    console.log(`Originator: Saving to Memento.`);
    return {
      getState: () => this.state,
    };
  }

  restoreFromMemento(memento: Memento) {
    this.state = memento.getState();
    console.log(
      `Originator: State after restoring from Memento: ${this.state}`
    );
  }
}

class Caretaker {
  private mementos: Memento[] = [];

  addMemento(memento: Memento) {
    this.mementos.push(memento);
  }

  getMemento(index: number): Memento {
    return this.mementos[index];
  }
}

const originator = new Originator();
const caretaker = new Caretaker();

originator.setState("State1");
originator.setState("State2");
caretaker.addMemento(originator.saveToMemento());

originator.setState("State3");
caretaker.addMemento(originator.saveToMemento());

originator.setState("State4");
console.log(`Current State: ${originator.getState()}`);

originator.restoreFromMemento(caretaker.getMemento(1));
console.log(`Current State: ${originator.getState()}`);
