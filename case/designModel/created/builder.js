/**构建器模式
 * 产品角色（Product）：它是包含多个组成部件的复杂对象，由具体建造者来创建其各个零部件。
 * 抽象建造者（Builder）：它是一个包含创建产品各个子部件的抽象方法的接口，通常还包含一个返回复杂产品的方法 getResult()。
 * 具体建造者(Concrete Builder）：实现 Builder 接口，完成复杂产品的各个部件的具体创建方法。
 * 指挥者（Director）：它调用建造者对象中的部件构造与装配方法完成复杂对象的创建，在指挥者中不涉及具体产品的信息。
 */

 class Product{
  setCpu(cpu){
    this.cpu = cpu
  }
  setDisk(disk){
    this.disk = disk
  }
  setVideoCard(videoCard){
    this.videoCard = videoCard
  }
  show(){
    console.log(`您可以购买的产品属性为：cpu:${this.cpu}  硬盘：${this.disk}  显卡：${this.videoCard}`)
  }
}
// 抽象建造者
class Builder {
  constructor() {
    this.product = new Product()
  }
  buildCpu(){}
  buildDisk(){}
  buildVideoCard(){}
  getResult(){
    return this.product
  }
}
// 具体建造者
class LowComputerBuild extends Builder{
  buildCpu() {
    super.buildCpu();
    console.log('cpu: i3')
    this.product.setCpu('i3')
  }
  buildDisk() {
    super.buildDisk();
    console.log('disk: 512G')
    this.product.setDisk('512G')
  }
  buildVideoCard() {
    super.buildVideoCard();
    console.log('video card: GTX980')
    this.product.setVideoCard('GTX980')
  }
}
class GoodComputerBuild extends Builder{
  buildCpu() {
    super.buildCpu();
    console.log('cpu: i9')
    this.product.setCpu('i9')
  }
  buildDisk() {
    super.buildDisk();
    console.log('disk: 2T')
    this.product.setDisk('2T')
  }
  buildVideoCard() {
    super.buildVideoCard();
    console.log('video card: GTX3070')
    this.product.setVideoCard('GTX3070')
  }
}
// 指挥者
class Director{
  constructor(money) {
    console.log('电脑销售人员：你好，你的口袋里装了多少钱啊',`我：我口袋里面有${money}`)
    if (money<10000){
      console.log('电脑销售人员心里话:穷鬼')
      this.builder = new LowComputerBuild()
    }else {
      console.log('电脑销售人员心里话:小肥羊啊，宰了')
      this.builder = new GoodComputerBuild()
    }
  }
  construct(){
    this.builder.buildCpu()
    this.builder.buildDisk()
    this.builder.buildVideoCard()
    return this.builder.getResult()
  }
}

function buyComputer() {
  console.log('I have $1000')
  let salesman = new Director(1000)
  let product =  salesman.construct()
  product.show()
  setTimeout(() => {
    console.log('after 2 years working ---> I have $10001 ')
    salesman = new Director(10001)
    product = salesman.construct()
    product.show()
  },2000)
}
buyComputer()
