import Order from "./Order.js";
import OrderStatus from "./OrderStatus.js";
const orderObj = {
    customer: 'Petro',
    items: [
        { title: 'Rice', price: 75, quantity: 1 },
        { title: 'Barbecue', price: 350, quantity: 0.4 },
        { title: 'Sauce', price: 40, quantity: 1 },
    ],
};
const order = new Order(orderObj);
console.log(order.toString());
order.changeStatus(OrderStatus.SHIPPED);
console.log(order.toString());
