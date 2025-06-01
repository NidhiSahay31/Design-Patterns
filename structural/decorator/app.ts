import { Coffee } from "./coffee";
import { MilkDecorator } from "./milkDecorator";
import { SimpleCoffee } from "./simpleCoffee";
import { SugarDecorator } from "./sugarDecorator";

let coffee: Coffee = new SimpleCoffee();
console.log(coffee.description(), "-", coffee.cost()); // Simple Coffee - 5

coffee = new MilkDecorator(coffee); // first wrapper
console.log(coffee.description(), "-", coffee.cost()); // Simple Coffee, Milk - 7

coffee = new SugarDecorator(coffee); //second wrapper
console.log(coffee.description(), "-", coffee.cost()); // Simple Coffee, Milk, Sugar - 8
