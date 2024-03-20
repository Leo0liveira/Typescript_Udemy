const firstName = "Leonardo"
const anotherName = 1
const x = true

/** 
 * * Ininciando criação de tipagem
 */

function greeting(name:string){
    console.log("Olá " + name)
}

greeting(firstName)

/**
 * ! O tipos abaixo não podem ser executados pois não são do tipo "String"
 */
// greeting(anotherName)
// greeting(x)

