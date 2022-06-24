// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = [];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "0", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["*", "&", "^", "%", "$", "#", "@", "!"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Please enter amount of character wanted for password below");
  }


  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










// Assignment Code

/*
var passwordLength;
var lowerCase;
var upperCase;
var numeric;
var specialCharacters;

function passwordGenerate() {
  var password = "";
}
var choices= {};
if (passwordLength) password += 
if lowerCase =
if upperCase =["A", "B","C"]
if numeric =[0,1,2,3,4,5,6,7,8,9]
if specialCharacters =[]

var passwordGenerator = function() {
 
  var passwordLength = prompt("Please enter amount of character wanted for password below")
  var lowerCase = confirm("Do you want lowercase letters in your password?")
  var upperCase = confirm("Do you want uppercase letters in your password?")
  var numeric = confirm("Do you want numbers in your password?")
  var specialCharacters = confirm("Do you want special characters in your password?")
}
*/
