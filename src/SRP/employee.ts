export default class Employee {
  private readonly name: string
  private readonly role: string
  private readonly baseSalary: number

  constructor (name: string, role: string, baseSalary: number) {
    this.name = name
    this.role = role
    this.baseSalary = baseSalary
  }

  getRole (): string {
    return this.role
  }

  getBaseSalary (): number {
    return this.baseSalary
  }
}
