function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2// operação logica tipo OU
    const comprarTv50 = trabalho1 && trabalho2 //operação logica tipo I
    // const comprarTv32 = !!(trabalho1 ^ trabalho2)//bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unario

    return {comprarSorvete, manterSaudavel, comprarTv32, comprarTv50}

}

console.log(compras(true, true))

 