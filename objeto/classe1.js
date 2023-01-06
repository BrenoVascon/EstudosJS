class Lancamento {
    constructor(name = 'Génerico', valor = 0)
  {
  this.name = name
  this.valor = valor
 }
}

class CicloFinanceiro{
     constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
     }


   addLancamento(...lancamentos){
     lancamentos.forEach(l => {
         return this.lancamentos.push(l)
     })
  }
  
  sumario(){
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
        valorConsolidado += l.valor
    })
    return valorConsolidado
  }

}

const salario = new Lancamento('Salario', 2300)
const contaDeLuz = new Lancamento('Luz', -220)
const conta = new CicloFinanceiro(6, 2018)
const contas = new CicloFinanceiro(salario, contaDeLuz)
contas.addLancamento(salario, contaDeLuz)
console.log(contas.sumario())
