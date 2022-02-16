//Los objetos se manejan con propiedades

var myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    carDetails : function(){
        console.log('Auto ${this.model} ${this.year}');
    }
};
//THIS: hace referencia al objeto

//Para llamar una funcion dentro de un objeto
myCar.carDetails();


//llamamos asi la variable dentro del objeto
console.log(myCar.brand);
console.log(myCar.year);

