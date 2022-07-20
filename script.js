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

var charPool;
var finalPassword = "";

function generatePassword() {
  // Reset the password character pool and the returned password on each run
  charPool = [];
  finalPassword = "";

  passwordLength = prompt("How many characters would you like in your password?");
  passwordLength = parseInt(passwordLength);


  if (isNaN(passwordLength)) {
    alert("Length is not a number!");
    return;
  }
  else if (passwordLength < 8) {
    alert("Length must be greater than 8!");
    return;
  }
  else if (passwordLength > 128) {
    alert("Length must be less than 128!");
    return;
  }

  useUpper = confirm("Do you want your password to have uppercase letters?");

  useLower = confirm("Do you want your password to use lowercase letters?");

  useSpec = confirm("Do you want your password to use special characters?");

  useNum = confirm("Do you want your password to use numbers?");

  if (!useUpper && !useLower && !useSpec && !useNum) {
    alert("You need to say yes to at least one of the conditions.")
    return;
  }

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


  for (let i = 0; i < passwordLength; i++) {
    var c = charPool[Math.floor( Math.random() * charPool.length )];
    finalPassword = finalPassword.concat(c);
  }

  console.log("The password: " + finalPassword);
  console.log("Length is: " + finalPassword.length + ", just checking");
  console.log("Function finished as intended... Probably.")
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
