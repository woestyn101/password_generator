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

  
  

  const lowerCaseLetters = confirm("Do you want lowercase letters?");
  const upperCaseLetters = confirm("Do you want uppercase letters?");
  const numbers = confirm("Do you want numbers?");
  const specialCharacters = confirm("Do you want to include special characters?");

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
    //  console.log(passwordArray);
    }else {
     passwordArray = passwordArray.concat(passwordArray);
    }
    if (numbers == true){
      const numbersShuffled = arrayNumbers.sort(() => 0.5 - Math.random());
      
      passwordArray = passwordArray.concat(numbersShuffled);
      passwordArray = passwordArray.sort(() => 0.5 - Math.random());
    
      //console.log(passwordArray);
    
    } else {
      passwordArray = passwordArray.concat(passwordArray);
    }
    
    if (specialCharacters == true){
      const specialShuffled = arraySymbols.sort(() => 0.5 - Math.random());
      
      passwordArray = passwordArray.concat(specialShuffled);
      passwordArray = passwordArray.sort(() => 0.5 - Math.random());
    
      //console.log(passwordArray);
    
    }else {
      passwordArray = passwordArray.concat(passwordArray);
    }
  //function to shuffle array
    function shuffleArray(array) {
      array = array.sort(() => 0.5 - Math.random());
     // console.log(array);
      return array[0];
    }

    

    
    //console.log(passwordArray);

    passwordArray = passwordArray.slice(0,amountCharacters);
    // console.log(passwordArray);
    // checking if password meets criteria given

    let isSymbol = passwordArray.some((ai) => arraySymbols.includes(ai));
    
    //  console.log(isSymbol);
    //  console.log(specialCharacters)

     if (isSymbol == false && specialCharacters == false){

      passwordArray = passwordArray;
      //console.log(passwordArray);

     }else if(isSymbol == false && specialCharacters == true) {
      newSymbol = shuffleArray(arraySymbols);
      //console.log(newSymbol);
      passwordArray.splice(0, 1, newSymbol);
     }else{
      passwordArray = passwordArray;
     } 

     //validation for Numbers
     let isNumber = passwordArray.some((ai) => arrayNumbers.includes(ai));
    
    //  console.log(isNumber);
    //  console.log(numbers);

     if (isNumber == false && numbers == false){

      passwordArray = passwordArray;
      //console.log(passwordArray);

     }else if(isNumber == false && numbers == true) {
      newNumber = shuffleArray(arrayNumbers);
      //console.log(newLetter);
      passwordArray.splice(2, 1, newNumber);
     }else{
      passwordArray = passwordArray;
     } 


     //validation for lowercase letters
     let isLowerCase = passwordArray.some((ai) => arrayLetters.includes(ai));
    
     console.log(isLowerCase);
     console.log(lowerCaseLetters);

     if (isLowerCase == false && lowerCaseLetters == false){

      passwordArray = passwordArray;
      console.log(passwordArray);

     }else if(isLowerCase == false && lowerCaseLetters == true) {
      newLetter = shuffleArray(arrayLetters);
      console.log(newLetter);
      passwordArray.splice(2, 1, newLetter);
     }else{
      passwordArray = passwordArray;
     } 


    

    

    // join password array togehter in a string
    passwordArray = passwordArray.join('');
    
    
    document.getElementById("password").innerHTML = passwordArray;
  
    
  
    

  }

    







 


  
  



// code resources

// https://dirask.com/posts/JavaScript-get-multiple-random-elements-from-array-D9WM0j


// https://www.w3schools.com/jsref/jsref_concat_array.asp

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice