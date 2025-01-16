import { Checkbox } from "../abstractProducts";

// Concrete Product: Light Checkbox
export class LightCheckbox implements Checkbox {
    render(): void {
      console.log("Rendering a light-themed checkbox.");
    }
  }