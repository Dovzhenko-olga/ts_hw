// Розробити функції для збереження/зчитування/перевірки якихось даних у localStorage.
// Додати опис у коментарях та створити автоматично документацію.


/**
 * Функція для збереження товару в localStorage
 * @param {string} title - назва товару
 * @param {number} price - ціна товару
 */
function saveProduct(title: string, price: number) {
  localStorage.setItem('product', JSON.stringify({title, price}))
}

/**
 * Функція для зчитування даних з localStorage
 */
function readProduct() {
  const productData = localStorage.getItem('product')
  if (productData) {
    const product = JSON.parse(productData)
    return `${product.title} - ${product.price}грн.`
  } else return 'Ви ще нічого не додали'
}

/**
 * Функція перевірки ціни товару
 * @param {number} maxPrice - максимально допустиме значення ціни
 * @returns {string} - повідомлення про результат порівняння
 */
function checkProduct(maxPrice: number) {
  const productData = localStorage.getItem('product')
  let message
  if (productData) {
    const product = JSON.parse(productData)
    product.price < maxPrice ? message = 'Це дешевий товар' : message = 'Це дуже дорого!'
  } else (
    message = 'Add product'
  )
  return message
}

saveProduct('Холодильник', 24500)

const product = readProduct()
const prodDiv = document.createElement('div')
prodDiv.textContent = product
document.body.appendChild(prodDiv)

const checkResult = checkProduct(25000)
const res = document.createElement('div')
res.textContent = checkResult
document.body.appendChild(res)