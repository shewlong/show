/**定义抽象工厂类：创建公共对象的族或组，而不指定它们的具体类，不做具体实现*/

/**定义抽象工厂类 */
class Drink {
    consume() {}
}


class Tea extends Drink {
    consume() {
        console.log("This is tea");
    }
}

class Coffee extends Drink {
    consume() {
        console.log("This is coffee");
    }
}

class DrinkFactory {
    prepare(amount) {}
}

class TeaFactory extends DrinkFactory {
    makeTea() {
        console.log("Tea Created");
        return new Tea();
    }
}

class CoffeeFactory extends DrinkFactory {
    makeCoffee() {
        console.log("Coffee Created");
        return new Coffee();
    }
}
const teaDrinkFactory = new TeaFactory();
const tea = teaDrinkFactory.makeTea();
tea.consume();

const coffeeDrinkFactory = new CoffeeFactory();
const coffee = coffeeDrinkFactory.makeCoffee();
coffee.consume();


