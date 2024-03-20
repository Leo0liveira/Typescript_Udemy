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