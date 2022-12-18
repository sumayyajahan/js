// let person = {}; 

// person.name = 'Jasim';
// person.age = 30;

// person.eat = function(){
//     console.log(`Person is eating`);
// }

// person.sleep = function(){
//     console.log(`Person is sleeping`);
// }

function Person(name, age){

    let person = {}; 

person.name = name;
person.age = age;

person.eat = function(){
    console.log(`Person is eating`);
}

person.sleep = function(){
    console.log(`Person is sleeping`);
}

return person;

}

//console.dir(p);

const sakib = Person("Sakib", "35");
const mim = Person("Mim", "35");

console.log(sakib);


