// Є універсальний інтерфейс BankService із усіма можливими операціями.
// Проте не всі типи рахунків підтримують однакові функції.
// ❌ Порушення ISP — інтерфейс занадто широкий, усі класи реалізують непотрібні методи.
// interface BankServiceBad {
//   deposit(amount: number): void;
//   withdraw(amount: number): void;
//   transfer(to: string, amount: number): void;
//   loanRequest(amount: number): void;
// }
// // 💰 Клас SavingsAccount підтримує лише внесення, зняття та переказ,
// // але не може оформлювати кредити.
// class SavingsAccountBad implements BankServiceBad {
//   deposit(a: number) { console.log(`SavingsAccount: Deposited ${a}`); }
//   withdraw(a: number) { console.log(`SavingsAccount: Withdrawn ${a}`); }
//   transfer(to: string, a: number) { console.log(`SavingsAccount: Transferred ${a} to ${to}`); }
//   loanRequest(a: number) {
//     throw new Error("❌ Savings account cannot request loans!");
//   }
// }
// // 🏦 Клас LoanAccount створений лише для кредитів, але змушений реалізовувати інші методи.
// class LoanAccountBad implements BankServiceBad {
//   deposit(a: number) {
//     throw new Error("❌ Loan account cannot accept deposits directly!");
//   }
//   withdraw(a: number) {
//     throw new Error("❌ Loan account cannot withdraw funds directly!");
//   }
//   transfer(to: string, a: number) {
//     throw new Error("❌ Loan account cannot make transfers!");
//   }
//   loanRequest(a: number) {
//     console.log(`LoanAccount: Loan of ${a} requested`);
//   }
// }
// // 💳 Клас CheckingAccount (поточний рахунок) не може оформлювати кредити,
// // але все одно змушений реалізувати метод loanRequest().
// class CheckingAccountBad implements BankServiceBad {
//   deposit(a: number) { console.log(`CheckingAccount: Deposited ${a}`); }
//   withdraw(a: number) { console.log(`CheckingAccount: Withdrawn ${a}`); }
//   transfer(to: string, a: number) { console.log(`CheckingAccount: Transferred ${a} to ${to}`); }
//   loanRequest(a: number) {
//     throw new Error("❌ Checking account cannot request loans!");
//   }
// }
import CheckingAccount from "./services/CheckingAccount.js";
import LoanAccount from "./services/LoanAccount.js";
import SavingsAccount from "./services/SavingsAccount.js";
const depositBankingObj = new SavingsAccount();
depositBankingObj.deposit(1500);
const loanBankingObj = new LoanAccount();
loanBankingObj.loanRequest(750);
const checkingObj = new CheckingAccount();
checkingObj.transfer('Viktor', 2500);
