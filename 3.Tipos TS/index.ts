/**
 * * Arrays
 */
let numbers: number[] = [1, 2, 3, 4]
numbers.push(5)
console.log(numbers[2])
/**
 * ! Não é possível insirir string em um vetor de tipo Number
 */
//numbers = "teste"

const nomes: string[] = ["Leonardo", "Oliveira"]
/**
 * ! Mesmo comportamento para o tipo String
 */
//nomes.push(4)

/**
 * * Arrays com outra sintaxe
 */
const nums: Array<number> = [100, 200]
numbers.push(300)
console.log(nums)
//nums.push("teste")
console.log(nums[0])

/**
 * * Tipo Any
 */
const arr1: any = [1, "teste", true, [], {nome: "Leonardo"}]
console.log(arr1)
arr1.push([1,2,3])
console.log(arr1)

/**
 * * Parametros tipados
 */
function soma(a:number, b:number){
    console.log(a+b)
}
soma(4,5)
//soma("4","3")

/**
 * * Retorno de função
 */
function greeting(name: string):string{
    // return 5 definindo o tipo na função não é possível retornar outro tipo 
    return `Olá $(name)`
}
console.log(greeting("Leo"))

/**
 * * Função anônima
 */
setTimeout(function(){
    const sallary: number = 1000
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000)

/**
 * * Tipos de Objetos
 */
function passCoordinates(coord: {x:number, y: number}){
    console.log("X cord: " + coord.x)
    console.log("Y cord: " + coord.y)
}
const objCoord = {x:320, y:84.2}
passCoordinates(objCoord)
// passCoordinates([1,2])
// passCoordinates({name: , sobrenome:1})
const pessoaObj: {nome:string, surname:string} = {nome:"Leo", surname:"Oliveira"}

/**
 * * Propriedades Opcionais
 */
function showNumber(a:number, b:number, c?:number){
    console.log("A: " + a)
    console.log("B: " + b)
    if(c){
        console.log("C: " + c)
    }
}
showNumber(1, 2, 3)
showNumber(4,5)
//showNumber(6)

/**
 * * Validando corretamente propriedades Opcionais
 */
function advanvedGreeting(firstName: string, lastName?: string){
    if(lastName !== undefined){
        return `Olá ${firstName} ${lastName}, tudo bem?`
    }
    return `Olá, ${firstName}, tudo bem?`
}
console.log (advanvedGreeting("Leo", "Oliveira"))
console.log(advanvedGreeting("JOAQUIN"))

/**
 * * Union Type
 */
function showBalance(balance: string | number){
    console.log(`O saldo da conta é R$${balance}`)
}
showBalance(100)
showBalance("500")
//showBalance(true)
const arr2: Array<number | string | boolean> = [1, "teste", true]

/**
 * * Union Type condicionais
 */
function showUserRole(role: boolean|string){
    if(typeof role === "boolean"){
        return "Usuário não aprovado!"
    }
    return `A função do usuário é: ${role}`
}
console.log(showUserRole(false))
console.log(showUserRole("ADMIN"))

/**
 * * Type Alias
 */
type ID = string | number
function showId(id: ID){
    console.log(`O ID é: ${id}`)
}
showId(1)
showId("200")

/**
 * * Interfaces
 */
interface Point {
    x: number
    y: number
    z: number
}
function showCoords(obj: Point){
    console.log(`X: ${obj.x} Y:${obj.y} Z:${obj.z}`)
}
const coordObj: Point = {
    x: 12,
    y: 23,
    z: 52
}
showCoords(coordObj)

/**
 * * Interface x Type Alias
 */
interface Person{
    name: string
}
interface Person{
    age: number
}
const somePerson: Person = {name:"Leo", age:24}
console.log(somePerson)
type personType = {
    name: string
}
// type personType = {
//     age: number
// }

/**
 * * Literal Types
 */
let test: "Testando"
test = "Testando"
console.log(test)

function showDirection(direction: "left" | "right" | "center"){
    console.log(`A direção é: ${direction}`)
}
showDirection("left")

/**
 * * Non-null Assertion Operator
 */
const p = document.getElementById("some-p")
console.log(p!.innerText)

/**
 * * BigInt
 */
let n: bigint
n = 1000n

/**
 * * Symbol
 */
let symbolA:symbol = Symbol("a")
let symbolB = Symbol("a")
console.log(symbolA == symbolB)
console.log(symbolA === symbolB)