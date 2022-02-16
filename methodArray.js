var articles = [
    {name: "Bici", cost: 3000},
    {name: "Tv", cost: 2500},
    {name: "Libro", cost: 230},
    {name: "Celular", cost: 10000},
    {name: "Laptop", cost: 20000},
    {name: "Teclado", cost: 2300},
    {name: "Audifonos", cost: 1700}
];

//Metodo Filter: Valida si algo es verdadero o falso

var FilteredArticles = articles.filter(function(article){
    return article.cost <= 500
});

console.log(FilteredArticles);

//metodo Map

var itemName = articles.map(function(article){
    return article.name
});

console.log(itemName);

//metodo find

var findArticle = articles.find(function(article){
    return article.name === "Laptop"
});

console.log(findArticle);

//metodo foreach

articles.forEach(function(article){
    console.log(article.name);
});
//muestra todos los name en el object


//some : MUESTRA Un true or false, si cumple o no con el requisito
var cheapItems = articles.some(function(article){
    return article.cost <= 700;
});

console.log(cheapItems);

// .push() = permite agregar uno o más eleentos alfinaldeun array 

let numArray = [1, 2 , 3, 4, 5];

//funcion
function newNum(){
    //Agrego elementos
    numArray.push(6, 7)
    console.log(numArray)
}


//Ejemplo con strings


