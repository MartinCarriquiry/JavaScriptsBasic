var students = ["Maria", "Sergio", "Rosa", "Daniel"];

function greetStudents(students){
    console.log('Hola, ${students}');
}

while(students.length > 0){
    console.log(students);
    var students = students.shift();
    greetStudents(students);
}