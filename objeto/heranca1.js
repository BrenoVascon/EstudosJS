const ferrari = {
    modelo : 'F40',
    velMax: 324
}


const volvo = {
    modelo: 'V40',
    velMax: 250
}

console.log(ferrai.__proto__)
console.log(ferrai.__proto__ = Object.prototype)
console.log(volvo.__prot__ = Object.prototype)
console.log(Object.prototype.__proto__ = null) 

function meuObjeto(){
    console.log(typeof Object, typeof MeuObjeto)
    console.log(Object.prototypem, meuObjeto.prototype,)
}