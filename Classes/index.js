"use strict";
/**
 * TODO: Campos em Classe
 * Inicialização sem valores
 */
class User {
}
const profile = new User();
profile.name = "Leonardo";
console.log(profile);
/**
 * TODO: Constructor
 * Contructor é uma função que nos dá a possibilidade de iniciar um objeto com valores nos seus campos
 * Isso faz com que não precisemos mais da notação "!"
 * Os campos serão preenchidos na hora que instanciarmos um objeto
 */
class newUser {
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
}
const user1 = new newUser("Leo", 24);
console.log(user1);
/**
 * TODO: ReadOnly
 * Criar um campo e troná-lo ReadOnly, sendo assim, apenas um valor para consulta
 * Não será possivel alterar o valor durante o programa
 */
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
fusca.name = "Camaro";
// fusca.wheels = 5
/**
 * TODO: Herança e Super
 * Para gerar uma herança utilizamos a palabra reservada "extends"
 * Será preciso passar as propriedades da classe pai para ela quando instanciarmos um objeto
 * Isso será feito com a função super
 */
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class killerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new killerMachine("Destroyer", 4);
console.log("machine: " + trator, "killerMachine: " + destroyer);
