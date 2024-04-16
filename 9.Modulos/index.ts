import importGreet from "./greet";
importGreet();

import {x} from "./varaiable"
console.log(x)

import {a, b, myFunc} from "./multiple"
console.log(a)
console.log(b)
myFunc()

import {someName as otherName} from './changename.js'
console.log(otherName)

// 5 - import all
import * as myNumbers from './numbers.js'
console.log(myNumbers)
console.log(myNumbers.n1)

import {Human} from './mytype.js'
class User implements Human {
    name
    age
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    } 
}
const joao = new User("João", 25)
console.log(joao)