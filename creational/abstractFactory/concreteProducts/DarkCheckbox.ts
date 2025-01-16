import { Checkbox } from "../abstractProducts";

// Concrete Product: Dark Checkbox
export class DarkCheckbox implements Checkbox {
    render(): void {
      console.log("Rendering a dark-themed checkbox.");
    }
  }