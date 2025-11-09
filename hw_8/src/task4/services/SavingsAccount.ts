import IDeposit from "../interfaces/IDeposit"
import ITransfer from "../interfaces/ITransfer"
import IWithdraw from "../interfaces/IWithdraw"

export default class SavingsAccount implements IDeposit, IWithdraw, ITransfer {
  deposit(a: number) { 
    console.log(`SavingsAccount: Deposited ${a}`)
  }
  withdraw(a: number) { 
    console.log(`SavingsAccount: Withdrawn ${a}`)
  }
  transfer(to: string, a: number) { 
    console.log(`SavingsAccount: Transferred ${a} to ${to}`)
  }
}