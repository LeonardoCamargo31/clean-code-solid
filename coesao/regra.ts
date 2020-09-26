import Funcionario from './funcionario'

export default interface Regra{
  calcula (funcionario: Funcionario): Number
}
