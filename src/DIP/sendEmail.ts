import Action from './action'
import Invoice from './invoice'

export default class SendEmail implements Action {
  run (invoice: Invoice): void{
    console.log('implementação envia email')
  }
}
