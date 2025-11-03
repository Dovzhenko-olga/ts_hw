// Клас: Order (Замовлення).
// Має поля: orderId, customer, items, totalAmount.
// Містить методи для обчислення загальної суми та зміни статусу.
import OrderStatus from "./OrderStatus.js";
export default class Order {
    constructor(order) {
        this.order = order;
        this._orderInfo = Object.assign(Object.assign({}, this.order), { id: this.RandomId, status: OrderStatus.PENDING });
    }
    get RandomId() {
        return Math.floor(Math.random() * (10000 - 1000 + 1));
    }
    get TotalAmount() {
        return this.order.items.reduce((prevSum, item) => prevSum + item.quantity * item.price, 0);
    }
    changeStatus(newStatus) {
        if (this._orderInfo.status !== newStatus)
            this._orderInfo.status = newStatus;
    }
    toString() {
        let message = 'Ваше замовлення: \n';
        this.order.items.forEach((item, index) => {
            message += `${index + 1}) ${item.title} \n`;
        });
        message += `Загальна сума: ${this.TotalAmount} грн.\n
    ${this._orderInfo.status}`;
        return message;
    }
}
