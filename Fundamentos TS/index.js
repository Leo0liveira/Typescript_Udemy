"use strict";
/**
 * * Tipagem de número
 */
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 15.317894;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
/**
 * * Tipagem de string
 */
const firstName = "Leonardo";
const lastName = "Oliveira";
console.log(firstName.toUpperCase());
let fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
/**
 * * Tipagem de boolean
 */
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
/**
 * * Tipagem Annotation e Inference
*/
const ann = "Teste";
let inf = "Teste";
/**
 * ! Notar abaixo como a inferência funciona
 */ //inf = 1
