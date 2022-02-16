//funcion constructura: Genera template de objeto.

function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}


//new : genera una nueva instancia de nuestra funcion constructora
var newCar = new car("Tesla", "Model 3", 2020);

console.log(newCar);

var newCar2 = new car("Tesla", "Model X", 2022);
var newCar3 = new car("Toyota", "Corolla", 2020);

console.log(newCar2);
