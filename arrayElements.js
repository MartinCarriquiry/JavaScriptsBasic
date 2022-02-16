// .push() = permite agregar uno o más eleentos alfinaldeun array 

let numArray = [1, 2 , 3, 4, 5];

//funcion
function newNum(){
    //Agrego elementos
    numArray.push(6, 7)
    console.log(numArray)
}

newNum();

//Ejemplo con strings

let txtArray = ["Ana", "Juan", "Diego", "Lautaro"];

function addCharacters(){
    txtArray.push("Chris", "Maria")
    console.log(txtArray)
}

addCharacters();

//Ejemplo eliminando datos

let array = [1, 2, 3 ,4 ,5];
//elimina el primer elemento de una array
let shiftArray = array.shift();

console.log(array);
//Elmina el ultimo elemento de una array
let popArray = array.pop();

console.log(array);