import Regra from './regra'
import Funcionario from './funcionario'

export default class RegraDezPorCento implements Regra {
  calcula (funcionario: Funcionario): Number {
    return 10
  }
}
