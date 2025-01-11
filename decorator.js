class Coffee {
    cost() {
        return 5;
    }
}

class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    
    cost() {
        return this.coffee.cost() + 1;  // Milk costs 1 extra
    }
}

class SugarDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    
    cost() {
        return this.coffee.cost() + 0.5;  // Sugar costs 0.5 extra
    }
}

//main code
let myCoffee = new Coffee();
console.log("Cost of plain coffee: $" + myCoffee.cost());

myCoffee = new MilkDecorator(myCoffee);
console.log("Cost of coffee with milk: $" + myCoffee.cost());

myCoffee = new SugarDecorator(myCoffee);
console.log("Cost of coffee with milk and sugar: $" + myCoffee.cost());
