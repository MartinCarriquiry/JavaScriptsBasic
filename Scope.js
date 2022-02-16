//Scope = un Scope es que el scope global puede ser llamado en un
//scope local (osea dentro de una funcion) pero al revez no

var myName = "Martin";

function name (){
    var myLastName = "Carriquiry";
    console.log(myName + " " + myLastName);
}

name();