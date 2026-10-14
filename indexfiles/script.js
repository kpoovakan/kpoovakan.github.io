"use strict";


// the function below can disable clicks
window.addEventListener("mousedown", (e) => {
    e.preventDefault();
});



/* REGULATIONS FOR ADDING NEW ITEMS
each flexbox can have a max of 5 items. make new flexbox if required. max 2 flexboxes per section, then change to overflow version if necessary.
add onkeydown attribute to div with script.
add onclick attribute with script for clicks.
add div's id to focuses array in TOFOCUS function.
*/
const content = document.getElementById("content");
window.addEventListener("load", function() {
    globalThis.currentScreen = 0;
    screen(globalThis.currentScreen);
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") keyUp();
    if (e.key === "ArrowDown") keyDown();
    if (e.key === "ArrowLeft") keyLeft();
    if (e.key === "ArrowRight") keyRight();
    if (e.key === "w") keyUp();
    if (e.key === "a") keyLeft();
    if (e.key === "s") keyDown();
    if (e.key === "d") keyRight();
});

function keyUp() {
    let current = globalThis.currentScreen - 1;
    screen(current);
}
function keyDown() {
    let current = globalThis.currentScreen + 1;
    screen(current);
}
function keyRight() {
    toFocus(globalThis.currentScreen, 1);
}
function keyLeft() {
    toFocus(globalThis.currentScreen, -1);
}

function toFocus(id, change) {
    const focuses = [
        ["table1", "table2", "table3", "table4", "table5", "table6", "table7", "table8"],
        ["featharvest", "featpie", "feattableau", "feattiles", "featstickytab", "featspoofmaker", "featbaguette"],
        ["stickytab", "bypass", "tofu", "abc", "wakelock"],
        ["tableau", "caesar", "a1z26"],
        ["harvest", "scratch", "pumpkinpi"],
        ["spoofmaker", "rapidracer", "supersnake", "candyshoppe", "craftoartsupplies"],
        ["chopinetudes", "duowonton", "wordcount"],
        ["baguette", "paint", "notebook", "upsidedowntext"],
        ["profilemain", "profilescratch", "profilegithub"]
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
function scratch(id) {
    const thumb = `<img src="https://uploads.scratch.mit.edu/get_image/project/${id}_360x270.png" alt="${id}" style="width: 100%;" />`;
    return thumb;
}
function local(path) {
    const thumb = `<img src="${path}" alt="${path}" style="width: 100%;" />`
    return thumb;
}
function screen(id) {
    const screens = ["landing", "featured", "utilities", "cryptanalysis" ,"games", "spoof", "miscellaneous", "archives", "about"];
    if (screens[id] === undefined) return;
    const div = document.getElementById(screens[id]);
    div.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
    globalThis.currentScreen = id;
    toFocus(id, 0);
}

// types: scratch, web, my
function redirect(type, path) {
    if (type == "scratch") {
        window.location.href = `https://scratch.mit.edu/projects/${path}`;
    } else if (type == "web") {
        window.location.href = path;
    } else if (type == "my") {
        window.location.href = `/${path}`;
    }
}