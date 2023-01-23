function validate() {
  var emailField = document.getElementsByName("email-field")[0];
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  emailRegex.test(emailField.value)
    ? (emailField.style.border = "1px solid green")
    : (emailField.style.border = "1px solid red");

  var passField = document.getElementsByName("pass-field")[0];
  var passRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  passRegex.test(passField.value)
    ? (passField.style.border = "1px solid green")
    : (passField.style.border = "1px solid red");

  var idField = document.getElementsByName("id-field")[0];
  var idRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  idRegex.test(idField.value)
    ? (idField.style.border = "1px solid green")
    : (idField.style.border = "1px solid red");

  var nameField = document.getElementsByName("name-field")[0];
  var nameRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  nameRegex.test(nameField.value)
    ? (nameField.style.border = "1px solid green")
    : (nameField.style.border = "1px solid red");

  var countryField = document.getElementsByName("country-field")[0];
  var countryRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  countryRegex.test(countryField.value)
    ? (countryField.style.border = "1px solid green")
    : (countryField.style.border = "1px solid red");

  var zipField = document.getElementsByName("zip-field")[0];
  var zipRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
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
