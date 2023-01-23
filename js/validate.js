function validate() {
  var emailField = document.getElementsByName("email-field")[0];
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var emailMessage = document.getElementById("email-message");
  emailRegex.test(emailField.value)
    ? valid(emailField, emailMessage)
    : invalid(emailField, emailMessage);
}

function valid(element, message) {
    element.style.border = "1px solid green";
    message.innerHTML = "Looks good!";
}

function invalid(element, message) {
    element.style.border = "1px solid red";
    message.innerHTML = "Please enter a valid email address.";
}
