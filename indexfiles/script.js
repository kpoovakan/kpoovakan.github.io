"use strict";
/* REGULATIONS FOR ADDING NEW ITEMS
in the SCREEN function, add as div to desired section.
each flexbox can have a max of 5 items. make new flexbox if required. max 2 flexboxes per section, then change to overflow version if necessary.
add onkeydown attribute to div with script.
add div's id to focuses array in TOFOCUS function.
*/
const content = document.getElementById("content");
window.addEventListener("load", function() {
    globalThis.currentScreen = 0;
    screen(globalThis.currentScreen);
});

document.addEventListener("keydown", (e) => {
    //if (e.key === "Enter") keyEnter();
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
    toFocus(globalThis.currentScreen, 1);
}
function keyLeft() {
    //console.log("left");
    toFocus(globalThis.currentScreen, -1);
}
function keyEnter(event, thisElement) {
    if (!(event.key === "Enter")) return;
} // deprecated function, use onkeydown attribute

function toFocus(id, change) {
    const focuses = [
        ["table1","table2"],
        ["harvest", "pie", "tableau", "tiles", "stickytab", "spoofmaker", "baguette"]
    ];
    if (change === 0) {
        globalThis.focused = 0;
    } else {
        globalThis.focused = globalThis.focused + change;
    }
    if (globalThis.focused < 0) globalThis.focused = 0;
    if (globalThis.focused > (focuses[id].length) - 1) globalThis.focused = focuses[id].length - 1;
    const thisElement = focuses[id][globalThis.focused];
    document.getElementById(thisElement).focus();
}
function screen(id) {
    const screens = [
        `<h1>kpoovakan</h1>
        <p class="tableContents">
            <span id="table1" tabindex="0" onkeydown="if(event.key==='Enter'){globalThis.currentScreen=1;screen(1);}">⠀featured⠀</span>
            <span id="table2" tabindex="0">⠀utilities⠀</span>
        </p>`,
        `<h2>featured</h2><div class="itemContainer">
        <div class="item" tabindex="0" id="harvest">${scratch("1210100138")}<h3>harvest</h3><p>a fun game from Ancient Rome.</p></div>
        <div class="item" tabindex="0" id="pie">${scratch("1285004431")}<h3>bake a pie</h3><p>silly little pie game!</p></div>
        <div class="item" tabindex="0" id="tableau">${local("indexfiles/thumbs/vigeneretableau.png")}<h3>vigenère tableau</h3><p>encipher and decipher.</p></div>
        <div class="item" tabindex="0" id="tiles">${scratch("1351487347")}<h3>tiles</h3><p>a simple logic game featuring tiles.</p></div>

        </div><div class="itemContainer">
        <div class="item" tabindex="0" id="stickytab"><!--${local("/stickytab/favicon.png")}--><h3>stickytab</h3><p>a fully working New Tab page designed for productivity.</p></div>
        <div class="item" tabindex="0" id="spoofmaker"><h3>spoofmaker</h3><p>a not-suspicious rickroll maker.</p></div>
        <div class="item" tabindex="0" id="baguette"><h3>baguette</h3><p>a web app for managing commercial bakeries. all data saved to the cloud.</p></div>
        </div>`
    ];
    if (screens[id] === undefined) return;
    content.innerHTML = screens[id];
    globalThis.currentScreen = id;
    toFocus(id, 0);
}
function scratch(id) {
    const thumb = `<img src="https://uploads.scratch.mit.edu/get_image/project/${id}_360x270.png" alt="${id}" style="width: 100%;" />`;
    return thumb;
}
function local(path) {
    const thumb = `<img src="${path}" alt="${path}" style="width: 100%;" />`
    return thumb;
}