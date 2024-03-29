

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

 // function to add to password array and shuffle
  function shuffleConcat (array) {
    array = shuffleArray(array);
    passwordArray = passwordArray.concat(array);
    passwordArray = shuffleArray(passwordArray);
    return passwordArray;
  }

  //apply criteria set by user to password

    if (lowerCaseLetters){
      passwordArray = shuffleArray(arrayLetters);            
    }

    if(upperCaseLetters)
    {      
      shuffleConcat(arrayLettersUpper);      
    }

    if (numbers){
      shuffleConcat(arrayNumbers);     
    } 
    
    if (specialCharacters){
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
    
         

     if (!isSymbol && specialCharacters) {
      newSymbol = shuffleArrayReturnOne(arraySymbols);
      // add missing symbol to array
      passwordArray.splice(0, 1, newSymbol);
     }

     //validation for Numbers
     let isNumber = passwordArray.some((ai) => arrayNumbers.includes(ai));      

     if (!isNumber && numbers) {
      newNumber = shuffleArrayReturnOne(arrayNumbers);
      // add missing number to array
      passwordArray.splice(1, 1, newNumber);
     }


     //validation for lowercase letters
     let isLowerCase = passwordArray.some((ai) => arrayLetters.includes(ai));   

      if(!isLowerCase && lowerCaseLetters) {
      newLetter = shuffleArrayReturnOne(arrayLetters);
      // add missing lowercase letter to password array
      passwordArray.splice(2, 1, newLetter);
     }

       
    //validation for uppercase letters
        let isUpperCase = passwordArray.some((ai) => arrayLettersUpper.includes(ai));    
                
      

       if(!isUpperCase && upperCaseLetters) {
          newUpperLetter = shuffleArrayReturnOne(arrayLettersUpper);
        // add missing uppercase letter to password array
          passwordArray.splice(3, 1, newUpperLetter);
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

    







 


  
  



