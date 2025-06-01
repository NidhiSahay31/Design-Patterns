import { Coffee } from "./coffee";
/**
 * Base decorator
 */

export class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost();
  }

  description(): string {
    return this.coffee.description();
  }
}
