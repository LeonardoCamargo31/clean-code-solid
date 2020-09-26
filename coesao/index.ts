import Funcionario from './funcionario'

export default class Controller {
  handle (): void{
    const funcionario = new Funcionario('Leonardo', 'Desenvolvedor', 1500.00)
    console.log(funcionario)
  }
}
