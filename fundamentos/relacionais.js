console.log('01)', '1' == 1)  // é apenas igual '==' independente se um é uma string e outro um numero
console.log('02)', '2' === 2) //estritamente igual '==='

console.log('03)', '3' != 3) // é diferente? '!='
console.log('04)', '3' !== 3) // é estritamente diferente? '!=='

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 3) // menor ou igual '<='
console.log('08)', 3 >= 3) // maior ou igual '>='

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) 
console.log('10)', d1 == d2) // eh falso pois esta comparando o endereço de memoria
console.log('11)', d1.getTime() === d2.getTime()) // eh true pois esta pegando os numbers como referencia, não o endereço de memoria

console.log('12)', undefined == null) 
console.log('13)', undefined === null) // deu falso pois não são do mesmo tipo 


 

