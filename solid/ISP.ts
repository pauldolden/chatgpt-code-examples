// Example of an interface that violates the ISP
interface Shape {
  draw(): void;
  calculateArea(): void;
  calculatePerimeter(): void;
}

class Circle implements Shape {
  draw() {
    // Draw circle
  }

  calculateArea() {
    // Calculate area of circle
  }

  calculatePerimeter() {
    // Calculate perimeter of circle
  }
}

// Example of a refactored interface that follows the ISP
interface Drawable {
  draw(): void;
}

interface Calculable {
  calculateArea(): void;
  calculatePerimeter(): void;
}

class Circle implements Drawable, Calculable {
  draw() {
    // Draw circle
  }

  calculateArea() {
    // Calculate area of circle
  }

  calculatePerimeter() {
    // Calculate perimeter of circle
  }
}
