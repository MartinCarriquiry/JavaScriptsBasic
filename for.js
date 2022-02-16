var students = ["Maria", "Sergio", "Rosa", "Daniel"];

function greetStudents(students){
    console.log('Hola, ${students}');
}

for(var i = 0; i < students.length; i++){
    greetStudents(students[i]);
}

for(var student of students){
    greetStudents(student);
}