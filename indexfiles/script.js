"use strict";
const content = document.getElementById("content");
window.addEventListener("load", function() {
    globalThis.currentScreen = 0;
    screen(globalThis.currentScreen);
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") keyEnter();
    if (e.key === "ArrowUp") keyUp();
    if (e.key === "ArrowDown") keyDown();
    if (e.key === "ArrowLeft") keyLeft();
    if (e.key === "ArrowRight") keyRight();
    if (e.key === "W") keyUp();
    if (e.key === "A") keyLeft();
    if (e.key === "S") keyDown();
    if (e.key === "D") keyRight();
});
document.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (e.deltaY > 0) keyDown();
    if (e.deltaY < 0) keyUp();
}, { passive: false} );
let touchStartY = 0;
let debounceTimer;
document.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
}, { passive: false });
document.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const touchEndY = e.touches[0].clientY;
    const difference = touchStartY - touchEndY;
    const threshold = 31;
    if (Math.abs(difference) < threshold) return;
    if (Math.abs(difference) > threshold) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        if (difference > 0) keyUp();
        if (difference < 0) keyDown();
    }, 500);
}, { passive: false });

function keyUp() {
    //console.log("up");
    let current = globalThis.currentScreen - 1;
    screen(current);
}
function keyDown() {
    //console.log("down");
    let current = globalThis.currentScreen + 1;
    screen(current);
}
function keyRight() {
    //console.log("right");
}
function keyLeft() {
    //console.log("left");
}
function keyEnter() {
    //console.log("enter");
}

function screen(id) {
    const screens = [
        `<h1>kpoovakan</h1>`
    ];
    if (screens[id] === undefined) return;
    content.innerHTML = screens[id];
    globalThis.currentScreen = id;
}