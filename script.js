// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring the character sets for the user to choose from
var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperLetters = letters.map(a=>a.toUpperCase());
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = "!@#$%^&*()+=~[]{}/?.,<>;:".split("");

// The function that will generate the password
function generatePassword() {
  // Declaring my result as an empty array
  var result=[];
  // Declaring an empty array that will hold character sets that the user chooses later on
  var criteria = [];

  // A while statement to make sure that the user selects at least one of the presented criteria
  while (!lowercase && !uppercase && !numbers && !specialCharacters) {
    var lowercase = confirm("Would you like to include lowercase letters?");
    var uppercase = confirm("Would you like to include uppercase letters?");
    var numbers = confirm("Would you like to include numbers?");
    var specialCharacters = confirm("Would you like to include special characters?");
    // If the user says no to all criteria, they are alerted that they must choose at least one, and the loop is repeated
    if (!lowercase && !uppercase && !numbers && !specialCharacters) {
      alert("Please select at least one parameter");
    }
  }

  // Depending on which of the criteria the user wants to include, that specific character set is added to the criteria array
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

  // Variable that stores the length of the password based on user input
  var pwLength = prompt("How many characters would you like in your password?");

  // A loop that will run if the length selected is not between 8 and 128
  while (pwLength < 8 || pwLength > 128) {
    // If the length selected is not within the parameters, a prompt lets the user know to keep the length between 8 and 128 and asks the user to once again enter the length of their desired password
    alert("Password must be between 8 and 128 characters.");
    pwLength = prompt("How many characters would you like in your password?");
  }

  // A loop to guarantee that at least one character from each selected criteria is included in the generated password
  for (let i=0; i<criteria.length; i++) {
    result.push(criteria[i][Math.floor(Math.random() * criteria[i].length)]);
  }

  // A while statement that runs until the password is the length specified by the user. This loop will randomize the order of types of characters
  while (result.length < pwLength) {
    // Sets random to a randomly selected character set within the criteria array
    var random = criteria[Math.floor(Math.random() * criteria.length)];
    // Adds a random index from the pre-determined random array to the result array
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
