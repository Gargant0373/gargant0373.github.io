function validate() {
  var emailField = document.getElementsByName("email-field")[0];
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var emailMessage = document.getElementById("email-message");
  emailRegex.test(emailField.value) ? valid(emailField, emailMessage)
    : invalid(emailField, emailMessage);

  var passField = document.getElementsByName("pass-field")[0];
  var passRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var passMessage = document.getElementById("pass-message");
  passRegex.test(passField.value) ? valid(passField, passMessage)
    : invalid(passField, passMessage);


  var idField = document.getElementsByName("id-field")[0];
  var idRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var idMessage = document.getElementById("id-message");
  idRegex.test(idField.value) ? valid(idField, idMessage)
    : invalid(idField, idMessage);

  var nameField = document.getElementsByName("name-field")[0];
  var nameRegex = /\D/;
  nameRegex.test(nameField.value)
    ? (nameField.style.border = "1px solid green")
    : (nameField.style.border = "1px solid red");

  var countryField = document.getElementsByName("country-field")[0];
  var countryRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  countryRegex.test(countryField.value)
    ? (countryField.style.border = "1px solid green")
    : (countryField.style.border = "1px solid red");

  var zipField = document.getElementsByName("zip-field")[0];
  var zipRegex = /\d{4}[A-Z]{2}/;
  zipRegex.test(zipField.value)
    ? (zipField.style.border = "1px solid green")
    : (zipField.style.border = "1px solid red");
  
  var genderField = document.getElementsByName("gender-field")[0];
  var genderRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  genderRegex.test(genderField.value)
    ? (genderField.style.border = "1px solid green")
    : (genderField.style.border = "1px solid red");

  var languageField = document.getElementsByName("language-field")[0];
  var languageRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  languageRegex.test(languageField.value)
    ? (languageField.style.border = "1px solid green")
    : (languageField.style.border = "1px solid red");
}

function valid(element, message) {
    element.style.border = "1px solid green";
    message.innerHTML = "Looks good!";
}

function invalid(element, message) {
    element.style.border = "1px solid red";
    message.innerHTML = "Please enter a valid email address.";
}
