// Assignment Code

let choice="";
// var password;
var length;
var lengthChoice="";
var PossibleChoices =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',"!","@", "#" , "$", "%", "^","&", "*", '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

var confirmPassword;


var lengthChoice = parseInt(prompt("How many characters do you want?(Choose between 8 $ 128"));

function getLength(){
 console.log(lengthChoice);
 if
   (lengthChoice < 8 ||
   lengthChoice > 128 )
   {
     alert("invalid ammount, please choose between 8 & 128")
     getLength()
   }else 
   upperCase = confirm("Do you want uppercase letters?")
   lowerCase = confirm("Do you want lowercase letters?")
   specialCharacter = confirm("Do you want special characters?")
  
  } ;
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
