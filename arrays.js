// Arrays: estructurea de datos, objetos.

var fruits = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(fruits.length); //Muestra la cantidad de elementos dentro de la variable
console.log(fruits);
console.log(fruits[0]); //Elige el elemento seleccionado


var moreFruits = fruits.push("Uvas"); //Agrega mas elementos al Array

console.log(fruits);

//quitar el ultimo elemento de un array

var latest = fruits.pop("Uvas");

console.log(fruits);

//Agrega un array al principio

var newLength = fruits.unshift("Uvas");

console.log(fruits);

// Elimina el elemento que este en el inicio

var deleteFruits = fruits.shift("Uvas");

console.log(fruits);

//Busca el index de un elemento de una array

var positionFruits = fruits.indexOf("Cereza");

console.log(positionFruits);
