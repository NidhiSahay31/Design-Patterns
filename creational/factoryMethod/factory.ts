//creator class
/**
 * a class that contains the factory method. This factory method defines an interface for creating objects
 *  but lets subclasses or concrete implementations determine which class to instantiate.
 * Subclasses of the creator class (e.g., CircleFactory) 
 * implement the factory method to instantiate and return specific concrete classes
 */
// ShapeFactory.ts
import { Shape } from "./shape";


export abstract class ShapeFactory {
    public abstract createShape(): Shape;
  
    public render(): void {
      const shape = this.createShape();
      shape.draw();
    }
  }
