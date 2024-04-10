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
