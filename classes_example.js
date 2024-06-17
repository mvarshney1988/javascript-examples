// 

class Person {

constructor(age, name){
  this.age = age;
  this.name = name;
}
  function myage(){
  return this.age;
  }
}
const person = new Person(35, "Mohit");
console.log(person.myage());
console.log(person.age);
