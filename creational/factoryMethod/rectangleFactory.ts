import { ShapeFactory } from "./factory";
import { Rectangle } from "./rectangle";
import { Shape } from "./shape";

export class RectangleFactory extends ShapeFactory {
    public createShape(): Shape {
      return new Rectangle();
    }
  }