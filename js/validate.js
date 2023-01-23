function validate() {
  var emailField = document.getElementsByName("email-field")[0];
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var emailMessage = document.getElementById("email-message");
  emailRegex.test(emailField.value) ? valid(emailField, emailMessage)
    : invalid(emailField, emailMessage, "Please enter a valid email address.");

  var passField = document.getElementsByName("pass-field")[0];
  var passRegex = /^[a-zA-Z0-9._-]@[a-zA-Z0-9.-]\.[a-zA-Z]{2,4}$/;
  var passMessage = document.getElementById("pass-message");
  passRegex.test(passField.value) ? valid(passField, passMessage)
    : invalid(passField, passMessage, "Please enter a valid password.");


  var idField = document.getElementsByName("id-field")[0];
  var idRegex = /^[A-Z]{1}[a-zA-Z0-9.-]{3,10}[`!@#$%^&*()_+\-=]{1}$/;
  var idMessage = document.getElementById("id-message");
  idRegex.test(idField.value) ? valid(idField, idMessage)
    : invalid(idField, idMessage, "Please enter a valid user-id.");

  var nameField = document.getElementsByName("name-field")[0];
  var nameRegex = /^[a-zA-Z]{1,}/;
  var nameMessage = document.getElementById("name-message");
  nameRegex.test(nameField.value) ? valid(nameField, nameMessage)
    : invalid(nameField, nameMessage, "Please enter a valid name.");

  var countryField = document.getElementsByName("country-field")[0];
  var countryRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var countryMessage = document.getElementById("country-message");
  countryRegex.test(countryField.value) ? valid(countryField, countryMessage)
    : invalid(countryField, countryMessage, "Please enter a valid country.");

  var zipField = document.getElementsByName("zip-field")[0];
  var zipRegex = /\d{4}[A-Z]{2}/;
  var zipMessage = document.getElementById("zip-message");
  zipRegex.test(zipField.value) ? valid(zipField, zipMessage)
    : invalid(zipField, zipMessage, "Please enter a valid ZIP code.");

  var languageField = document.getElementsByName("language-field")[0];
  var languageRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var languageMessage = document.getElementById("language-message");
  languageRegex.test(languageField.value) ? valid(languageField, languageMessage)
    : invalid(languageField, languageMessage, "Please enter a valid language.");

  var genderField = document.getElementsByName("gender-field")[0];
  var genderMessage = document.getElementById("gender-message");
  genderField.value = "" ? valid(genderField, genderMessage)
    : invalid(genderField, genderMessage, "Please select a gender.");
  }

function valid(element, message) {
    element.style.border = "1px solid green";
    message.innerHTML = "Looks good!";
}

function invalid(element, message, text) {
    element.style.border = "1px solid red";
    message.innerHTML = text;
}
