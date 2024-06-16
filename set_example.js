const persons = new Set();
// add
persons.add("1");
persons.add("2");
// search/contains
console.log(persons.has("1"));

// delete
console.log(persons.delete("2"));

// iterate
for(const x of persons) {
console.log(x);
}

// keys/values, both returns the SetIterator

const persons = new Set();
persons.add("1");
persons.add("2");
console.log(persons.values());
console.log(persons.keys());
console.log(persons.entries());
