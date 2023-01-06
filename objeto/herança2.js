// cadeia de protótipos (prototype chain)
Object.prototype.attr = '0'
const avo = { attr: 'A'}
const pai = {__proto__: avo, attr2:'B', attr3: 'C'}
const filho = {__proto__:pai, attr3: 'Z'}


const carro = {

	velAtual: 0,
	velMax:200,
acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
        this.velAtual += delta
    } else {
        this.velAtual = this.velMax
    }
   
},     
   status() {
     return `${this.velAtual}Km/h de ${this.velMax}Km/h`

  }
}



const ferrari = {
	 modelo: 'F40', 
		velMax: 324 // shadowing
}


const volvo = {
	modelo: 'V40', 
	status() {
		 return `${this.modelo}: ${super.status()}`
	}, // Super referencia o protótipo
}




Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro); //
// Essa função (setPrototypeOf)estabele uma relação de protótipo entre os dois objetos.

console.log(ferrari);

volvo.acelerarMais(100)
	console.log(volvo.status())

	
ferrari.acelerarMais(300)
console.log(ferrari.status())