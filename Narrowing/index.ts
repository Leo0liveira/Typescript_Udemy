/**
 * * Type Guard
 */
function sum(a: number | string, b: number | string) {
    if (typeof a === 'string' && typeof b === 'string') {
      console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === 'number' && typeof b === 'number') {
      console.log(a + b)
    } else {
      console.log('Impossível realizar a soma!')
    }
  }
  
  sum(1, 2)
  sum('4', '4')
  sum('5', 1)
  
 /**
 * * Checando se valor existe
 */
  
  function operations(arr: number[], operation: string | undefined) {
    if (operation) {
      if (operation === 'sum') {
        const sum = arr.reduce((i, total) => i + total)
        console.log(sum)
      } else if (operation === 'multiply') {
        const multiply = arr.reduce((i, total) => i * total)
        console.log(multiply)
      }
    } else {
      console.log('Por favor, defina uma operação!')
    }
  }
  
  operations([10, 20, 30], 'sum')
  operations([10, 20, 30], 'multiply')
  operations([10, 20, 30], '')
  
/**
 * * Instance of
 */
  class User {
    name
  
    constructor(name: string) {
      this.name = name
    }
  }
  
  class SuperUser extends User {
    constructor(name: string) {
      super(name)
    }
  }
  
  const jhon = new User('Jhon')
  const paul = new SuperUser('Paul')
  
  function userGreeting(user: object) {
    if (user instanceof SuperUser) {
      console.log(`Olá ${user.name}, deseja ver os dados?`)
    } else if (user instanceof User) {
      console.log(`Olá ${user.name}!`)
    }
  }
  
  userGreeting(jhon)
  userGreeting(paul)
  
/**
 * * Operador In
 */
  class Dog {
    name
    breed
  
    constructor(name: string, breed?: string) {
      this.name = name
      if (breed) {
        this.breed = breed
      }
    }
  }
  
  const turca = new Dog('Turca')
  const bob = new Dog('Bob', 'Pastor Alemão')
  
  function showDogDetails(dog: Dog) {
    if ('breed' in dog) {
      console.log(`O cachorro é da raça: ${dog.breed}`)
    } else {
      console.log('O cachorro é um SRD!')
    }
  }
  
  showDogDetails(turca)
  showDogDetails(bob)
  
/**
 * * Desafio
 * 1. Criar uma função que recebe review dos usuários, usar narrowing para receber os dados;
 * 2. As possibilidades são boolean e number;
 * 3. Serão enviador numeros de 1 a 5, prever uma mensagem para cada uma das notas;
 * 4. Ou false, que é quando o usuário não deixa uma review, prever o retorno desse caso também.
 */
  type Review = number | boolean
  
  function showUserReview(review: Review) {
    if (!review) {
      console.log('Você não avaliou o produto!')
      return
    }
    console.log(`A nota que você deu foi ${review}, obrigado!`)
  }
  
  showUserReview(false)
  showUserReview(3)
  showUserReview(4)