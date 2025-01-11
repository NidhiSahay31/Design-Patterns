// app.ts
import { CircleFactory } from "./circlefactory";
import { ShapeFactory } from "./factory";
import { RectangleFactory } from "./rectangleFactory";

function main() {
  // Use the CircleFactory
  const circleFactory: ShapeFactory = new CircleFactory();
  circleFactory.render(); // Output: Drawing a Circle.

  // Use the RectangleFactory
  const rectangleFactory: ShapeFactory = new RectangleFactory();
  rectangleFactory.render(); // Output: Drawing a Rectangle.
}

main();
