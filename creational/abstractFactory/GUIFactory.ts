import { Button, Checkbox } from "./abstractProducts";

// Abstract Factory
export interface GUIFactory {
    //creation methods for all abstract products
    createButton(): Button;
    createCheckbox(): Checkbox;
  }
  