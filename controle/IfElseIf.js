Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const ImprimirResultado = function(nota){
    if(nota.entre(9, 10)){
      console.log('quadro de honra')
        } else if(nota.entre(7, 8.99)) {
            console.log('Aprovado')
 
        } else if (nota.entre(4, 6.99)) {
            console.log('recuperação')
        } else if(nota.entre(0, 3.99)){
            console.log('reprovado')
        } else {
            console.log('nota invalida')
        }
}

ImprimirResultado(5)