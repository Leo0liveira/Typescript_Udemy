/**
 * * Tipagem de número
 */
var x = 10;
console.log(x);
x = 16;
console.log(typeof x);
var y = 15.317894;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
/**
 * * Tipagem de string
 */
var firstName = "Leonardo";
var lastName = "Oliveira";
console.log(firstName.toUpperCase());
var fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
/**
 * * Tipagem de boolean
 */
var a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
/**
 * * Tipagem Annotation e Inference
*/
var ann = "Teste";
var inf = "Teste";
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
var numero = 100;
var converted = numero.toString();
var biggerString = "O n\u00FAmero convertido para string \u00E9: ".concat(converted);
console.log(biggerString);
