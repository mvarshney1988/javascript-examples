const persons = new Map();
// add
persons.set("1", "person1");
persons.set("2", "person2");
// search/contains
console.log(persons.has("1"));

// delete
console.log(persons.delete("2"));

// iterate
persons.forEach(function(value, key){
console.log(key);
  console.log(value);
});
  
for(const x of persons.keys()) {
console.log(x);
}
for(const x of persons.values()) {
console.log(x);
}
for(const x of persons.entries()) {
console.log(x);
}

// keys/values, both returns the SetIterator

const persons = new Set();
persons.add("1");
persons.add("2");
console.log(persons.values());
console.log(persons.keys());
console.log(persons.entries());
