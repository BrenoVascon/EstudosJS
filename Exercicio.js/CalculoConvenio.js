function calcularPreço(idade){ 
    if (idade < 10){
       return 180
    } else if(idade < 30){
       return 150
    } else if(idade < 60){
        return 195
    } else (idade > 60);{
        return 230
    }
    
}

console.log(calcularPreço(9))
console.log(calcularPreço(20))
console.log(calcularPreço(50))
console.log(calcularPreço(61))
