// pessoa -> 123 -> {...}
pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'ANA'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa)
console.log(pessoa)

// Constante object, referencia e objeto não pode haver alterações.
const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante)