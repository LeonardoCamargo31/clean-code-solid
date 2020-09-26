import Regra from './regra'

export class Cargo {
  private readonly regra: Regra

  constructor (regra: Regra) {
    this.regra = regra
  }

  getRegra (): Regra {
    return this.regra
  }
}
