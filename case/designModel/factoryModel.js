/**工厂模式：它使用工厂方法来创建对象，而不是使用构造函数 */
/**基类 */
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
/**工厂类 */
class AnimalFactory {
  static createAnimal(type, name, age) {
    switch (type) {
      case 'dog':
        return new Animal(`Dog: ${name}`, age);
      case 'cat':
        return new Animal(`Cat: ${name}`, age);
      default:
        throw new Error('Invalid animal type');
    }
  }
}

const dog = AnimalFactory.createAnimal('dog', 'Tom', 3);
const cat = AnimalFactory.createAnimal('cat', 'Jerry', 2);

console.log(dog,cat)

