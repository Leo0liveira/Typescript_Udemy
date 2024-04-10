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