function soBoaNoticia(nota){
    if ( nota >= 7 )
    console.log('Aprovado: ' + nota)
}


soBoaNoticia(8.1)

function seforVerdadeEuFalo(valor){
        if(valor){
            console.log('É verdade... ' + valor)
        }
}

seforVerdadeEuFalo()
seforVerdadeEuFalo(null)
seforVerdadeEuFalo(undefined)
seforVerdadeEuFalo(NaN)
seforVerdadeEuFalo(' ')
seforVerdadeEuFalo(0)
seforVerdadeEuFalo('')