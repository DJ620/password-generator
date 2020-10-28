// Assignment Code
var generateBtn = document.querySelector("#generate");
// String of the alphabet split into an array of each individual letter
var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperLetters = letters.map(a=>a.toUpperCase());
console.log(upperLetters);
console.log(letters);
// Array of numbers from 0 to 9
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// String of special characters split into an array of each individual character
var characters = "!@#$%^&*()+=~[]{}/?.,<>;:".split("");
// The function that will generate the password
function generatePassword() {
  // Declaring my result as an empty array
  var result=[];
  var random;
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
    if (!lowercase && !uppercase && !numbers && !specialCharacters) {
      alert("Please select at least one parameter");
    }
  }
  var criteria = [];
  if (lowercase) {
    criteria.push(letters);
  }
  if (uppercase) {
    criteria.push(upperLetters);
  }
  if (numbers) {
    criteria.push(numbersArray);
  }
  if (specialCharacters) {
    criteria.push(characters);
  }

  // A function that selects a random element from whatever array is passed through it
  function randomPick(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  // A while statement that runs until the password is the length specified by the user
  while (result.length < pwLength) {
    random = criteria[Math.floor(Math.random() * criteria.length)];
    result.push(random[Math.floor(Math.random() * random.length)]);
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
