import { Renderer } from "./implementor";

// Abstraction
export abstract class Shape {
  constructor(protected renderer: Renderer) {}

  abstract draw(): void;
}
