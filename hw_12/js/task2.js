"use strict";
// Сповіщення про зміни на рахунку в банку.
// Створи клас BankAccount, який повідомляє підписані сервіси (SMSNotifier, EmailNotifier, Logger) про зміну балансу.
// Мета - продемонструвати, як одна подія може запускати кілька незалежних дій (надсилання SMS, e-mail, логування).
class BankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.listener = [];
    }
    subscribe(observer) {
        this.listener.push(observer);
    }
    changeBalance() {
        this.listener.forEach((method) => method(this.balance));
    }
}
class SMSNotifier {
    constructor() {
        this.watch = (balance) => {
            console.log(`SMS. Ваш баланс ${balance}`);
        };
    }
}
class EmailNotifier {
    constructor() {
        this.watch = (balance) => {
            console.log(`EMAIL. Ваш баланс ${balance}`);
        };
    }
}
class Logger {
    constructor() {
        this.watch = (balance) => {
            console.log(`Ваш баланс ${balance}`);
        };
    }
}
const sms = new SMSNotifier();
const e = new EmailNotifier();
const log = new Logger();
const bank = new BankAccount('Petro', 2500);
bank.subscribe(sms.watch);
bank.subscribe(e.watch);
bank.subscribe(log.watch);
bank.changeBalance();
bank.balance = 750;
bank.changeBalance();
