import OrderStatus from "./OrderStatus.js"

type Item = {
  title: string,
  price: number,
  quantity: number,
}

export default interface IOrder {
  customer: string
  items: Item[]
}

export interface IOrderInfo extends IOrder{
  id: number
  status: OrderStatus
}