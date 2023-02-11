class Subsystem1 {
  operation1(): string {
    return "Subsystem1: Ready!";
  }

  operationN(): string {
    return "Subsystem1: Go!";
  }
}

class Subsystem2 {
  operation1(): string {
    return "Subsystem2: Get ready!";
  }

  operationZ(): string {
    return "Subsystem2: Fire!";
  }
}

class Facade {
  protected subsystem1: Subsystem1;
  protected subsystem2: Subsystem2;

  constructor(subsystem1: Subsystem1 = null, subsystem2: Subsystem2 = null) {
    this.subsystem1 = subsystem1 || new Subsystem1();
    this.subsystem2 = subsystem2 || new Subsystem2();
  }

  operation(): string {
    let result = "Facade initializes subsystems:\n";
    result += this.subsystem1.operation1();
    result += "\n";
    result += this.subsystem2.operation1();
    result += "\n";
    result += "Facade orders subsystems to perform the action:\n";
    result += this.subsystem1.operationN();
    result += "\n";
    result += this.subsystem2.operationZ();
    return result;
  }
}

const facade = new Facade();
console.log(facade.operation());
