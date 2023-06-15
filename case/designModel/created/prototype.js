/**原型模式 */
// 定义原型 car
const car = {
  init: function (name) {
    this.name = name
  },
  getCar: function () {
    return 'getCar'+ this.name
  }
}
// electricCar 是一个新的car，同时增加了engine属性。
// electricCar 继承了原型上的方法，同时还新增属性。
const electricCar =function (name){
  function F() {}
  F.prototype = car
  const  f =new F()
  f.init(name)
  f.engine = 'Oil electric hybrid'
  return f
}
let myCar = new electricCar('BYD')

console.log(myCar.getCar())
console.log(myCar.engine)
