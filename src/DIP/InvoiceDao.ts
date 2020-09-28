import Action from './action'
import Invoice from './invoice'

export default class InvoiceDao implements Action {
  run (invoice: Invoice): void{
    console.log('implementação dao')
  }
}
