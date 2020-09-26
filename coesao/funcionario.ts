export default class Funcionario {
  private readonly nome: string
  private readonly cargo: string
  private readonly salarioBase: Number

  constructor (nome: string, cargo: string, salarioBase: Number) {
    this.nome = nome
    this.cargo = cargo
    this.salarioBase = salarioBase
  }

  getCargo (): string {
    return this.cargo
  }

  getSalarioBase (): Number {
    return this.salarioBase
  }
}
