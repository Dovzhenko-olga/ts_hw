export default class SavingsAccount {
    deposit(a) {
        console.log(`SavingsAccount: Deposited ${a}`);
    }
    withdraw(a) {
        console.log(`SavingsAccount: Withdrawn ${a}`);
    }
    transfer(to, a) {
        console.log(`SavingsAccount: Transferred ${a} to ${to}`);
    }
}
