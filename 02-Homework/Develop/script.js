// Assignment Code

let choice="";
// var password;
var length;
var lengthChoice="";
var lowerChoices =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperChoices =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var specialChoices  = ["!","@", "#" , "$", "%", "^","&", "*"]
var numberChoices= ['1', '2', '3', '4', '5', '6', '7', '8', '9' ]
var PossibleChoices =[]
var acceptpassword;

  var lengthChoice = parseInt(prompt("How many characters do you want?(Choose between 8 & 128"))


  function getLength(){
  

  if
   (lengthChoice < 8 ||
   lengthChoice > 128 )
   {
     alert("invalid ammount, please choose between 8 & 128")
     getLength()
   }
  else 
   upperCase = confirm("Do you want uppercase letters?")
   lowerCase = confirm("Do you want lowercase letters?")
   nums = confirm("Do you want numbers?")
   specialCharacter = confirm("Do you want special characters?")
   

  if (upperCase){
  for (var i=0; i<upperChoices.length; i ++){
     PossibleChoices.push(upperChoices[i])
   }
   } 
  if (lowerCase){
  for (var i=0; i<lowerChoices.length; i ++){
    PossibleChoices.push(lowerChoices[i])
   }
   } 
  if (specialCharacter){
    for (var i=0; i<specialChoices.length; i ++){
    PossibleChoices.push(specialChoices[i])
   }
   }

   if (nums){
    for (var i=0; i<numberChoices.length; i ++){
    PossibleChoices.push(numberChoices[i])
   }
  }else if (!upperCase
    && !lowerCase
    && !specialCharacter
    && !nums){

    alert("You must accept one of the prompts to continue...")
    getLength()
  }

   };


getLength()

function generatePassword(){
   var password="";
    lengthChoice;
  
  for (var i = 0; i<lengthChoice;i++){
    var password = password+ PossibleChoices[Math.floor(Math.random()*PossibleChoices.length)];
    }
  return password;  
    };  



 var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function accept(){
// acceptpassword = confirm("Are you satisfied with your password?")
// if(!acceptpassword){


// }

// }