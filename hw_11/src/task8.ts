// ☕ Кавомашина (Coffee Shop):
// Створи базовий клас Coffee, який має метод getCost() і getDescription().
// Реалізуй декоратори (MilkDecorator, SugarDecorator, ChocolateDecorator), які додають нові властивості до базового напою.
// Мета - показати, як послідовно додавати функціональність об’єктам без множинного успадкування.

interface ICoffeeShop{
  getCost(price: number): void
  getDescription(): void
}

class Coffee implements ICoffeeShop{
  getCost(price: number): void {
    console.log(`Ваша кава вартує ${price}грн.`)
  }
  getDescription(): void {
    console.log(`Найароматніша арабіка з перцем і корицею, зварена з любов'ю.`)
  }
}

class MilkDecorator implements ICoffeeShop{
  constructor(private coffeeShop: ICoffeeShop){}
  getCost(price: number): void {
    this.coffeeShop.getCost(price)
    console.log('Додаткова вартість молока 10грн.')
  }
  getDescription(): void {
    this.coffeeShop.getDescription()
    console.log('Покрита пухнастою хмаринкою зпіненого молока.')
  }
}

class SugarDecorator implements ICoffeeShop{
  constructor(private coffeeShop: ICoffeeShop){}
  getCost(price: number): void {
    this.coffeeShop.getCost(price)
    console.log("Цукор безкоштовно. Але пам'ятайте про своє здоров'я!")
  }
  getDescription(): void {
    this.coffeeShop.getDescription()
    console.log('З приємним солодким смаком.')
  }
}

class ChocolateDecorator implements ICoffeeShop{
  constructor(private coffeeShop: ICoffeeShop){}
  getCost(price: number): void {
    this.coffeeShop.getCost(price)
    console.log('За посипку оплата - посмішка :)')
  }
  getDescription(): void {
    this.coffeeShop.getDescription()
    console.log('Тертий шоколад зверху додає настрою.')
  }
}

const milkCoffee = new MilkDecorator(new Coffee())
milkCoffee.getCost(75)
milkCoffee.getDescription()