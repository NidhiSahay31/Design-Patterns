// Concrete class
/**
 * A concrete class is a class that provides an actual implementation of an interface or an abstract class.
 *  It is the class that gets instantiated in the factory method.
 */
//  Circle.ts
import { Shape } from "./shape";

export class Circle implements Shape {
  draw(): void {
    console.log("Drawing a Circle.");
  }
}


