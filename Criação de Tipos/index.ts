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