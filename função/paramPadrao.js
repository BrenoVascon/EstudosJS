// Estrategia 1 para gerar valor padrão
function soma1 (a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c 
}
console.log(soma1(2, 3, 4), soma1(1,2,4))

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2 (a, b, c){
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? c : 1
    
    return a + b + c
}

//  valor padrão do es2015 
function soma3(a = 1, b = 1, c = 1 ){
    return a + b + c 
}

console.log(soma3(), soma3(3))