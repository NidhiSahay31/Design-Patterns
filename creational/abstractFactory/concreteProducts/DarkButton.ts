import { Button } from "../abstractProducts";

// Concrete Product: Dark Button
export class DarkButton implements Button {
    render(): void {
      console.log("Rendering a dark-themed button.");
    }
  }