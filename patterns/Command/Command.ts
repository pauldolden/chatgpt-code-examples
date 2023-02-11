interface Command {
  execute: () => void;
  undo: () => void;
}

class Light {
  turnOn() {
    console.log("The light is on");
  }

  turnOff() {
    console.log("The light is off");
  }
}

class TurnOnLightCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.turnOn();
  }

  undo() {
    this.light.turnOff();
  }
}

class TurnOffLightCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.turnOff();
  }

  undo() {
    this.light.turnOn();
  }
}

class Switch {
  private lastCommand: Command;

  execute(command: Command) {
    this.lastCommand = command;
    command.execute();
  }

  undo() {
    this.lastCommand.undo();
  }
}

const light = new Light();
const turnOnLightCommand = new TurnOnLightCommand(light);
const turnOffLightCommand = new TurnOffLightCommand(light);

const switch1 = new Switch();
switch1.execute(turnOnLightCommand);
switch1.undo();

const switch2 = new Switch();
switch2.execute(turnOffLightCommand);
switch2.undo();
