import { Shape } from "./Shape";

// Step 2: Concrete Prototype - Circle
export class Circle extends Shape {
    constructor(color: string, public radius: number) {
        super('Circle', color);
    }

    clone(): Circle {
        return new Circle(this.color, this.radius);
    }
}