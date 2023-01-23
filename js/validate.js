function validate() {
  var emailField = document.getElementsByName("email-field")[0];
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var emailMessage = document.getElementById("email-message");
  console.log(emailMessage)
  emailRegex.test(emailField.value)
    ? (emailMessage.innerHTML = "Looks good!")
    : (emailMessage.innerHTML = "Please enter a valid email address.");
}
