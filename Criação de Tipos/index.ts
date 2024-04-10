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
  name: 'Matheus',
  age: 30,
  hasDriveLicense: true,
}

console.log(showCharName(myChar, 'name'))
// console.log(showCharName([0]))