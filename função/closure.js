// Closure é o escopo criado quando uma função é declarada
// esse escopo permite a fução acessar e manipular variáveis externas a função

// contexto léxico em ação
const x = global 

function fora(){
    const x = 'Local'
    function dentro(){
         return x 
    }
    return dentro 
}

const minhaFuncao = fora()
console.log(minhaFuncao())