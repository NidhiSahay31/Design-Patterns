import { CarBuilder } from "./CarBuilder";

// Step 3: Use the Builder Pattern
const myCar = new CarBuilder()
  .setModel("Tesla Model S")
  .setEngine("Electric")
  .setWheels(4)
  .setColor("Red")
  .build();

myCar.display();