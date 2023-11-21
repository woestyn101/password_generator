// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var arrayLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var arraySymbols = ['!',  "#", "$", "%", "&","'","(", ")", "*", "+","-", ".", "/",":",";", "<","=", ">", "?", "@" , "^", "~", "{", "}"];
;

var arrayNumbers = [0,1,2,3,4,5,6,7,8,9]



var passwordArray = [];
var newPasswordArray = [];



document.getElementById("generate").onclick = function () {

  
// prompt variables
  var amountCharacters = prompt("How many characters do you want?");
  
  
  while (amountCharacters < 8){
    amountCharacters = prompt("Choose at least 8 characters!");
  }

  while (amountCharacters > 128){
    amountCharacters = prompt("Choose a maximum of 128 characters!");
  }

  
  

    var lowerCaseLetters = confirm("Do you want lowercase letters?");
  var upperCaseLetters = confirm("Do you want uppercase letters?");
  var numbers = confirm("Do you want numbers?");
  var specialCharacters = confirm("Do you want to include special characters?");

    if (lowerCaseLetters == true){
      passwordArray = arrayLetters.sort(() => 0.5 - Math.random()); // 
     
    }else {
      passwordArray = [];
    }
    if(upperCaseLetters == true)
    {
      const upperCaseShuffled = arrayLetters.sort(() => 0.5 - Math.random()); 
      const upperCaseArray = upperCaseShuffled.map(item => item.toUpperCase());
      passwordArray = passwordArray.concat(upperCaseArray);
      passwordArray = passwordArray.sort(() => 0.5 - Math.random()); 
      console.log(passwordArray);
    }else {
     passwordArray = passwordArray.concat(passwordArray);
    }
    if (numbers == true){
      const numbersShuffled = arrayNumbers.sort(() => 0.5 - Math.random());
      
      passwordArray = passwordArray.concat(numbersShuffled);
      passwordArray = passwordArray.sort(() => 0.5 - Math.random());
    
      console.log(passwordArray);
    
    } else {
      passwordArray = passwordArray.concat(passwordArray);
    }
    
    if (specialCharacters == true){
      const specialShuffled = arraySymbols.sort(() => 0.5 - Math.random());
      
      passwordArray = passwordArray.concat(specialShuffled);
      passwordArray = passwordArray.sort(() => 0.5 - Math.random());
    
      console.log(passwordArray);
    
    }else {
      passwordArray = passwordArray.concat(passwordArray);
    }
    
    passwordArray = passwordArray.slice(0,amountCharacters)
    
    passwordArray = passwordArray.join('');
    
    
    document.getElementById("password1").innerHTML = passwordArray;
  
    
  
    

  }

    







 


  
  



// code resources

// https://dirask.com/posts/JavaScript-get-multiple-random-elements-from-array-D9WM0j


// https://www.w3schools.com/jsref/jsref_concat_array.asp

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice