// length

// append

// add quotes

// intitialize , new operator slow down the process

// compare 
new String("mohit") == "mohit" // true
new String("mohit") == new String("mohit") // false

// template , without semicolon, new line , use ` at both sides


// search can take regex but indexof doesnt
let text = "main spain";
text.search(/locate/);
text.indexof("locate");

// match local search/ global search

text.match("ain");
text.match(/ain/g);

// matchAll() is an ES2020 feature. matchAll() does not work in Internet Explorer.

// used like contains in string. includes() is an ES6 feature. includes() is not supported in Internet Explorer.
let text = "Hello world";
text.includes("world");

// startsWith() and endsWith() is an ES6 feature.

// string template, string interpolation

let firstName = "John";
let lastName = "Doe";
let text = `Welcome ${firstName}, ${lastName}!`;
