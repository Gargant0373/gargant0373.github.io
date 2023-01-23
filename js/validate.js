function validate() {
  var emailField = document.getElementsByName("email-field")[0];
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  emailRegex.test(emailField.value)
    ? (emailField.style.border = "1px solid green")
    : (emailField.style.border = "1px solid red");
}
