const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

//create function that displays the new password in an array with the character types already declared
function generatePass() {
  var arr = [];
  var string = "";

  var passwordLength = prompt(
    "How many characters would you like your password to be?(8-128)"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a number between 8 and 128");
    generatePass();
  } else {
    if (confirm("Would you like uppercase letters?")) {
      arr = arr.concat(uppercase);
    }
    if (confirm("Would you like lowercase letters?")) {
      arr = arr.concat(lowercase);
    }
    if (confirm("Would you like numbers?")) {
      arr = arr.concat(numbers);
    }
    if (confirm("Would you like special characters?")) {
      arr = arr.concat(special);
    }
    if(arr.length === 0) {
      alert("You must choose one type of character to build a password.")
    } else {
      for(let i = 0; i < passwordLength; i++) {
        string += arr[Math.floor(Math.random() * arr.length)];
      }
    }
    return string;
  }
}

//function that generates the new password from the user with a btn
function createPass() {
  const password = generatePass();
  const passwordVal = document.querySelector("#password");

  passwordVal.value = password;
}

//create btn activity for when password is ran by user
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", createPass);
