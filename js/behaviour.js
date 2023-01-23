window.addEventListener("DOMContentLoaded", (event) => {
  registerListeners();
});

var mouseClicks = 0;
var keyPresses = 0;
var documentOpen = new Date().getTime();
var typed = 0;

function registerListeners() {
  document.addEventListener("mousedown", (ev) => {
    mouseClicks++;
  });

  document.addEventListener("keypress", (ev) => {
    keyPresses++;
  });

  var emailField = document.getElementById("email-field");
  emailField.addEventListener("keypress", (ev) => {
    typed++;
  });

  var passField = document.getElementById("pass-field");
  passField.addEventListener("keypress", (ev) => {
    typed++;
  });

  var idField = document.getElementById("id-field");
  idField.addEventListener("keypress", (ev) => {
    typed++;
  });

  var nameField = document.getElementById("name-field");
  nameField.addEventListener("keypress", (ev) => {
    typed++;
  });

  var addressField = document.getElementById("address-field");
  addressField.addEventListener("keypress", (ev) => {
    typed++;
  });

  var zipField = document.getElementById("zip-field");
  zipField.addEventListener("keypress", (ev) => {
    typed++;
  });

  var bioField = document.getElementById("bio-field");
  bioField.addEventListener("keypress", (ev) => {
    typed++;
  });
}

function displayBehaviour() {
    var documentClose = new Date().getTime();
    var timeSpent = documentClose - documentOpen;
    var timeSpentSeconds = timeSpent / 1000;
    
    var timeSpentString = timeSpentSeconds + " seconds";
    
    var display = "Mouse clicks: " + mouseClicks + "<br />" +
        "Key presses: " + keyPresses + "<br />" +
        "Time spent: " + timeSpentString + "<br />" +
        "Characters typed: " + typed;

    var textArea = document.getElementById("values");
    textArea.innerHTML = display;
    textArea.style.border = "1px solid black";
    textArea.style.padding = "5px";
}