if(confirm('Почнемо покупки?')){
  type Product = {
    title: string,
    price: number,
    count: number
  }

  function getProduct(): Product{
    const title = prompt('Назва товару') ?? 'Product'
    const price = parseFloat(prompt('Ціна товару')!)
    const count = parseInt(prompt('Кількість')!)
    return {
      title,
      price,
      count
    }
  }

  const product1 = getProduct()
  const product2 = getProduct()
  const productsList: Product[] = [product1, product2]

  function getBill(products:Product[]) {
    document.write(`<h3>Фіскальний чек</h3>`)
    let total=0
    products.forEach(prod => {
      const cost = prod.count*prod.price
      document.write(`${prod.title}: ${prod.count} x ${prod.price}грн. - ${cost}грн.<br>`)
      total+=cost
    })
    document.write(`Всього: ${total}грн.`)
  }
  getBill(productsList)
}