// Використовуючи тип параметрів createProduct (title, price,discount) розробити функцію,
// яка б формувала параметри для створення продукту.

interface CreateProduct{
  title: string
  price: number
  discount: number
}

function getProductsParameters(title: string, price:number, discount: number)  {
  return {
    title,
    price,
    discount
  }
}

type ProductsParams = Parameters<typeof getProductsParameters>

const params: ProductsParams = ['vacuum', 15000, 3500]
const product1 = getProductsParameters(...params)

function renderProduct(user: CreateProduct) {
  
  const resultList = document.createElement('ul')

  for (const [key, value] of Object.entries(user)) {
  const listEl = document.createElement('li')
  listEl.textContent = `${key}: ${value}`
  resultList.appendChild(listEl)
}

  document.body.appendChild(resultList)
}
renderProduct(product1)
