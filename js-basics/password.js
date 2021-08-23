function greet(name) {
    console.log("Hello, " + name);
  }
  
  greet("User");

  var myInput = document.getElementById("password");
  var length = document.getElementById("length");
  if(myInput.value.length >= 10) {
    length.classList.remove("failure");
    length.classList.add("success");
  } else {
    length.classList.remove("success");
    length.classList.add("failure");
  }
}