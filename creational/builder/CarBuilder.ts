import { Builder } from "./Builder";
import { Car } from "./Car";

  // Step 2: Create the Car Builder
  export class CarBuilder implements Builder{
    private car: Car;
  
    constructor() {
      this.car = new Car();
    }
  
    public setModel(model: string): CarBuilder {
      this.car.model = model;
      return this;
    }
  
    public setEngine(engine: string): CarBuilder {
      this.car.engine = engine;
      return this;
    }
  
    public setWheels(wheels: number): CarBuilder {
      this.car.wheels = wheels;
      return this;
    }
  
    public setColor(color: string): CarBuilder {
      this.car.color = color;
      return this;
    }
  
    public build(): Car {
      return this.car;
    }
  }
  