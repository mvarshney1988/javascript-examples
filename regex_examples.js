// search using /pattern/modifiers;
// example hello/i , i is for case insensitive
// use string search/replace method with this pattern


// [abc]	Find any of the characters between the brackets	[0-9]	Find any of the digits between the brackets
let text = "this there";
let result = text.match(/[th]/g);
console.log(result);
