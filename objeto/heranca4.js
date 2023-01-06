function MeuObjeto() {}
console.log(MeuObjeto.prototype)
// objetos criandos pela mesma função construtora apontam para o um mesmo prototype

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__prot__ == obj2.__prot__) 
console.log(MeuObjeto.prototype == obj1.__prot__) 


MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()