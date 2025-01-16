import { Button } from "../abstractProducts";

// Concrete Product: Light Button
export class LightButton implements Button {
    render(): void {
      console.log("Rendering a light-themed button.");
    }
  }