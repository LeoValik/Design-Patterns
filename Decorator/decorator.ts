abstract class Coffee {
    public description: string;

    public getDescription() : string {
        return this.description;
    };

    public abstract cost(): number;
}

abstract class CoffeeDecorator extends Coffee {
    decoratedCoffee: Coffee;
    public abstract getDescription(): string;
}

//  Drinks (beverages) - Напитки
class Espresso extends Coffee {
    public description = "Espresso";

    public cost(): number {
        return 14.99;
    }
}

class Latte extends Coffee {
    public description = "Latte";

    public cost(): number {
        return 9.99;
    }
}

class Cappuccino extends Coffee {
    public description = "Cappuccino";

    public cost(): number {
        return 17.99;
    }
}

//  Condiments - Дополнители 
class Sugar extends CoffeeDecorator {
    constructor(beverage: Coffee) {
        super();    // вызов конструктора базового класса
        this.decoratedCoffee = beverage;
    }

    public getDescription(): string {
        return this.decoratedCoffee.getDescription() + ', Sugar';
    }

    public cost(): number {
        return this.decoratedCoffee.cost() + 1.60;
    }
}

class Milk extends CoffeeDecorator {
    constructor(beverage: Coffee) {
        super();    // вызов конструктора базового класса
        this.decoratedCoffee = beverage;
    }

    public getDescription(): string {
        return this.decoratedCoffee.getDescription() + ', Milk';
    }

    public cost(): number {
        return this.decoratedCoffee.cost() + 2.25;
    }
}

//  Make our coffee! 
let ourCoffee = new Espresso();
ourCoffee = new Sugar(ourCoffee);
ourCoffee = new Milk(ourCoffee);

console.log(ourCoffee.cost());
console.log(ourCoffee.getDescription());