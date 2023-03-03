// Example of a class hierarchy that violates the LSP
class Animal {
  makeSound() {
    console.log("Animal makes a sound");
  }
}

class Bird extends Animal {
  makeSound() {
    console.log("Bird chirps");
  }
}

class Ostrich extends Bird {
  makeSound() {
    // Ostriches don't chirp
  }
}

// Example of a refactored class hierarchy that follows the LSP
interface Animal {
  makeSound(): void;
}

class Bird implements Animal {
  makeSound() {
    console.log("Bird chirps");
  }
}

class Ostrich implements Animal {
  makeSound() {
    console.log("Ostrich makes a sound");
  }
}
