class Avo {
      constructor (sobrenome) {
        this.sobrenome = sobrenome
      }
}

class Pai extends Avo {
    constructor (sobrenome, profissao = 'Professor') {
        super(sobrenome)
    }
}

class Filho extends pai {
     constructor () { 
        super('Silva')
     }
}