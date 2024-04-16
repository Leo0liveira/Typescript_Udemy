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
/**
* TODO: Override
* Usado para substituir um método de uma classe que herdamos algo
*/
class Base {
    someMethod() {
        console.log("Alguma coisa!");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Outra coisa!");
    }
}
const myNewClass = new Nova();
myNewClass.someMethod();
/**
* TODO: Visibilidade - Public
* Connceito de expor nosssos métodos de classes
* public > visibilidade default, pode ser acessado de qualquer lugar
* protected > acessível apenas a subclassee da classe do método
* private > apenas a classe que declarou o método pode utilizar
*/
class C {
    constructor() {
        this.x = 10;
    }
}
const cInstance = new C();
console.log(cInstance.x);
/**
 * TODO: Visibilidade - Protected
 * Podem ser utilizados apenas em subclasses
 * Uma propriedade só pode ser acessada por um método
 * O mesmo acontece com os métodos, adicionando uma camada de segurança ao código criado em uma classe
 */
class D {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("Estou protegido!");
    }
}
class E extends D {
    showX() {
        console.log("X: " + this.x);
    }
    useMethod() {
        this.protectedMethod();
    }
}
class F extends D {
}
const eInstance = new E();
eInstance.showX();
eInstance.useMethod();
const fInstance = new F();
// fInstance.showX()
/**
 * TODO: Visibilidade - Private
 * Os itens private, propriedades e objetos, só podem ser acessados na class que os definiu
 * E ainda precisam de métodos para serem acessados
 * Esta é a maior proteção para propriedades e métodos
 */
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        console.log(this.name);
    }
    privateMethod() {
        console.log("Sou privado!");
    }
    showPrivateMethodResult() {
        this.privateMethod();
    }
}
const pClass = new PrivateClass();
pClass.showName();
pClass.showPrivateMethodResult();
// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod()
//   }
// }
/**
 * TODO: Static Members
 * ´Podemos criar propriedades e métodos estáticos em classes
 * Isso faz com que o acesso ou a utilização não dependam de objetos
 * Podemos utilizar a partir da própria classe
 */
class StaticMembers {
    static staticMethod() {
        console.log("Este método é static!");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
/**
 * TODO: Generic Class
 * Podemos criar classes com tipos genericos
 * As propriedades dos argumentos podem ter os tipos definidos na hora da criação da instância
 * Isso nos permite maior flexibilidade em uma classe
 */
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem.showFirst);
/**
 * TODO: Parameters Properties
 * Parameters properties é um recurso para definir a privacidade, nome e tipos das propriedades no constructor
 */
class ParameterClass {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
    }
    get showQty() {
        return `Qtd total: ${this.qty}`;
    }
    get showPrice() {
        return `Preço: R$${this.price}`;
    }
}
const newShirt = new ParameterClass("Camisa", 5, 19.99);
console.log(newShirt.showQty);
// console.log(newShirt.qty)
/**
 * TODO: Class Expressions
 * É um recurso para criar uma classe anônima
 * Também pode usar generics junto desse recurso
 * Encapsula a classe em uma variável
 */
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Jones");
console.log(pessoa.name);
/**
 * TODO: Abstract Class
 * É um recurso para servir como molde de outra classe
 * Os métodos dela devem ser implementados nas classes que a herdam
 * Não podemos instanciar objetos a partir dessas classes
 */
class AbstractTest {
}
// const newObj = new AbstractTest()
class AbstractExample extends AbstractTest {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newObjAbstract = new AbstractExample("Josias");
newObjAbstract.showName();
/**
 * TODO: Relação entre Classes
 * Pode-se criar um objeto com base em outra classe
 * Quando as classes são idênticas o TS não acusa erros
 * Precisamos que as duas sejam exatamente iguais
 */
class Dog {
}
class Cat {
}
const doguinho = new Cat();
