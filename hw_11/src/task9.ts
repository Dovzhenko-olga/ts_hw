// 📂 Каталог товарів у магазині
// Завдання:  Опиши структуру ProductComponent, де:
// Product - це окремий товар (листок);
// Category - це категорія, яка може містити підкатегорії або товари.
// Додай метод getTotalPrice() - він повинен рахувати суму цін усіх товарів у категорії.
// Мета: продемонструвати використання Composite для розрахунків у деревоподібних структурах.

interface IProductComponent{
  getTotalPrice():number
  show(indent?:string): void
}

class Product implements IProductComponent{
  constructor(
    private title: string,
    private price: number
  ){}
  getTotalPrice(): number {
    return this.price
  }

  show(indent: string = ''): void {
    console.log(`${indent}🧾 ${this.title} ${this.price} грн.`)
  }
}

class Category implements IProductComponent{
  private children: IProductComponent[] = []
  constructor(
    private name: string
  ) { }
  
  add(item: IProductComponent) {
    this.children.push(item)
  }
  
  getTotalPrice() {
      return this.children.reduce((acc, child) => acc + child.getTotalPrice(), 0)
  }

  show(indent: string = ''): void {
    console.log(`${indent}📂 ${this.name} ${this.getTotalPrice()} грн.`)
    
    for (const child of this.children) {
      child.show(indent + ' ')
    }
  }
}

const root = new Category('Products')
const baking = new Category('Baking')
const drinks = new Category('Drinks')

const ciabatta = new Product('Ciabatta', 25)
const donut = new Product('Donut', 18)
const lemonade = new Product('Lemonade', 35)
const juice = new Product('Juice', 75)

baking.add(ciabatta)
baking.add(donut)
drinks.add(lemonade)
drinks.add(juice)

root.add(baking)
root.add(drinks)
root.show()
