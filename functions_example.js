
let func = function sum(a,b){
return a*b;
}
console.log(func(4,5));

//arrow functions

let func1 = (a,b) => a*b;
console.log(func1(4,5));
// call method for invokation

const car = { wheels:4, engine: function(mode){
return this.engineType+"-"+mode;
}
}
const engines = {
engineType:"Diesel"
}
console.log(car.engine.call(engines, "automatic"));
// apply method for invokation
// The call() method takes arguments separately. The apply() method takes arguments as an array.

const bike = { wheels:2, engine: function(mode){
return this.engineType+"-"+mode;
}
}
const bikeEngines = {
engineType:"Petrol"
}
console.log(bike.engine.apply(bikeEngines, ["manual"]));

// bind is used for function borrowing and preventing losing this , likt timeout callback

const person = {
  firstName:"John",
  display: function () {
    return this.firstName;
  }
}

let display = person.display.bind(person);
setTimeout(console.log(display()), 3000); // even timeout here will prserve this

// function borrow using bind

const person2 = {
  display: function () {
    return this.firstName;
  }
}
const name = {
  firstName:"John"
}
let disp = person2.display.bind(name);
console.log(disp());
