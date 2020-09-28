import Action from './action'
import Invoice from './invoice'
import Account from './account'

export default class GenerateInvoice {
  private readonly actions: Action[]

  constructor (actions: Action[]) {
    this.actions = actions
  }

  generate (account: Account): Invoice {
    const value = account.getMonthlyValue()
    const invoice = new Invoice(value, this.simpleTax(value))

    this.actions.forEach(item => {
      item.run(invoice)
    })

    return invoice
  }

  private simpleTax (value: number): number {
    return value * 0.06
  }
}
