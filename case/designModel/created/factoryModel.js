/**工厂模式：其在父类中提供一个创建对象的方法， 允许子类决定实例化对象的类型。 */
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

