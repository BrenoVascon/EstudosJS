let valor // não inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor) // o nullo é bom ser usado quando quer anular uma variavel.
// console.log(valor.toString()) erro!!! não se pode acessar algo que é nulo
const produto = {}
console.log(produto.preco) // não da erro pois, o objeto "produto" foi definido, e o preco simplismente ainda não foi definido.

produto.preco = 3.3
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//  delete produto.preco serve para deletar o objeto

console.log(produto) // não fez com que o objeto deixasse de ter o atributo
