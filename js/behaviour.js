var mouseClicks = 0;
var keyPresses = 0;
var documentOpen = new Date().getTime();

document.addEventListener(click, () => {
    mouseClicks++;
})

document.addEventListener(keypress, () => {
    keyPresses++;
})

