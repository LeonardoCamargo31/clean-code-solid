export default class Account {
  private readonly monthlyValue: number

  constructor (monthlyValue: number) {
    this.monthlyValue = monthlyValue
  }

  getMonthlyValue (): number {
    return this.monthlyValue
  }
}
