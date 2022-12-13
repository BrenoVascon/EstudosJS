let a = 3 

globalThis.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.a)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

module.exports = {
    f: 456,
    h: false,
    z: 'teste'
    }
    console.log(module.exports.z)

    // criando uma variavel maluca: sem var e let!
    abc = 3 // não faça isso 
    console.log(global.abc)

    // module.exports = {e: 456, f:false, g,'teste'}