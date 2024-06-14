// once declared , can not be modified
const x=6,y=6;function var_example(){
if(true){
   x=5, y=6;
}
  return x+y;
}
console.log(var_example()); // SyntaxError: Identifier 'x' has already been declared
