let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 20
console.log(!!isAtivo)
console.log(!isAtivo)

console.log('os verdadeiros...')
console.log(!!3) //number
console.log(!!-1) // number negativo
console.log(!!' ') // texto vazio
console.log(!!'texto') // texto
console.log(!![]) // array
console.log(!!{}) // object literal
console.log(!!Infinity)
console.log(typeof Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!null)
console.log(!!'')
console.log(!!NaN) // not a number
console.log(!!undefined) // indefinido
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'desconnhecido')
