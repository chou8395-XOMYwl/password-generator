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

//Beginning of function
var pswdLength;
var LowerCaseConfirm;
var UpperCaseConfirm;
var NumberConfirm;
var SpecialConfirm;
var generatePassword = function () {
  pswdLength = prompt("Please choose a number between 8 and 128 to set password length.");
  console.log("Password length = " + pswdLength);

  if (!pswdLength) {
    alert("Value required, please try again.");
    pswdLength = prompt("Please choose a number between 8 and 128 to set password length.");
    console.log("Password length = " + pswdLength);
  }

  else if (pswdLength > 128 || pswdLength < 8) {
    alert("Number entered is not between 8 and 128.");
    pswdLength = prompt("Please choose a number between 8 and 128 to set password length.");
    console.log("Password length = " + pswdLength);
  }

  else {
    LowerCaseConfirm = confirm("Would you like your password to include lower case letters?");
      console.log("Lower case included = " + LowerCaseConfirm);
    UpperCaseConfirm = confirm("Would you like your password to include upper case letters?");
      console.log("Upper case included = " + UpperCaseConfirm);
    NumberConfirm = confirm("Would you like your password to contain numbers?");
      console.log("Numbers inluded = " + NumberConfirm);
    SpecialConfirm = confirm("Would you like your password to contatin special characters?");
      console.log("Special characters included = " + SpecialConfirm);
  }
}
  
