// Json é um formato de dados, não é algo que é executado
const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
// os atributos precisam ser delimitados por aspas duplas

console.log(JSON.parse('{"a": 1, "b": "string", "c":true, "d": {}, "e": []}')) 