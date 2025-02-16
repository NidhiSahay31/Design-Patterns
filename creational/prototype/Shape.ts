// Step 1: Abstract Prototype (Base Shape Class)
export abstract class Shape {
    constructor(public type: string, public color: string) {}

    // Abstract clone method to be implemented by subclasses
    abstract clone(): Shape;

    draw(): void {
        console.log(`Drawing ${this.color} ${this.type}`);
    }
}