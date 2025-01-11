// Concrete class
// Rectangle.ts
import { Shape } from "./shape";

export class Rectangle implements Shape {
  draw(): void {
    console.log("Drawing a Rectangle.");
  }
}