import Employee from './employee'
import RuleTenOrTwentyPercent from './ruleTenOrTwentyPercent'

export default class SalaryCalculator {
  calculate (employee: Employee): number {
    if (employee.getRole() === 'Developer') {
      return new RuleTenOrTwentyPercent().calculate(employee)
    }
  }
}
