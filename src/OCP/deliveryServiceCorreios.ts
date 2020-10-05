import DeliveryService from './deliveryService'

export default class DeliveryServiceCorreios implements DeliveryService {
  destiny (city: string): number {
    return 15
  }
}
