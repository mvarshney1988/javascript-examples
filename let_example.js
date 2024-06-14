// let scope is at block level and var scope is function level , means accessible anywhere in the function, even if its defined at block level

function let_example(flag) {
if(flag) {
  let x=5, y=6; 
  return x+y;
}
return x+y;
}
console.log("sum="+ (let_example(true))); // 11
console.log("sum="+(let_example(false)));// x, y undefined because "let" scope is at block level
