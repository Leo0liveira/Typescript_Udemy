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
