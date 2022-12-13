function soma(){
 let soma = 0
 for (i in arguments){
    soma += arguments[i]
 }
 return soma
}

console.log(soma(24.3, 4.2))
// funciona com string, porem como a variavel esta no parametro, vira com o 0 na frente.