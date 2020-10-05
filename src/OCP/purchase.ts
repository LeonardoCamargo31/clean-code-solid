export default class Purchase {
  private readonly amount: number
  private readonly city: string

  constructor (amount: number, city: string) {
    this.amount = amount
    this.city = city
  }

  get getCity (): string {
    return this.city
  }

  get getAmount (): number {
    return this.amount
  }
}
