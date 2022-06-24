// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var specialCharacters = "*&^%$#@!"
var userlength = 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// I added a prompt for window above page to appear with password length
var generatePassword = function () {
var userlength = prompt("Please enter amount of characters wanted in password below");
  if (!userlength) {
    return;
  }
var lowerCase = confirm("Do you want lowercase letters in your password?")
var upperCase = confirm("Do you want uppercase letters in your password?")
var numeric = confirm("Do you want numbers in your password?")
var specialCharacters = confirm("Do you want special characters in your password?")
}
