function Produto(nome, preco){
    return{
        nome,
        preco,
        desconto: '5 reais'
    }
}

console.log(Produto('Note', 3000 ))