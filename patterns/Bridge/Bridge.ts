interface Color {
  fill(): string;
}

class Red implements Color {
  fill(): string {
    return "Red";
  }
}

class Green implements Color {
  fill(): string {
    return "Green";
  }
}

interface Shape {
  draw(): string;
}

class Circle implements Shape {
  private color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  draw(): string {
    return `Circle filled with ${this.color.fill()}`;
  }
}

class Square implements Shape {
  private color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  draw(): string {
    return `Square filled with ${this.color.fill()}`;
  }
}

const red = new Red();
const green = new Green();
const circle = new Circle(red);
const square = new Square(green);
console.log(circle.draw());
console.log(square.draw());
