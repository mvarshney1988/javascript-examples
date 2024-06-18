// promise - return the results (error or success), link producer and consumer code
// use for callbacks in async fashion
let promise = new Promise(function(resolve,reject){
 // produce code
  resolve("OK");
  reject("ERROR")
  
}).then(function(value){
display(value);
},
       function(error){
         display(error);
       });

function display(val){
  console.log(val);
}
