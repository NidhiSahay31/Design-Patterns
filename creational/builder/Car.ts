// Step 1: Define the Car class
export class Car {
    public model?: string;
    public engine?: string;
    public wheels?: number;
    public color?: string;
    
    public display(): void {
      console.log(`Car Model: ${this.model}, Engine: ${this.engine}, Wheels: ${this.wheels}, Color: ${this.color}`);
    }
  }
  