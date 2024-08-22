// dummy data / Object
const userDatabase = {
  bless123: {
    firstName: "Blessing",
    lastName: "Aguwa",
    email: "bblessigaguwa@gmail.com",
    accountActivated: true,
    password: blessdev4,
  },

  "ade@56": {
    firstName: "Ade",
    lastName: "Olu",
    email: "adeolu@gmail.com",
    accountActivated: true,
    password: adeluja6,
  },

  tobe567: {
    firstName: "Tobe",
    lastName: "Shola",
    email: "tobesho66@gmail.com",
    accountActivated: true,
    password: tode7789,
  },

  chiomzy: {
    firstName: "Chioma",
    lastName: "Ubani",
    email: "chiomzy@gmail.com",
    accountActivated: true,
    password: chiomzy430,
  },
};

function displayUserDetails() {
  // Enter username
  let username = prompt("Enter your username");

  while (validateUsername(username) == false) {
    username = prompt("username not valid . please enter valid username");
  }

  if (username == null) {
    return;
  }

  // Enter password
  let password = prompt("Enter your password");

  while (validatePassword(password) == false) {
    password = prompt("password is not valid . Please enter valid password");
  }

  if (password == null) {
    return;
  }

  // Password confirm

  let passwordConfirm = prompt("Confirm your password");

  while (passwordConfirm !== password) {
    passwordConfirm = prompt(
      "password incorrect. Confirm your password again!"
    );
  }

  if (passwordConfirm == null) {
    return;
  }

  // check if the user database contains the username
  const user = userDatabase[username];
  console.log(user);

  console.log(username, password, passwordConfirm);
}

alert("You are here! Everything is valid");
displayUserDetails();
alert("You have come to the end of this program! Goodbye");

// username must be less than ten
function validateUsername(username) {
  if (username == null) {
    return false;
  }

  if (username.length > 10) {
    return false;
  } else {
    return true;
  }
}

//   "password must be greater than six"

function validatePassword(password) {
  if (password == null) {
    return false;
  }

  if (password.length > 6) {
    return true;
  } else {
    return false;
  }
}
