/**
 * TODO: Revisão de Generics
 * - Utilizamos Generics quando uma função pode aceitar mais d eum tipo
 * - É uma prática mais interesasnte do que o any, que teria um efeito semelhante
 */
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData('teste'))

/**
 * TODO: Constraint Generics
 * - As constraint nos ajudam a limitar os tipos aceitos
 * - Como em generic podemos ter tipos livres, elas vão filtrar os tipos aceitos
 * - Adicionando organização quando queremos aproveitar a liberdade dos Generics
 */
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`
}

const myObj = { name: 'Porta', cor: 'Branca' }
const secondObj = { name: 'Carro', rodas: 4 }
const thirdObj = { price: 19.99, qty: 10 }

console.log(showProductName(myObj))
console.log(showProductName(secondObj))
// console.log(showProductName(thirdObj))

/**
 * TODO: Interface com Generics
 * - Com interfaces podemos criar tipos complexos para objetos
 * - Adicionando Generics podemos deixá-los mais brandos
 * - Aceitando tipos diferentes em ocasiões diferentes
 */
interface MyObject<T, U> {
  name: string
  wheels: T
  engine: U
}

type Car = MyObject<number, number>
type Pen = MyObject<boolean, boolean>

const myCar: Car = { name: 'Fusca', wheels: 4, engine: 1 }
const myPen: Pen = { name: 'Caneta Bic', wheels: false, engine: false }

console.log(myCar)
console.log(myPen)

/**
 * TODO: Type parameters
 * - Type parameters é um recurso de Generics
 * - Utilizado para dizer que algum parâmetro de uma função, por exemplo, é a chave de um objeto, que também é parâmetro
 * - Desta maneira conseguimos criar uma ligação entre o tipo genérico e sua chave
 */
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  // return `A chave ${key} tem o valor ${obj[key]}`
}

const server = {
  hd: '2TB',
  ram: '32GB',
}

console.log(getSomeKey(server, 'ram'))

/**
 * TODO: KeyOf Type Operator
 * - Com o keyOf Type operator podemos criar um novo tipo
 * - Ele aceita dados do tipo objeto, como object literals e arrays
 * - E pode criar o tipo baseado nas chaves do objeto passado como parâmetro
 */
type Character = { name: string; age: number; hasDriveLicense: boolean }

type C = keyof Character

function showCharName(obj: Character, name: C): string {
  return `${obj[name]}`
}

const myChar: Character = {
  name: 'Leonardo',
  age: 24,
  hasDriveLicense: false,
}

console.log(showCharName(myChar, 'name'))
// console.log(showCharName([0]))

/**
 * TODO: TypeOf Operator
 * - Com o typeOf Type Operator podemos criar um novo tipo
 * - Este tipo será baseado no tipo de algum dado
 * - Ou seja, é interessante para quando queremos criar uma váriavél com o mesmo tipo da outra
 */
const userName: string = 'Leonardo'

const userName2: typeof userName = 'João'

// const userName3: typeof userName = 3

type x = typeof userName

const userName4: x = 'Joaquim'

/**
 * TODO: Indexed Access Types
 * - A abordagem Indexed Access Types pode criar um tipo baseado em uma chave de objeto
 * - Ou seja, conseguimos reaproveitar o tipo da chave para outros locais como funções
 */
type Truck = { km: number; kg: number; description: string }

type Km = Truck['km']

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: 'Caminhão para pouca carga',
}
function showTruckKm(km: Km) {
  console.log(`O caminhão já rodou ${km} kms`)
}

showTruckKm(newTruck.km)

/**
 * TODO: Condicional Exp Types
 * - O tipo por condição permite criar um novo tipo com base em um if/else
 * - Mas não são aceitas expressões tão amplas
 * - Utilizamos a sintaxe de if ternário 
 */
interface A {}

interface B extends A {}

type myType = B extends A ? number : string

const someVar: myType = 1
// const someVar2: myType = 'asd'