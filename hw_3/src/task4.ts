// Є продукти: Book (має author), Electronics (має warranty), Clothes (має size). Продукти можуть бути onSale або
// regularPrice. Створити тип ShopProduct, який об’єднує тип продукту та його статус, використовуючи & і |.

type Book = {
  author: string
}
type Electronics = {
  warranty: Date
}
type Clothes = {
  size: string
}
type TypeOfPrice = { discount: 'onSale' | 'regularPrice' }

type ShopProduct = (Book | Electronics | Clothes) & TypeOfPrice

const book: ShopProduct = {
  author: 'Azimov',
  discount: 'regularPrice'
}
const tv: ShopProduct = {
  warranty: new Date(),
  discount: 'onSale',
}
const shirt: ShopProduct = {
  size: 'XS',
  discount: 'onSale',
}
document.write(`This awesome book of ${book.author} is about ${book.discount}.`)