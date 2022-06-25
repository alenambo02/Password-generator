// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "0", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["*", "&", "^", "%", "$", "#", "@", "!"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
// dont change anything above this: work below starting now

function generatePassword() {
  var passwordLength = prompt("Please enter amount of character wanted for password below");
    if (passwordLength < 8 || passwordLength > 128){
    alert("Length must be 8 - 128 characters")
  }
    if (passwordLength > 8 || passwordLength < 128) 
  var upper = confirm("Do you want uppercase letters in your password?");
    
  var num = confirm("Do you want numbers in your password?");
    
  var specialC = confirm("Do you want special characters in your password?");
   
  var lower = confirm("Do you want lowercase letters in your password?");
   
  var selectedCharacters = []

  if (upper){
    selectedCharacters= selectedCharacters.concat(upperCase)
    }
  if (num){
    selectedCharacters= selectedCharacters.concat(numeric)
    }
  if (specialC){
    selectedCharacters= selectedCharacters.concat(specialCharacters)
    }
  if (lower){
    selectedCharacters= selectedCharacters.concat(lowerCase)
    }


  var newPassword = ""


  for (var i = 0; i < passwordLength; i++) {
  newPassword = newPassword + selectedCharacters[Math.floor(Math.random() *selectedCharacters.length)];
  
  console.log(newPassword);
  }
  return newPassword;
}
