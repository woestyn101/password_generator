

//initializing variable criteria

var arrayLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var arraySymbols = ['!',  "#", "$", "%", "&","'","(", ")", "*", "+","-", ".", "/",":",";", "<","=", ">", "?", "@" , "^", "~", "{", "}"];
;

var arrayNumbers = [0,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];



// setting starting password array

var passwordArray = [];


// function code for button to generate password


document.getElementById("generate").onclick = function () {

  
// prompt variables
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

  //apply criteria set by user to password

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
    
      
    
    }else {
      passwordArray = passwordArray.concat(passwordArray);
    }

  //function to shuffle array
    function shuffleArray(array) {
      array = array.sort(() => 0.5 - Math.random());
     
      return array[0];
    }

    

    // redusing password to amount of characters specified by user
   

    passwordArray = passwordArray.slice(0,amountCharacters);
   
    // checking if password meets criteria given

    let isSymbol = passwordArray.some((ai) => arraySymbols.includes(ai));
    
    

     if (isSymbol == false && specialCharacters == false){

      passwordArray = passwordArray;
     

     }else if(isSymbol == false && specialCharacters == true) {
      newSymbol = shuffleArray(arraySymbols);
     
      passwordArray.splice(0, 1, newSymbol);
     }else{
      passwordArray = passwordArray;
     } 

     //validation for Numbers
     let isNumber = passwordArray.some((ai) => arrayNumbers.includes(ai));    
   

     if (isNumber == false && numbers == false){

      passwordArray = passwordArray;
      

     }else if(isNumber == false && numbers == true) {
      newNumber = shuffleArray(arrayNumbers);
      
      passwordArray.splice(1, 1, newNumber);
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

     const upperCaseArray2 = arrayLetters.map(item => item.toUpperCase());
 
    
    //validation for uppercase letters
        let isUpperCase = passwordArray.some((ai) => upperCaseArray2.includes(ai));            
      

        if (isUpperCase == false && upperCaseLetters == false){

          passwordArray = passwordArray;
        
        }else if(isUpperCase == false && upperCaseLetters == true) {
          newUpperLetter = shuffleArray(upperCaseArray2);
        
          passwordArray.splice(3, 1, newUpperLetter);
        }else{
          passwordArray = passwordArray;
        } 
      
      //reduce password to amount of characters specified by user

      passwordArray = passwordArray.slice(0,amountCharacters);
      console.log(passwordArray);

    // join password array together in a string
    passwordArray = passwordArray.join('');
    
    //output password to html page
    
    document.getElementById("password").innerHTML = passwordArray;
  
    
  
    

  }

    







 


  
  



