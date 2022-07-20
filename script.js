// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var useUpper = false;
var useLower = false;
var useSpec = false;
var useNum = false;

var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specs = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

var charPool = [];
var finalPassword = "";

function generatePassword() {
  // Reset the password character pool and the returned password on each run
  charPool = [];
  finalPassword = "";

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters would you like in your password?");
    passwordLength = parseInt(passwordLength);

    if (isNaN(passwordLength)) {
      alert("Length is not a number!");
    }
    else if (passwordLength < 8 || passwordLength > 128) {
      alert("Length must be greater than 8 or less than 128!");
    }
  }

  // Welcome to confirm country
  useUpper = confirm("Do you want your password to have uppercase letters?");

  useLower = confirm("Do you want your password to use lowercase letters?");

  useSpec = confirm("Do you want your password to use special characters?");

  useNum = confirm("Do you want your password to use numbers?");

  // Case for if all four of the confirm prompts were given false
  if (!useUpper && !useLower && !useSpec && !useNum) {
    alert("You need to say yes to at least one of the conditions.")
    return;
  }

  // Concatenate the character pool, I wish there was a more elegant way of doing this
  if (useUpper) {
    charPool = charPool.concat(uppers);
  }

  if (useLower) {
    charPool = charPool.concat(lowers);
  }

  if (useSpec) {
    charPool = charPool.concat(specs);
  }

  if (useNum) {
    charPool = charPool.concat(nums);
  }

  // Run this loop a number of times equal to the inputted password length, picking a random character
  // from the char pool to make the password, concatenating it
  for (let i = 0; i < passwordLength; i++) {
    var c = charPool[Math.floor( Math.random() * charPool.length )];
    finalPassword = finalPassword.concat(c);
  }

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password == undefined) {
    password = "undefined - please don't use this as your actual password.";
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
