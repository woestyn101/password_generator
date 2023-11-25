

//initializing variable criteria

var arrayLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];


var arrayLettersUpper = arrayLetters.map(item => item.toUpperCase());

var arraySymbols = ['!',  "#", "$", "%", "&","'","(", ")", "*", "+","-", ".", "/",":",";", "<","=", ">", "?", "@" , "^", "~", "{", "}"];
;

var arrayNumbers = [0,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];



// setting starting password array

var passwordArray = [];


// function code for button to generate password


document.getElementById("generate").onclick = function () {

  
// prompt amount of characters 
  var amountCharacters = prompt("How many characters do you want?");
  
  
  while (amountCharacters < 8){
    amountCharacters = prompt("Choose at least 8 characters!");
  }

  while (amountCharacters > 128){
    amountCharacters = prompt("Choose a maximum of 128 characters!");
  }

  
   // prompt for user input to set criteria

  const lowerCaseLetters = confirm("Do you want lowercase letters?");
  const upperCaseLetters = confirm("Do you want uppercase letters?");
  const numbers = confirm("Do you want numbers?");
  const specialCharacters = confirm("Do you want to include special characters?");

  //function to shuffle arrays

  function shuffleArray(array) {
    array = array.sort(() => 0.5 - Math.random());
   
    return array;
  }
 // funtion to add to password array and shuffle
  function shuffleConcat (array) {
    array = shuffleArray(array);
    passwordArray = passwordArray.concat(array);
    passwordArray = shuffleArray(passwordArray);
    return passwordArray;
  }

  //apply criteria set by user to password

    if (lowerCaseLetters == true){
      passwordArray = shuffleArray(arrayLetters);            
    }

    if(upperCaseLetters == true)
    {      
      shuffleConcat(arrayLettersUpper);      
    }

    if (numbers == true){
      shuffleConcat(arrayNumbers);     
    } 
    
    if (specialCharacters == true){
      shuffleConcat(arraySymbols);   
    }

  //function to shuffle array and return one element
    function shuffleArrayReturnOne(array) {
      array = array.sort(() => 0.5 - Math.random());     
      return array[0];
    }
    

    // reducing password to amount of characters specified by user   

    passwordArray = passwordArray.slice(0,amountCharacters);
   
    // checking if password meets criteria given

    let isSymbol = passwordArray.some((ai) => arraySymbols.includes(ai));    
    
     console.log(isSymbol);
     if (isSymbol == false && specialCharacters == false){

      passwordArray = passwordArray;
     

     }else if (isSymbol == false && specialCharacters == true) {
      newSymbol = shuffleArrayReturnOne(arraySymbols);
      // add missing symbol to array
      passwordArray.splice(0, 1, newSymbol);
     }else{
      passwordArray = passwordArray;
     } 

     //validation for Numbers
     let isNumber = passwordArray.some((ai) => arrayNumbers.includes(ai));      

     if (isNumber == false && numbers == false){

      passwordArray = passwordArray;     

     }else if (isNumber == false && numbers == true) {
      newNumber = shuffleArrayReturnOne(arrayNumbers);
      
      passwordArray.splice(1, 1, newNumber);
     }else{
      passwordArray = passwordArray;
     } 


     //validation for lowercase letters
     let isLowerCase = passwordArray.some((ai) => arrayLetters.includes(ai));   

     if (isLowerCase == false && lowerCaseLetters == false){

      passwordArray = passwordArray;
      
     }else if(isLowerCase == false && lowerCaseLetters == true) {
      newLetter = shuffleArrayReturnOne(arrayLetters);
      // add missing lowercase letter to password array
      passwordArray.splice(2, 1, newLetter);
     }else{
      passwordArray = passwordArray;
     } 

    
 
    
    //validation for uppercase letters
        let isUpperCase = passwordArray.some((ai) => arrayLettersUpper.includes(ai));    
                
      

        if (isUpperCase == false && upperCaseLetters == false){

          passwordArray = passwordArray;
        
        }else if(isUpperCase == false && upperCaseLetters == true) {
          newUpperLetter = shuffleArrayReturnOne(arrayLettersUpper);
        // add missing uppercase letter to password array
          passwordArray.splice(3, 1, newUpperLetter);
        }else{
          passwordArray = passwordArray;
        } 
      
      //reduce password to amount of characters specified by user

      passwordArray = passwordArray.slice(0,amountCharacters);
     
      //last shuffle of password
      passwordArray = shuffleArray(passwordArray);     

    // join password array together in a string
    passwordArray = passwordArray.join('');
    
    //output password to html page
    
    document.getElementById("password").innerHTML = passwordArray;  

  }

    







 


  
  



