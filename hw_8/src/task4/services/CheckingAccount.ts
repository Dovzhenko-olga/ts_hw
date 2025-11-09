import IDeposit from "../interfaces/IDeposit"
import ITransfer from "../interfaces/ITransfer"
import IWithdraw from "../interfaces/IWithdraw"

export default class CheckingAccount implements IDeposit, IWithdraw, ITransfer {
  deposit(a: number) {
    console.log(`CheckingAccount: Deposited ${a}`)
 }
  withdraw(a: number) {
    console.log(`CheckingAccount: Withdrawn ${a}`)
 }
  transfer(to: string, a: number) {
    console.log(`CheckingAccount: Transferred ${a} to ${to}`)
 }
}