import { Renderer } from "./implementor";
import { Shape } from "./shape";

// Refined Abstraction
export class Circle extends Shape {
  constructor(renderer: Renderer, private radius: number) {
    super(renderer);
  }

  draw(): void {
    this.renderer.renderCircle(this.radius);
  }
}