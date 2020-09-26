import Funcionario from './funcionario'
import RegraDezPorCento from './regraDezPorCento'

export class CalculadoraSalario {
  calcula (funcionario: Funcionario): Number {
    if (funcionario.getCargo() === 'Desenvolvedor') {
      return new RegraDezPorCento().calcula(funcionario)
    }
  }
}
