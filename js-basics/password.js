// function greet(name) {
//     console.log("Hello, " + name);
//   }
  
//   greet("User");

//   var myInput = document.getElementById("password");
//   var length = document.getElementById("length");
//   if(myInput.value.length >= 10) {
//     length.classList.remove("failure");
//     length.classList.add("success");
//   } else {
//     length.classList.remove("success");
//     length.classList.add("failure");
//   }
// }

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Welcome to the password validator!')
reader.question("Please enter a password of at least 10 characters ", function(password){
  if (password.length < 10) {
     console.log('password not long enough')
     } else {
     console.log("Password accepted")
     }
       
 reader.close()
});
    
        
            
           

