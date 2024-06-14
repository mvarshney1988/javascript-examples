// let scope is at block level and var scope is function level , means accessible anywhere in the function, even if its defined at block level
function var_example(){
if(true){
  var x=5, y=6;
}
  return x+y;
}
console.log(var_example());
  
