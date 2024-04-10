"use strict";
/**
 * TODO: Revisão de Generics
 * - Utilizamos Generics quando uma função pode aceitar mais d eum tipo
 * - É uma prática mais interesasnte do que o any, que teria um efeito semelhante
 */
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData('teste'));
/**
 * TODO: Constraint Generics
 * - As constraint nos ajudam a limitar os tipos aceitos
 * - Como em generic podemos ter tipos livres, elas vão filtrar os tipos aceitos
 * - Adicionando organização quando queremos aproveitar a liberdade dos Generics
 */
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: 'Porta', cor: 'Branca' };
const secondObj = { name: 'Carro', rodas: 4 };
const thirdObj = { price: 19.99, qty: 10 };
console.log(showProductName(myObj));
console.log(showProductName(secondObj));
const myCar = { name: 'Fusca', wheels: 4, engine: 1 };
const myPen = { name: 'Caneta Bic', wheels: false, engine: false };
console.log(myCar);
console.log(myPen);
/**
 * TODO: Type parameters
 * - Type parameters é um recurso de Generics
 * - Utilizado para dizer que algum parâmetro de uma função, por exemplo, é a chave de um objeto, que também é parâmetro
 * - Desta maneira conseguimos criar uma ligação entre o tipo genérico e sua chave
 */
function getSomeKey(obj, key) {
    // return `A chave ${key} tem o valor ${obj[key]}`
}
const server = {
    hd: '2TB',
    ram: '32GB',
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: 'Leonardo',
    age: 24,
    hasDriveLicense: false,
};
console.log(showCharName(myChar, 'name'));
// console.log(showCharName([0]))
/**
 * TODO: TypeOf Operator
 * - Com o typeOf Type Operator podemos criar um novo tipo
 * - Este tipo será baseado no tipo de algum dado
 * - Ou seja, é interessante para quando queremos criar uma váriavél com o mesmo tipo da outra
 */
const userName = 'Leonardo';
const userName2 = 'João';
const userName4 = 'Joaquim';
