"use strict";
/**
 * TODO: De tipo para Interface
 * - Um caso de uso para interace é `simplificar os parâmetros de objeto` de funções
 * - Ou seja, em vez de passar parâmetros de um objeto longo para n funções, `passamos apenas a interface
 */
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`E-mail do usuário: ${user.email}`);
    if (user.role) {
        console.log(`Sua função no sistema é de: ${user.role}`);
    }
}
const u1 = { email: 'leonardo@teste.com', role: 'Admin' };
const u2 = { email: 'joao@teste.com' };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: 'Vw',
    wheels: 4,
};
let coords = {
    x: 10,
};
// coords.y = 'teste'
coords.y = 15;
console.log(coords);
const arr1 = [1, 2, 3];
const goku = {
    name: 'Goku',
    age: 50,
    superpowers: ['Kamehameha', 'Genki Dama'],
};
console.log(goku);
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12,
};
console.log(arnold);
/**
 * TODO: ReadOnly Arrays
 * - O ReadOnly Arrays é um tipo para arrays, que deixa os itens como readonly
 * - Podemos aplicar um tipo para os itens do array, além desta propriedade especial
 * - A modificação de itens pode ser feita através de método, mas não podemos aumentar o array, por exemplo
 */
let myArray = ['Maçã', 'Laranja', 'Pêra'];
// myArray[3] = 'Mamão'
myArray.forEach((item) => {
    console.log('Fruta: ' + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
const anotherUser = ['Matheus', 30];
anotherUser[1] = 'João';
console.log(anotherUser);
