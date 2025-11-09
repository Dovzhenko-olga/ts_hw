import ILoan from "../interfaces/ILoan"

export default class LoanAccount implements ILoan {
  loanRequest(a: number) {
    console.log(`LoanAccount: Loan of ${a} requested`)
  }
}