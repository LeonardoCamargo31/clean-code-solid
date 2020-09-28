import Invoice from './invoice'

export default interface Action{
  run(invoice: Invoice): void
}
