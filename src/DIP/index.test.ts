import GenerateInvoice from './generateInvoice'
import InvoiceDao from './InvoiceDao'
import SendEmail from './sendEmail'
import Account from './account'

describe('GenerateInvoice', () => {
  test('Should return invoice', () => {
    const invoiceDao = new InvoiceDao()
    const sendEmail = new SendEmail()
    const account = new Account(189.99)

    const generateInvoice = new GenerateInvoice([invoiceDao, sendEmail])
    const resp = generateInvoice.generate(account)

    expect(resp).toEqual({ tax: 11.40, value: 189.99 })
  })
})
