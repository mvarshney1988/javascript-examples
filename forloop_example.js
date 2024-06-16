for (int i=0;i<10;i++) {
console.log(i);
}



// for in loop
for (let x in text) {
console.log(x); // print index
}

// for of loop
let text= "test";
for (let x of text){
console.log(x); // print character 
}

// for of loop for array
let personArr = new Array("person1","person2")
for(let person of personArr){
console.log(person);
}
//for of loop for Set, Set take square brackets
let personsSet = new Set(["person1","person2"]);
for(let person of personsSet) {
console.log(person);
}

// for of loop for Map, Map take square brackets
let persons = new Map([["person1", 100],["person2",200],["person3", 300]]);
for(let person of persons) {
console.log(person);
}
