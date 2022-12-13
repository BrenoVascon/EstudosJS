let notas = [5.5, 6.0, 7.2, 8.0, 9.0]

let notasBaixas= []
for(let i in notas) {
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com Callback 

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)
const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)