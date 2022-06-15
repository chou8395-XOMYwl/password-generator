// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

//Declare variables
var pswdLength;
var LowerCaseConfirm;
var UpperCaseConfirm;
var NumberConfirm;
var SpecialConfirm;
var EmployeeInput;
var charTypes;
var emptyLength = [];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["/", "?", ".", ">", ",", "<", "'", ";", ":", "+", "=", "-", "_", "|", ")", "(", "*", "&", "^", "%", "$", "@", "!", "~", "`"]; 

//Function to generate random password
var generatePassword = function () {
  //Prompt to input password length
  pswdLength = prompt("Please choose a number between 8 and 128 to set password length.");
  console.log("Password length = " + pswdLength);

  //No input entered
  if (!pswdLength) {
    alert("No number between 8 and 128 entered for password length.");
  }
  //If number entered is above 128 or below 8
  else if (pswdLength > 128 || pswdLength < 8) {
    alert("Number entered is not between 8 and 128.");
  }
  //True False statements for different character types
  else {
    LowerCaseConfirm = confirm("Would you like your password to include lower case letters?");
      console.log("Lower case included = " + LowerCaseConfirm);
    UpperCaseConfirm = confirm("Would you like your password to include upper case letters?");
      console.log("Upper case included = " + UpperCaseConfirm);
    NumberConfirm = confirm("Would you like your password to contain numbers?");
      console.log("Numbers inluded = " + NumberConfirm);
    SpecialConfirm = confirm("Would you like your password to contatin special characters?");
      console.log("Special characters included = " + SpecialConfirm);
  };
  //False for all character types
  //EmployeeInput variable value defined by True False as alert 
  if (!LowerCaseConfirm && !UpperCaseConfirm && !NumberConfirm && !SpecialConfirm) {
    EmployeeInput = alert("Please re-click 'Generate Password' button to set criteria for password.");
  }
  //True for all character types
  //EmployeeInput variable value defined by True False as merged arrays 
  else if (LowerCaseConfirm && UpperCaseConfirm && NumberConfirm && SpecialConfirm) {
    EmployeeInput = lowercase.concat(uppercase, number, specialChar);
    console.log(EmployeeInput);
  }
  //True for character types uppercase, numbers, and special characters
  else if (UpperCaseConfirm && NumberConfirm && SpecialConfirm) {
    EmployeeInput = uppercase.concat(number, specialChar);
    console.log(EmployeeInput);
  }
  //True for character types uppercase, lowercase, and special characters
  else if (UpperCaseConfirm && LowerCaseConfirm && SpecialConfirm) {
    EmployeeInput = uppercase.concat(lowercase, specialChar);
    console.log(EmployeeInput);
  }
  //True for character types uppercase, numbers, and lowercase
  else if (UpperCaseConfirm && LowerCaseConfirm && NumberConfirm) {
    EmployeeInput = uppercase.concat(number, lowercase);
    console.log(EmployeeInput);
  }
  //True for character types lowercase, numbers, and special characters
  else if (LowerCaseConfirm && NumberConfirm && SpecialConfirm) {
    EmployeeInput = lowercase.concat(number, specialChar);
    console.log(EmployeeInput);
  }
  //True for character types uppercase and numbers
  else if (UpperCaseConfirm && NumberConfirm ) {
    EmployeeInput = uppercase.concat(number);
    console.log(EmployeeInput);
  }
  //True for character types uppercase and special characters
  else if (UpperCaseConfirm && SpecialConfirm ) {
    EmployeeInput = uppercase.concat(specialChar);
    console.log(EmployeeInput);
  }
  //True for character types uppercase and lowercase
  else if (UpperCaseConfirm && LowerCaseConfirm ) {
    EmployeeInput = uppercase.concat(lowercase);
    console.log(EmployeeInput);
  }
  //True for character types lowercase and numbers
  else if (LowerCaseConfirm && NumberConfirm ) {
    EmployeeInput = lowercase.concat(number);
    console.log(EmployeeInput);
  }
  //True for character types lowercase and special characters
  else if (LowerCaseConfirm && SpecialConfirm ) {
    EmployeeInput = lowercase.concat(specialChar);
    console.log(EmployeeInput);
  }
  //True for character types numbers and special characters
  else if (SpecialConfirm && NumberConfirm ) {
    EmployeeInput = specialChar.concat(number);
    console.log(EmployeeInput);
  }
  //True for character type lowercase
  else if (LowerCaseConfirm) {
    EmployeeInput = lowercase;
    console.log(EmployeeInput);
  }
  //True for character type uppercase
  else if (UpperCaseConfirm) {
    EmployeeInput = uppercase;
    console.log(EmployeeInput);
  }
  //True for character type special characters
  else if (SpecialConfirm) {
    EmployeeInput = specialChar;
    console.log(EmployeeInput);
  }
  //True for character type numbers
  else if (NumberConfirm) {
    EmployeeInput = number;
    console.log(EmployeeInput);
  }
  //for loop, variable charTypes = EmployeeInput index of Random number between 0 and 1 x length of merged EmployeeInput arrays
  //emptyLength variable array gets random items added as loop executes
  for (var i = 0; i < pswdLength; i++) {
    var charTypes = EmployeeInput[Math.floor(Math.random() * EmployeeInput.length)];
    emptyLength.push(charTypes);
    console.log(charTypes);
  }
  //password = emptyLength array returns as string with no seperators
  var password = emptyLength.join('')
    console.log("Random password is " + password);
    return password;

}