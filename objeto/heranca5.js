console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){ 
    return this.split('').reverse().join('')
}

console.log('Escola cod3r'.reverse())

Array.prototype.reverse = function () {
    return this[0]
}

String.prototype.toString = function () {
    return 'Lascou Tudo'
}