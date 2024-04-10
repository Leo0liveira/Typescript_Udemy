/**
 * TODO: De tipo para Interface
 * - Um caso de uso para interace é `simplificar os parâmetros de objeto` de funções
 * - Ou seja, em vez de passar parâmetros de um objeto longo para n funções, `passamos apenas a interface
 */

interface Product{
  name: string
  price: number
  isAvailable: true
}

function showProductDetails(product: Product){
   console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
   if(product.isAvailable){
    console.log("O produto está disponível")
   }
}

const shirt:Product = {
  name:"Camisa",
  price:19.99,
  isAvailable: true
}

showProductDetails(shirt)

/**
 * TODO: Propriedades opcionais em interfaces
 * - As interfaces podem conter propriedades de objeto opcionais
 * - Basta adicionar a interrogação no nome da prop
 * - nome?: string
 */

interface User {
  email: string
  role?: string
}

function showUserDetails(user: User) {
  console.log(`E-mail do usuário: ${user.email}`)
  if (user.role) {
    console.log(`Sua função no sistema é de: ${user.role}`)
  }
}

const u1 = { email: 'leonardo@teste.com', role: 'Admin' }
const u2 = { email: 'joao@teste.com' }

showUserDetails(u1)
showUserDetails(u2)