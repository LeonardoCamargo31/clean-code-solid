import PriceCalculator from './priceCalculator'
import PriceTable1 from './priceTable1'
import DeliveryServiceCorreios from './deliveryServiceCorreios'
import Purchase from './purchase'

describe('SalaryCalculator', () => {
  test('Should return salary with ten percent discount', () => {
    const priceTable1 = new PriceTable1()
    const deliveryServiceCorreios = new DeliveryServiceCorreios()
    const priceCalculator = new PriceCalculator(priceTable1, deliveryServiceCorreios)

    const purchase = new Purchase(150.90, 'Presidente Prudente')
    const resp = priceCalculator.calculate(purchase)

    expect(resp).toBe(165.9)
  })

  test('Should return salary with ten percent discount', () => {
    const priceTable1 = new PriceTable1()
    const deliveryServiceCorreios = new DeliveryServiceCorreios()
    const priceCalculator = new PriceCalculator(priceTable1, deliveryServiceCorreios)

    const purchase = new Purchase(1280.90, 'Presidente Prudente')
    const resp = priceCalculator.calculate(purchase)

    expect(resp).toBe(1231.86)
  })
})
