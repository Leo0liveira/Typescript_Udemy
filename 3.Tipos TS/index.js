"use strict";
/**
 * * Arrays
 */
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers[2]);
/**
 * ! Não é possível insirir string em um vetor de tipo Number
 */
//numbers = "teste"
const nomes = ["Leonardo", "Oliveira"];
/**
 * ! Mesmo comportamento para o tipo String
 */
//nomes.push(4)
/**
 * * Arrays com outra sintaxe
 */
const nums = [100, 200];
numbers.push(300);
console.log(nums);
//nums.push("teste")
console.log(nums[0]);
/**
 * * Tipo Any
 */
const arr1 = [1, "teste", true, [], { nome: "Leonardo" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
/**
 * * Parametros tipados
 */
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//soma("4","3")
/**
 * * Retorno de função
 */
function greeting(name) {
    // return 5 definindo o tipo na função não é possível retornar outro tipo 
    return `Olá $(name)`;
}
console.log(greeting("Leo"));
/**
 * * Função anônima
 */
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
/**
 * * Tipos de Objetos
 */
function passCoordinates(coord) {
    console.log("X cord: " + coord.x);
    console.log("Y cord: " + coord.y);
}
const objCoord = { x: 320, y: 84.2 };
passCoordinates(objCoord);
// passCoordinates([1,2])
// passCoordinates({name: , sobrenome:1})
const pessoaObj = { nome: "Leo", surname: "Oliveira" };
/**
 * * Propriedades Opcionais
 */
function showNumber(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumber(1, 2, 3);
showNumber(4, 5);
//showNumber(6)
/**
 * * Validando corretamente propriedades Opcionais
 */
function advanvedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advanvedGreeting("Leo", "Oliveira"));
console.log(advanvedGreeting("JOAQUIN"));
/**
 * * Union Type
 */
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500");
//showBalance(true)
const arr2 = [1, "teste", true];
/**
 * * Union Type condicionais
 */
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("ADMIN"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y:${obj.y} Z:${obj.z}`);
}
const coordObj = {
    x: 12,
    y: 23,
    z: 52
};
showCoords(coordObj);
const somePerson = { name: "Leo", age: 24 };
console.log(somePerson);
// type personType = {
//     age: number
// }
/**
 * * Literal Types
 */
let test;
test = "Testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
/**
 * * Non-null Assertion Operator
 */
const p = document.getElementById("some-p");
console.log(p.innerText);
/**
 * * BigInt
 */
let n;
n = 1000n;
/**
 * * Symbol
 */
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
/**
 * *
 */ 
