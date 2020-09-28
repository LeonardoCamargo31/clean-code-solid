import SalaryRule from './salaryRule'
import Employee from './employee'

export default class RuleTenOrTwentyPercent implements SalaryRule {
  calculate (employee: Employee): number {
    if (employee.getBaseSalary() > 3000.00) {
      return employee.getBaseSalary() * 0.8
    } else {
      return employee.getBaseSalary() * 0.9
    }
  }
}
