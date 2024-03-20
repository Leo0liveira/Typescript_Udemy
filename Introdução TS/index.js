var firstName = "Leonardo";
var anotherName = 1;
var x = true;
/**
 * * Ininciando criação de tipagem
 */
function greeting(name) {
    console.log("Olá " + name);
}
greeting(firstName);
/**
 * ! O tipos abaixo não podem ser executados pois não são do tipo "String"
 */
// greeting(anotherName)
// greeting(x)
