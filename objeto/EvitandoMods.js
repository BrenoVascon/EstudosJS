// Object.preventExtensions: consegue modificar os atributos e excluir, mas n pode addition

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//  Object.seal: não permite adicionar e excluir, porem é possivel alterar o valor dos atributos


const pessoa = {
    nome: 'Juliana', idade: 35
}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))
pessoa.sobrenome = "Silva"
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)

// Object.freeze = selado + valores constantes.
