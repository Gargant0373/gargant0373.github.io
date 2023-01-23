function validate() {
  var emailField = document.getElementsByName("email-field")[0];
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var emailMessage = document.getElementById("email-message");
  var emailValid = emailRegex.test(emailField.value);
  emailValid ? valid(emailField, emailMessage)
    : invalid(emailField, emailMessage, "Please enter a valid email address.");

  var passField = document.getElementsByName("pass-field")[0];
  var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`!@#$%^&*()_+\-=]).{12,}$/;
  var passMessage = document.getElementById("pass-message");
  var passValid = passRegex.test(passField.value);
  passValid ? valid(passField, passMessage)
    : invalid(passField, passMessage, "Please enter a valid password.");

  var idField = document.getElementsByName("id-field")[0];
  var idRegex = /^[A-Z]{1}[a-zA-Z0-9.-]{3,10}[0-9`!@#$%^&*()_+\-=]{1}$/;
  var idMessage = document.getElementById("user-message");
  var idValid = idRegex.test(idField.value);
  idValid ? valid(idField, idMessage)
    : invalid(idField, idMessage, "Please enter a valid user-id.");

  var nameField = document.getElementsByName("name-field")[0];
  var nameRegex = /[a-zA-Z]{1,}/;
  var nameMessage = document.getElementById("name-message");
  var nameValid = nameRegex.test(nameField.value);
  nameValid ? valid(nameField, nameMessage)
    : invalid(nameField, nameMessage, "Please enter a valid name.");

  var zipField = document.getElementsByName("zip-field")[0];
  var zipRegex = /\d{4}[A-Z]{2}/;
  var zipMessage = document.getElementById("zip-message");
  var zipValid = zipRegex.test(zipField.value);
  (zipField.value != null && zipValid) ? valid(zipField, zipMessage)
    : invalid(zipField, zipMessage, "Please enter a valid ZIP code.");

  var genderField = document.getElementsByName("gender-field")[0];
  var genderMessage = document.getElementById("gender-message");
  var genderChosen = validateSelect(genderField);
  genderChosen ? valid(genderField, genderMessage)
    : invalid(genderField, genderMessage, "Please select your gender.");

  var languageField = document.getElementsByName("language-field")[0];
  var languageMessage = document.getElementById("language-message");
  var languageValid = validateSelect(languageField);
  languageValid ? valid(languageField, languageMessage)
    : invalid(languageField, languageMessage, "Please select a language.");

  if(nameValid && idValid && passValid && emailValid && genderChosen && languageValid) {
    alert('Email: ' + emailField.value + '\n' +
      'Name: ' + nameField.value + '\n' +
      'User ID: ' + idField.value + '\n' +
      'Address: ' + document.getElementsByName("address-field")[0].value + '\n' +
      'Country: ' + document.getElementById("country-field").value + '\n' +
      'ZIP Code: ' + zipField.value + '\n' +
      'Gender: ' + genderField.value + '\n' +
      'Language: ' + languageField.value + '\n' +
      'Bio: ' + document.getElementsByName("bio-field")[0].value
    );
  }
}

function valid(element, message) {
  element.style.border = "1px solid green";
  message.innerHTML = "Looks good!";
}

function invalid(element, message, text) {
  element.style.border = "1px solid red";
  message.innerHTML = text;
}

function validateSelect(element) {
  return element.value != "default";
}
