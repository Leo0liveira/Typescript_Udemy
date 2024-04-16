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
/**
 * TODO: Métodos
 * Métodos são como funções da classe
 * Podemos criá-los junto das classes e os objetovs podem utilizá-los
 */
class dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey you fool!");
    }
}
const gimli = new dwarf("Gimli");
console.log(gimli.name);
gimli.greeting();
console.log(gimli);
/**
 * TODO: This
 * Usada para se referir ao objeto em si
 * Acessar suas propriedades
 * Da mesma forma ao JavaScript
 */
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck("volvo", 400);
volvo.showDetails();
/**
* TODO: Getters
* Os getters são uma ferramenta de retornar propriedades do objeto
* Podemos modificá-las neste retorno
* É um método para ler propriedades
*/
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const leonardo = new Person("Leonardo", "Oliveira");
console.log(leonardo.fullName);
/**
* TODO: Setters
* Os getters leem propriedades, enquato os setters as modificam
* Logo, podemos fazer validações antes de inserir uma propriedade
* Os setters também funcionam como métodos
*/
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `Sua coordenada em X é: ${this.x} e em Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 155;
myCoords.fillY = 12312;
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
