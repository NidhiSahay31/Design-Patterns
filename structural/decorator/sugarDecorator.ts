import { CoffeeDecorator } from "./coffeeDecorator";

/**
 * Concrete decorator
 */
export class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1;
  }

  description(): string {
    return this.coffee.description() + ", Sugar";
  }
}
