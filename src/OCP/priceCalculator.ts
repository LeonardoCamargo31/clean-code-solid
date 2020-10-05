import DeliveryService from './deliveryService'
import PriceTable from './priceTable'
import Purchase from './purchase'

export default class PriceCalculator {
  private readonly priceTable: PriceTable
  private readonly deliveryService: DeliveryService

  constructor (priceTable: PriceTable, deliveryService: DeliveryService) {
    this.priceTable = priceTable
    this.deliveryService = deliveryService
  }

  calculate (purchase: Purchase): number {
    const discount = this.priceTable.discount(purchase.getAmount)
    const freight = this.deliveryService.destiny(purchase.getCity)

    const valueDiscount = purchase.getAmount * discount
    const result = (purchase.getAmount - valueDiscount) + freight

    return parseFloat(result.toFixed(2))
  }
}
