// funcao sem retorno 

function impimirSoma(a, b) {
  console.log(a + b)
}

impimirSoma(2, 3)
impimirSoma(2)
impimirSoma(2, 7, 3, 6, 7, 9)
impimirSoma()

// funcao com retorno 
function soma(a, b =1) {
  return a + b
}

console.log(soma(2, 3))
console.log(soma(6))
console.log(soma()) 