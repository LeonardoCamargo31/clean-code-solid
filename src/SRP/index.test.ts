import Employee from './employee'
import SalaryCalculator from './salaryCalculator'

describe('SalaryCalculator', () => {
  test('Should return salary with ten percent discount', () => {
    const employee = new Employee('name', 'Developer', 1500.00)

    const salaryCalculator = new SalaryCalculator()
    const resp = salaryCalculator.calculate(employee)

    expect(resp).toBe(1350.00)
  })

  test('Should return salary with twenty percent discount', () => {
    const employee = new Employee('name', 'Developer', 3200.00)

    const salaryCalculator = new SalaryCalculator()
    const resp = salaryCalculator.calculate(employee)

    expect(resp).toBe(2560.00)
  })
})
