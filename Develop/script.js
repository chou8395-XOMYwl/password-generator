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
var LowerConfirm;
var UpperConfirm;
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
    LowerConfirm = confirm("Would you like your password to include lower case letters?");
      console.log("Lower case value = " + LowerConfirm);

  }
}
  
