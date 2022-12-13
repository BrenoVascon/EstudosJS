const prod1 = {}
prod1.nome = 'celular Ultra Mega'
prod1.preco = 334.3
prod1['Desconto Legal'] = 0.4 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
  nome: 'camisa polo',
  preco: 79.89,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2
    }
  }
}
console.log(prod2)
