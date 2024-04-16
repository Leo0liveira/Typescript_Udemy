/**
 * TODO: Campos em Classe
 * Inicialização sem valores
 */
class User{
  name!: string
  age!: number
}
const profile = new User()
profile.name = "Leonardo"
console.log(profile)

/**
 * TODO: Constructor
 * Contructor é uma função que nos dá a possibilidade de iniciar um objeto com valores nos seus campos
 * Isso faz com que não precisemos mais da notação "!"
 * Os campos serão preenchidos na hora que instanciarmos um objeto
 */
class newUser{
  name
  age

  constructor(name:string, age:number){
    this.name = name,
    this.age = age
  }
}
const user1 = new newUser("Leo", 24)
console.log(user1)

/**
 * TODO: ReadOnly
 * Criar um campo e troná-lo ReadOnly, sendo assim, apenas um valor para consulta
 * Não será possivel alterar o valor durante o programa
 */
class Car{
  name
  readonly wheels = 4

  constructor(name:string){
    this.name = name
  }
}
const fusca = new Car("Fusca")
console.log(fusca)
fusca.name = "Camaro"
// fusca.wheels = 5