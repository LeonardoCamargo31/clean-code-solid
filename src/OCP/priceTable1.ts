import PriceTable from './priceTable'

export default class PriceTable1 implements PriceTable {
  discount (value: number): number {
    if (value > 5000) return 0.03
    if (value > 1000) return 0.05
    return 0
  }
}
