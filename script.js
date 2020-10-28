// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = "!@#$%^&*()+=~[]{}/?.,<>;:".split("");
function generatePassword() {
  var result=[];
  var pwLength = prompt("How many characters would you like in the password?");
  while (pwLength < 8 || pwLength > 128) {
    pwLength = prompt("Password must be a minimum of 8 characters and no larger than 128 characters.");
  }
  var lowercase;
  var uppercase;
  var numbers;
  var specialCharacters;
  while (!lowercase && !uppercase && !numbers && !specialCharacters) {
    lowercase = confirm("Would you like to include lowercase letters?");
    uppercase = confirm("Would you like to include uppercase letters?");
    numbers = confirm("Would you like to include numbers?");
    specialCharacters = confirm("Would you like to include special characters?");
  }
  function randomPick(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  while (result.length < pwLength) {
    if (lowercase) {
      result.push(randomPick(letters));
    }
    if (uppercase) {
      result.push(randomPick(letters).toUpperCase());
    }
    if (numbers) {
      result.push(randomPick(numbersArray));
    }
    if (specialCharacters) {
      result.push(randomPick(characters));
    }
  }
  return result.join('');
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
