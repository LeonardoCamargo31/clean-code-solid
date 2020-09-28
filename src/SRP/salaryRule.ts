import Employee from './employee'

export default interface SalaryRule{
  calculate (employee: Employee): number
}
