// four ways to define objects
const person={"name":"mohit",gender:"male"}
const person1 = {};
  person.name="mohit";
const person2 = new Object();
person2.name="mohit";
function Person(name) {
  this.name = name;
  
}
const person3 = new Person("mohit")
// two ways to access objects
console.log(person.name+"-"+person["gender"])

// add a property to existing object
person.address={"hno":"123","pincode":12345}
// access nested property

console.log(person.address.hno)
// delete a property from existing object
delete person.address

// adding method to object
person.nameUpperCase = function () {
  return person.name.toUpperCase();
};

// access method property of object using parenthesis ()
console.log(person.nameUpperCase())

// loop object properties
for (let x in person) {
console.log(person.x) // will not work
  console.log(person[x])
}

// convert to array , values only / keys only/ all entries
console.log(Object.entries(person))
console.log(Object.keys(person))
console.log(Object.values(person))

// comvert to string
console.log(JSON.stringify(person))
