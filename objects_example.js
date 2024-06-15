// three ways to define objects
const person={"name":"mohit",gender:"male"}
const person1 = {};
  person.name="mohit";
const person2 = new Object();
person2.name="mohit";
// two ways to access objects
console.log(person.name+"-"+person["gender"])

// add a property to existing object
person.address={"hno":"123","pincode":12345}
// access nested property

console.log(person.address.hno)
// delete a property from existing object
delete person.address
