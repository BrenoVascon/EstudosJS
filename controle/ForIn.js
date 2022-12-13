const notas = [6.7, 7.5, 8, 9, 7.7]

for(let i in notas) {
    console.log(notas[i])
}

const pessoa = {
    nome: 'Ana',
    peso: 50,
    idade: 20,
    sobrenome: 'Silva'
}

for(atributo in pessoa) {
    console.log(`${atributo} ${pessoa[atributo]}}`)
}