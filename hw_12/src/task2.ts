// Сповіщення про зміни на рахунку в банку.
// Створи клас BankAccount, який повідомляє підписані сервіси (SMSNotifier, EmailNotifier, Logger) про зміну балансу.
// Мета - продемонструвати, як одна подія може запускати кілька незалежних дій (надсилання SMS, e-mail, логування).

type ObserverFunc = (balance: number) => void

interface IWatchable{
  watch:ObserverFunc
}

class BankAccount{
  private listener: ObserverFunc[] = []

  constructor(
    public name: string,
    public balance: number
  ) { }

  subscribe(observer: ObserverFunc) {
    this.listener.push(observer)
  }

  changeBalance(){
  this.listener.forEach((method)=> method(this.balance))
  }
}

class SMSNotifier implements IWatchable {
  watch = (balance: number) => {
    console.log(`SMS. Ваш баланс ${balance}`)
  }
}

class EmailNotifier implements IWatchable {
  watch = (balance: number) => {
    console.log(`EMAIL. Ваш баланс ${balance}`)
  }
}

class Logger implements IWatchable {
  watch = (balance: number) => {
    console.log(`Ваш баланс ${balance}`)
  }
}

const sms = new SMSNotifier()
const e = new EmailNotifier()
const log = new Logger()

const bank = new BankAccount('Petro', 2500)
bank.subscribe(sms.watch)
bank.subscribe(e.watch)
bank.subscribe(log.watch)

bank.changeBalance()
bank.balance = 750
bank.changeBalance()