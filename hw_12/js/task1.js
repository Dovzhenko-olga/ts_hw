"use strict";
// Обробка платежів різними способами. Опиши базовий інтерфейс PaymentStrategy з методом pay(amount: number).
// Створи реалізації для різних варіантів оплати: CreditCardPayment, PayPalPayment, CryptoPayment.
// Контекст PaymentProcessor має використовувати будь-яку стратегію залежно від вибору користувача.
class CreditCardPayment {
    pay(amount) {
        console.log(`З картки знято ${amount} грн.`);
    }
}
class PayPalPayment {
    pay(amount) {
        console.log(`З PayPal переведено ${amount} грн.`);
    }
}
class CryptoPayment {
    pay(amount) {
        console.log(`З Crypto гаманця конвертовано ${amount} грн.`);
    }
}
class PaymentProcessor {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    getPay(amount) {
        this.paymentStrategy.pay(amount);
    }
}
const payer = new PaymentProcessor(new CreditCardPayment());
payer.getPay(1500);
