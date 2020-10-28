// Assignment Code
var generateBtn = document.querySelector("#generate");
// String of the alphabet split into an array of each individual letter
var letters = "abcdefghijklmnopqrstuvwxyz".split("");
// Array of numbers from 0 to 9
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// String of special characters split into an array of each individual character
var characters = "!@#$%^&*()+=~[]{}/?.,<>;:".split("");
// The function that will generate the password
function generatePassword() {
  // Declaring my result as an empty array
  var result=[];
  // Variable that stores the length of the password based on user input
  var pwLength = prompt("How many characters would you like in the password?");
  // A while statement to check that the length selected is between 8 and 128
  while (pwLength < 8 || pwLength > 128) {
    // If the length selected is not within the parameters, a prompt lets the user know to keep the length between 8 and 128
    pwLength = prompt("Password must be a minimum of 8 characters and no larger than 128 characters.");
  }
  // Declaring the variables to hold boolean values of whether the user wants to include certain elements in their password
  var lowercase;
  var uppercase;
  var numbers;
  var specialCharacters;
  // A while statement to make sure that the user selects at least one of the presented criteria
  while (!lowercase && !uppercase && !numbers && !specialCharacters) {
    lowercase = confirm("Would you like to include lowercase letters?");
    uppercase = confirm("Would you like to include uppercase letters?");
    numbers = confirm("Would you like to include numbers?");
    specialCharacters = confirm("Would you like to include special characters?");
  }
  // A function that selects a random element from whatever array is passed through it
  function randomPick(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  // A while statement that runs until the password is the length specified by the user
  while (result.length < pwLength) {
    // If the user indicated they would like to include lowercase characters, they are added here
    if (lowercase) {
      result.push(randomPick(letters));
    }
    // If the user indicated they would like to include uppercase characters, they are added here
    if (uppercase) {
      result.push(randomPick(letters).toUpperCase());
    }
    // If the user indicated they would like to include numbers, they are added here
    if (numbers) {
      result.push(randomPick(numbersArray));
    }
    // If the user indicated they would like to include special characters, they are added here
    if (specialCharacters) {
      result.push(randomPick(characters));
    }
  }
  // Returns the result converted into a string
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
