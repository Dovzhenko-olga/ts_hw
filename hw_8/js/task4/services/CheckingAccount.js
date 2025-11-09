export default class CheckingAccount {
    deposit(a) {
        console.log(`CheckingAccount: Deposited ${a}`);
    }
    withdraw(a) {
        console.log(`CheckingAccount: Withdrawn ${a}`);
    }
    transfer(to, a) {
        console.log(`CheckingAccount: Transferred ${a} to ${to}`);
    }
}
