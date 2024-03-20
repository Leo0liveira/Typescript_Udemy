/**
 * * Tipagem de número
 */

let x: number = 10
console.log(x)
x = 16
console.log(typeof x)
const y:number = 15.317894
console.log(typeof y)
console.log(y);
console.log(y.toPrecision(3));

/**
 * * Tipagem de string
 */

const firstName: string = "Leonardo"
const lastName: string = "Oliveira"
console.log(firstName.toUpperCase())
let fullName = firstName + " " + lastName
console.log(fullName)
console.log(typeof fullName);


/**
 * * Tipagem de boolean
 */

let a: boolean = false
console.log(a)
console.log(typeof a)
a = true 
console.log(a)

/**
 * * Tipagem Annotation e Inference
*/

const ann: string = "Teste"
let inf = "Teste"
/**
 * ! Notar abaixo como a inferência funciona
 */ //inf = 1

 /** Comandos TS
  * TODO: tsc --init / tsc -w 
  */

 /**
 * * Desafio 02 
 * 1. Crie uma variavel que recebe um número
 * 2. Converta o numero para string em uma nova variavel
 * 3. Esta varaivel de conversão deve estar tipada por inferência
 * 4. Imprima o numero em uma string maior, utilizando template string ou concatenação
*/

const numero: number = 100
const converted = numero.toString()
const biggerString = `O número convertido para string é: ${converted}`

console.log(biggerString)

