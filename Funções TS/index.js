"use strict";
/**
 * * Funções sem retorno: Void
 */
function withoutReturn() {
    console.log('Não tem retorno');
    // return 1
}
withoutReturn();
/**
 * * Callback como argumento
 */
function greeting(name) {
    return `Olá ${name}!`;
}
function preGreeting(f, name) {
    console.log('Preparando a saudação!');
    const greet = f(name);
    console.log(greet);
}
preGreeting(greeting, 'Matheus');
preGreeting(greeting, 'João');
/**
 * * Generic Function
 */
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement([true, false]));
console.log(firstElement([]));
// firstElement('a')
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
const newObj = mergeObjects({ name: 'Matheus' }, { age: 30 });
console.log(newObj);
/**
 * * Constraints
 */
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 2));
console.log(biggestNumber('10', '5'));
/**
 * * Especificar tipo de argumento
 */
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2, 3], ['teste']));
/**
 * * Parametros Opcionais
 */
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}!`;
}
console.log(modernGreeting('Matheus', 'Sr.'));
console.log(modernGreeting('João'));
/**
 * * Parametro Default
 */
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(5, 20));
console.log(somaDefault(5));
/**
 * * Unknown
 */
function doSomething(x) {
    if (typeof x === 'number') {
        console.log('É um número!');
    }
    else {
        console.log('Não é um número!');
    }
    // x()
}
doSomething(10);
doSomething(false);
/**
 * * Never
 */
function showErrorMsg(msg) {
    throw new Error(msg);
}
// showErrorMsg('Algo deu errado!')
/**
 * * Rest Operator como Parametro
 */
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(4, 5, 6));
/**
 * * Destructuring como Parametro
 */
function showProductDetails({ name, price, }) {
    return `O nome do produto é ${name} e o seu preço é R$${price}`;
}
const shirt = { name: 'Camisa', price: 59.99 };
console.log(showProductDetails(shirt));
