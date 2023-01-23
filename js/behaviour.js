var mouseClicks = 0;
var keyPresses = 0;
var documentOpen = new Date().getTime();
var typed = 0;

document.addEventListener("mousedown", (ev) => {
    mouseClicks++;
})

document.addEventListener("keypress", (ev) => {
    keyPresses++;
})

