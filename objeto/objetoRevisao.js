// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca de produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco

delete produto['marca de produto']


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
         endereco: { 
            logradouro: 'Rua ABC',
            numero: 123
         }
    },
    condutores: [{
       nome: 'Junior',
       idade: 42

    },{
        nome: 'Ana',
        idade: 42
    }],

    calcularValorSeguro: function(){
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['propietario']['endereco'] ['logradouro'] = 'Av Gigante'

console.log(carro)
// pode excluir qlq coisa do objeto

delete carro.condutores
delete carro.calcularValorSeguro
