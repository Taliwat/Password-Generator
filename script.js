//establish originating variables needed for password chars
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  
//create function for the user to show prompts and options when creating password
function passPrompt() {
  const passLength = parseInt(prompt('For your new password how many characters would you like in it?'));
  if (Number.isNaN(passLength)) {
    alert('Your password length must be entered as a number!');
  }; 

//enter min and max lengths for the password
  if (passLength < 8) {
    alert('Your password must be at least 8 characters!');
  };

  if (passLength > 128) {
    alert('Your password must be less than 128 characters!');
  
//show confirm statements for when users enter in specific types of characters
  const ifUppercase = confirm('Click to confirm that you would like to use UPPERCASE characters in your new password.');
  
  const ifLowercase = confirm('Click to confirm that you would like to use LOWERCASE characters in your new password.');
  
  const ifNumbers = confirm('Click to confirm that you would like to use NUMERIC characters in your new password.');
  
  const ifSpecial = confirm('Click to confirm that you would like to use SPECIAL characters in your new password.'); 
}};

//create function that displays the new password in an array with the character types already declared
function generatePass() {
  
}


//function that generates the new password from the user with a btn
function createPass() {
  const password = generatePass();
  const passwordVal = document.querySelector('#password');

  passwordVal.value = password;
}

//create btn activity for when password is ran by user
const generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', createPass);





