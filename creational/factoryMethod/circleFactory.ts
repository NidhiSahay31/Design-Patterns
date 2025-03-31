// CircleFactory.ts - concretefactories
import { Shape } from "./shape";
import { Circle } from "./circle";
import { ShapeFactory } from "./factory";

export class CircleFactory extends ShapeFactory {
  public createShape(): Shape { 
    return new Circle(); // Returns a concrete class
  }
}
