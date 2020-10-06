# Open Closed Principle

Exemplo, o código é bem simples, o código é bastante coeso, temos classes com responsabilidades bem definidas:

```java
public class CalculadoraDePrecos{
  public double calcula(Compra produto){
    TabelaDePrecoPadrao tabela = new TabelaDePrecoPadrao();
    Frete correios = new Frete();

    double desconto = tabela.descontoPara(produto.gerarValor());
    double frete = correios.para(produto.getCidade());
    double valorDesconto = produto.getValor * desconto;

    return (produto.getValor - desconto) + frete;
  }
}

public class TabelaDePrecoPadrao{
  public double descontoPara(double valor){
    if(valor>5000) return 0.03;
    if(valor>1000) return 0.05;
    return 0;
  }
}

public class Frete{
  public double para(String cidade){
    if("São Paulo".equals(cidade.getToUpperCase()){
      return 15
    }
    return 30;
  }
}
```
O Problema, imagina um sistema que tenha mais de uma regra de cálculo de desconto. Uma maneira de fazer isso é adicionar vários If's, como por exemplo: 

```java
public class CalculadoraDePrecos{
  public double calcula(Compra produto){
    Frete correios = new Frete();
    double desconto

    if(REGRA 1){
      TabelaDePrecoPadrao tabela = new TabelaDePrecoPadrao();
      desconto = tabela.descontoPara(produto.gerarValor());
    }

    if(REGRA 2){
      TabelaDePrecoDiferente tabela = new TabelaDePrecoDiferente();
      desconto = tabela.descontoPara(produto.gerarValor());
    }

    double frete = correios.para(produto.getCidade());
    double valorDesconto = produto.getValor * desconto;

    return (produto.getValor - desconto) + frete;
  }
}
```

Isso até resolve, porem esse código ficará complicado, cheio de If's, e difícil de ser mantido.

## Conceito

Precisamos de classes que evoluam mais fácil, para isso, precisamos de classes **abertas para extensão, mas fechadas para modificação**, ou seja, extender o comportamento delas deve ser fácil. Mas ao mesmo tempo, elas devem ser fechadas para alteração.

Mas o que isso significa? Este princípio diz, basicamente, que você deve permitir que seus usuários adicionem novas funcionalidades sem alterar código já existente.


## Primeiro passo

Criar uma abstração para o problema, e fazer com que essas abstrações possam ser injetadas na classe que as usa. Se temos regras diferentes de desconto, basta criarmos interfaces que as representam.

```java
public interface TabelaPreco {
  double descontoPara(double valor);
}

public class TabelaPreco1 implements TabelaPreco {}
public class TabelaPreco2 implements TabelaPreco {}

public class Frete1 implements ServicoDeEntrega {}
public class Frete2 implements ServicoDeEntrega {}
```
## Próximo passo

É deixar de instanciar as implementações concretas dentro dessa classe, e passar a recebe-las pelo construtor.

Sempre que instanciámos classes diretamente dentro de outras classes perdemos a oportunidade de trocar essa implementação em tempo de execução.

Assim está aberta, para recebendo as dependências no construtor. Ou seja, conseguimos mudar o comportamento final da classe `CalculadoraDePrecos`, sem mudar o seu código.