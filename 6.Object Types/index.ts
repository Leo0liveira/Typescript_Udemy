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

/**
 * TODO: Readonly
 * - As propriedades readonly podem ser altyeradas apenas uma vez, na criação do novo dado
 * - É uma forma de criar um valor constante em um objeto
 * - Podemos adicionar as interfaces
 */
interface Car {
  brand: string
  readonly wheels: number
}

const fusca: Car = {
  brand: 'Vw',
  wheels: 4,
}

/**
 * TODO: Index Signature
 * - Utilizamos o Index signature quando não sabemos o nome das chaves, mas já sabemos quais os tipos de um objeto ou array
 * - Isso restringe a tipos que não devem ser utilizados
 * - Uma barreira de segurança a mais na nossa variavel
 */
interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {
  x: 10,
}

// coords.y = 'teste'
coords.y = 15

console.log(coords)

interface OnlyNumberArray {
  [index: number]: number
}

const arr1: OnlyNumberArray = [1, 2, 3]

/**
 * TODO: Extending Types
 * - Utilizamos Extending Types como uma herança para criar tipos mais complexos por meio de uma interface
 * - Ou seja, uma interface pode herdar as propriedades e tipos já definidos de outra
 * - Isso acontece por meio da instrução extends
 */
interface Human {
  name: string
  age: number
}

interface SuperHuman extends Human {
  superpowers: string[]
}

const goku: SuperHuman = {
  name: 'Goku',
  age: 50,
  superpowers: ['Kamehameha', 'Genki Dama'],
}

console.log(goku)

/**
 * TODO: Intersection Types
 * - Intersection Types são utilizados para criar tipos mais complexos a partir de duas interfaces, por exemplo:
 * - Podemos concatenar os tipos com &
 */

interface Character {
  name: string
}

interface Gun {
  type: string
  caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: 'Arnold',
  type: 'Shotgun',
  caliber: 12,
}

console.log(arnold)

/**
 * TODO: ReadOnly Arrays
 * - O ReadOnly Arrays é um tipo para arrays, que deixa os itens como readonly
 * - Podemos aplicar um tipo para os itens do array, além desta propriedade especial
 * - A modificação de itens pode ser feita através de método, mas não podemos aumentar o array, por exemplo
 */

let myArray: ReadonlyArray<string> = ['Maçã', 'Laranja', 'Pêra']

// myArray[3] = 'Mamão'

myArray.forEach((item) => {
  console.log('Fruta: ' + item)
})

myArray = myArray.map((item) => {
  return `Fruta: ${item}`
})

console.log(myArray)

/**
 * TODO: Tuplas
 * - Tuplas é um tipo de array, porém definimos a quantidade e o tipo de elementos
 * - Basicamente criamos um novo type, e nele inserimos um array com os tipos necessários
 * - Cada tipo conta também como um elemento
 */
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]
// const mixedArray: fiveNumbers = ["teste", 1]

type nameAndAge = [string, number]

const anotherUser = ['Matheus', 30]

anotherUser[1] = 'João'

console.log(anotherUser)

/**
 * TODO: Tuplas com ReadOnly
 * - Podemos criar tuplas com a propriedade de readonly
 * - É um tipo de dado super restrito, pois:
 * - Limita quantos itens teremos, qual é o tipo de cada um e também não são modificáveis
 */
function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10
  console.log(numbers[0])
  console.log(numbers[1])
}

showNumbers([1, 2])
// showNumbers(['teste', 1])