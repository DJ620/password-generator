// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = "!@#$%^&*()+=~[]{}/?.,<>;:".split("");
console.log(specialCharacters);
function generatePassword() {
  var pwLength = prompt("How many characters would you like in the password?");
  while (pwLength < 8 || pwLength > 128) {
    pwLength = prompt("Password must be a minimum of 8 characters and no larger than 128 characters.");
  }
  var lowercase = confirm("Would you like to include lowercase letters?");
  var uppercase = confirm("Would you like to include uppercase letters?");
  var numbers = confirm("Would you like to include numbers?");
  var specialCharacters = confirm("Would you like to include special characters?");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
