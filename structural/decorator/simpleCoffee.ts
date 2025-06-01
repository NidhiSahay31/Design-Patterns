import { Coffee } from "./coffee";

/**
 * Concrete component
 */
export class SimpleCoffee implements Coffee {
  cost(): number {
    return 5;
  }
  description(): string {
    return "Simple Coffee";
  }
}