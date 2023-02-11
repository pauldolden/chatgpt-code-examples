class LegacyRectangle {
  width: number;
  height: number;

  setWidth(width: number) {
    this.width = width;
  }

  setHeight(height: number) {
    this.height = height;
  }
}

interface Rectangle {
  width: number;
  height: number;
}

class RectangleAdapter implements Rectangle {
  private legacyRectangle: LegacyRectangle;

  constructor(legacyRectangle: LegacyRectangle) {
    this.legacyRectangle = legacyRectangle;
  }

  get width() {
    return this.legacyRectangle.width;
  }

  set width(value: number) {
    this.legacyRectangle.setWidth(value);
  }

  get height() {
    return this.legacyRectangle.height;
  }

  set height(value: number) {
    this.legacyRectangle.setHeight(value);
  }
}

const legacyRectangle = new LegacyRectangle();
const rectangle = new RectangleAdapter(legacyRectangle);
rectangle.width = 10;
rectangle.height = 20;
console.log(rectangle.width);
console.log(rectangle.height);
