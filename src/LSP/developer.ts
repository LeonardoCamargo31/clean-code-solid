import Employee from './employee'

export default class Developer extends Employee {
  bonus (): number {
    return this.salary * 0.03
  }
}
