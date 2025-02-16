import { Shape } from "./Shape";

// Step 3: Concrete Prototype - Rectangle
export class Rectangle extends Shape {
    constructor(color: string, public width: number, public height: number) {
        super('Rectangle', color);
    }

    clone(): Rectangle {
        return new Rectangle(this.color, this.width, this.height);
    }
}