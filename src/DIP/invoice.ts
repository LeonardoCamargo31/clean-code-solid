export default class Invoice {
  private readonly value: number
  private readonly tax: number

  constructor (value: number, tax: number) {
    this.value = this.round(value)
    this.tax = this.round(tax)
  }

  round (value: number): number {
    return parseFloat(value.toFixed(2))
  }
}
