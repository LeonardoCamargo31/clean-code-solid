# Liskov substitutive principle

## Conceito

Para usar herança de forma adequada, deve sempre pensar as suas pré e pós-condições que a classe pai definiu. Para isso as classes filhas devem sempre respeitar os contratos definidos pelos pais.

Toda classe ou método tem suas pré e pós-condições.

- **pré-condições**: dados chegam nela.
- **pós-condições**: o que aquele comportamento devolve.

Podemos sim mudar pré e pós-condições, mas com regras:

- **pré-condições**: a classe filho só pode afrouxar, exemplo a classe pai recebe de 1 a 100, a filho pode sobrescrever para receber de 1 a 200.
- **pós-condições**: a classe filho só pode apertar, a classe pai devolve de 1 a 100, a classe filho sobrescreve o método e devolve números entre 1 a 50.

**Nunca devemos apertar uma pré-condição ou afrouxar uma pós-condição, isso é o principio de substituição de Liskov.**


## Exemplo
```java
public class ContaComum {
  protected double saldo;

  public ContaComum(){
    this.saldo = 0;
  }

  public void deposita(double valor){
    if(valor<=0){
      throw new ValorInvalidoException()
    }

    this.salto += valor;
  }
  
  public double getSaldo(){
    return saldo;
  }

  public void rende(){
    this.saldo*=1.1;
  }
} 
```

Agora imagina a classe `ContaDeEstudante`, é exatamente igual a `ContaComum`, porem ela não "rende", poderíamos fazer a herança e o método rende, lançar uma exceção.


Isso a classe filha quebrou o contrato, no caso, a classe pai não lança uma exceção.

**Classes filhas precisam respeitar os contratos definidos pela classe pai.**

## Exemplo

```ts
export default class Employee {
  protected salary: number

  constructor (salary: number) {
    this.salary = salary
  }

  bonus (): number {
    return this.salary * 0.02
  }
}

export default class Developer extends Employee {
  bonus (): number {
    // teríamos os 30%
    return super.bonus()+this.salary * 0.01
  }
}
```
Mas qualquer alteração no pai, quebra o código no filho. O ideal seria o método ter a sua própria implementação e não dependender do pai.

```ts
export default class Employee {
  protected salary: number

  constructor (salary: number) {
    this.salary = salary
  }
}

export default class Developer extends Employee {
  bonus (): number {
    return this.salary * 0.03
  }
}
```


## Favoreça a composição

A composição tem vantagens, a relação entre a classe príncipal com a classe dependida não é tão intima. 

- Quebrar o encapsulamento é mais difícil. 
- A composição te da flexibilidade.
- Escrever testes é mais simples.


## Exemplo de Herança vs Composição

### Herança

Isso a classe filha quebrou o contrato, no caso, a classe pai não lança uma exceção.

```java
public class ContaComum {
  protected double saldo;

  public ContaComum(){
    this.saldo = 0;
  }

  public void deposita(double valor){
    if(valor<=0){
      throw new ValorInvalidoException()
    }

    this.salto += valor;
  }
  
  public double getSaldo(){
    return saldo;
  }

  public void rende(){
    this.saldo*=1.1;
  }
}

public class ContaEstudante extends ContaComum {
  public void rende(){
    throw new ContaNaoRendeException()
  }
}

```
### Composição 

A classe `ManipuladorDeSaldo` encapsula bem todo o comportamento, e ambas classes apenas utilizam.
```java
class ManipuladorDeSaldo {
  private double saldo;

  public void adiciona(double valor) {...}
  public void retira(double valor) {...}
  public void juros(double taxa) {...}
  public double getSaldo() {...}
}

class ContaComum {
  private ManipuladorDeSaldo manipulador;

  public ContaComum(){
    this.manipulador= new ManipuladorDeSaldo();
  }

  public void saca(double valor){
    manipulador.adiciona(valor)
  }

  public void rende(){
    manipulador.juros(0.1)
  }
}

class ContaEstudante {
  private ManipuladorDeSaldo manipulador;

  public ContaEstudante(){
    this.manipulador= new ManipuladorDeSaldo();
  }

  public void saca(double valor){
    manipulador.adiciona(valor)
  }
}
```