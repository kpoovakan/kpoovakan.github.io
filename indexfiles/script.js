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
        ["table1", "table2", "table3", "table4", "table5", "table6"],
        ["harvest", "pie", "tableau", "tiles", "stickytab", "spoofmaker", "baguette"],
        ["stickytab", "abc", "wakelock"],
        ["tableau", "caesar", "a1z26"],
        ["harvest", "scratch", "pumpkinpi"],
        ["spoofmaker", "rapidracer", "supersnake", "candyshoppe", "craftoartsupplies"],
        ["chopinetudes", "duowonton", "wordcount"]
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
    // div opening tag template: div class="item" tabindex="0" id="IDENTIFICATION" onkeydown="if(event.key==='Enter'){redirect('my', 'PATH')}"
    const screens = [
        `<h1>kpoovakan</h1>
        <p class="tableContents">
            <span id="table1" tabindex="0" onkeydown="if(event.key==='Enter'){globalThis.currentScreen=1;screen(1);}">⠀featured⠀</span>
            <span id="table2" tabindex="0" onkeydown="if(event.key==='Enter'){globalThis.currentScreen=2;screen(2);}">⠀utilities⠀</span>
            <span id="table3" tabindex="0" onkeydown="if(event.key==='Enter'){globalThis.currentScreen=3;screen(3);}">⠀cryptanalysis⠀</span>
            <span id="table4" tabindex="0" onkeydown="if(event.key==='Enter'){globalThis.currentScreen=4;screen(4);}">⠀games⠀</span>
            <span id="table5" tabindex="0" onkeydown="if(event.key==='Enter'){globalThis.currentScreen=5;screen(5);}">⠀spoof⠀</span>
            <span id="table6" tabindex="0" onkeydown="if(event.key==='Enter'){globalThis.currentScreen=6;screen(6);}">⠀miscellaneous⠀</span>
        </p>`,

        `<h2>featured</h2><div class="itemContainer">
        <div class="item" tabindex="0" id="harvest" onkeydown="if(event.key==='Enter'){redirect('my', 'harvest')}">${scratch("1210100138")}<h3>harvest</h3><p>a fun game from Ancient Rome.</p></div>
        <div class="item" tabindex="0" id="pie" onkeydown="if(event.key==='Enter'){redirect('scratch', '1285004431')}">${scratch("1285004431")}<h3>bake a pie</h3><p>silly little pie game!</p></div>
        <div class="item" tabindex="0" id="tableau" onkeydown="if(event.key==='Enter'){redirect('my', 'vigeneretableau')}">${local("indexfiles/thumbs/vigeneretableau.png")}<h3>vigenère tableau</h3><p>encipher and decipher.</p></div>
        <div class="item" tabindex="0" id="tiles" onkeydown="if(event.key==='Enter'){redirect('scratch', '1351487347')}">${scratch("1351487347")}<h3>tiles</h3><p>a simple logic game featuring tiles.</p></div>
        </div><div class="itemContainer">
        <div class="item" tabindex="0" id="stickytab" onkeydown="if(event.key==='Enter'){redirect('my', 'stickytab')}"><!--${local("/stickytab/favicon.png")}--><h3>stickytab</h3><p>a fully working New Tab page designed for productivity.</p></div>
        <div class="item" tabindex="0" id="spoofmaker" onkeydown="if(event.key==='Enter'){redirect('my', 'spoofmaker')}"><h3>spoofmaker</h3><p>a not-suspicious rickroll maker.</p></div>
        <div class="item" tabindex="0" id="baguette" onkeydown="if(event.key==='Enter'){redirect('web', 'https://baguette.katanya.dev')}"><h3>baguette</h3><p>a web app for managing commercial bakeries. all data saved to the cloud.</p></div>
        </div>`,

        `<h2>utilities</h2><div class="itemContainer">
        <div class="item" tabindex="0" id="stickytab" onkeydown="if(event.key==='Enter'){redirect('my', 'stcikytab')}"><h3>stickytab</h3><p>a fully working New Tab page designed for productivity.</p></div>
        <div class="item" tabindex="0" id="abc" onkeydown="if(event.key==='Enter'){redirect('my', 'MiscellaneousUtilities/AskBeforeClosing.html')}"><h3>ask before closing</h3><p>a "hack" that may prevent some applications from forcefully closing browser windows.</p></div>
        <div class="item" tabindex="0" id="wakelock" onkeydown="if(event.key==='Enter'){redirect('my', 'MiscellaneousUtilities/WakeLock.html')}"><h3>wake lock</h3><p>prevent device from sleep mode. deprecated and may not work on some devices.</p></div>
        </div>`,

        `<h2>cryptanalysis</h2><div class="itemContainer">
        <div class="item" tabindex="0" id="tableau" onkeydown="if(event.key==='Enter'){redirect('my', 'vigeneretableau')}">${local("indexfiles/thumbs/vigeneretableau.png")}<h3>vigenère tableau</h3><p>encipher and decipher.</p></div>
        </div><div class="itemContainer">
        <div class="item" tabindex="0" id="caesar" onkeydown="if(event.key==='Enter'){redirect('my', 'caesarcipher')}"><h3>caesar cipher</h3><p>a monoalphabetic substitution cipher.</p></div>
        <div class="item" tabindex="0" id="a1z26" onkeydown="if(event.key==='Enter'){redirect('my', 'a1z26')}"><h3>A1Z26</h3><p>a simple, well-known monoalphabetic substitution cipher.</p></div>
        </div>`,

        `<h2>games</h2><div class="itemContainer">
        <div class="item" tabindex="0" id="harvest" onkeydown="if(event.key==='Enter'){redirect('my', 'harvest')}">${scratch("1210100138")}<h3>harvest</h3><p>a fun game from Ancient Rome.</p></div>
        <div class="item" tabindex="0" id="scratch" onkeydown="if(event.key==='Enter'){redirect('web', 'https://scratch.mit.edu/users/kpoovakan')}">${local("https://uploads.scratch.mit.edu/get_image/user/58105567_600x600.png")}<h3>fanbase</h3><p>view kpoovakan's profile / "fanbase" for her creations in neophyte programming languages.</p></div>
        </div><div class="itemContainer">
        <div class="item" tabindex="0" id="pumpkinpi" onkeydown="if(event.key==='Enter'){redirect('my', 'pumpkinpi')}"><h3>A1Z26</h3><p>test your memory of the digits of pi.</p></div>
        </div>`,

        `<h2>spoof</h2><div class="itemContainer">
        <div class="item" tabindex="0" id="spoofmaker" onkeydown="if(event.key==='Enter'){redirect('my', 'spoofmaker')}"><h3>spoofmaker</h3><p>a not-suspicious rickroll maker.</p></div>
        <div class="item" tabindex="0" id="rapidracer" onkeydown="if(event.key==='Enter'){redirect('my', 'rapidracer')}"><h3>rapid racer</h3><p>completed spoof</p></div>
        <div class="item" tabindex="0" id="supersnake" onkeydown="if(event.key==='Enter'){redirect('my', 'supersnake')}"><h3>super snake</h3><p>completed spoof</p></div>
        <div class="item" tabindex="0" id="candyshoppe" onkeydown="if(event.key==='Enter'){redirect('my', 'candyshoppe')}"><h3>the candy shoppe</h3><p>completed spoof</p></div>
        <div class="item" tabindex="0" id="craftoartsupplies" onkeydown="if(event.key==='Enter'){redirect('my', 'craftoartsupplies')}"><h3>crafto art supplies</h3><p>completed spoof</p></div>
        </div>`,

        `<h2>miscellaneous</h2><div class="itemContainer">
        <div class="item" tabindex="0" id="chopinetudes" onkeydown="if(event.key==='Enter'){redirect('my', 'chopinetudes')}"><h3>chopin études</h3><p>a music player with a complete collection for all of Chopin's Études.</p></div>
        <div class="item" tabindex="0" id="duowonton" onkeydown="if(event.key==='Enter'){redirect('my', 'duowonton')}"><h3>duowonton</h3><p>quickly review Indonesian vocabulary</p></div>
        <div class="item" tabindex="0" id="wordcount" onkeydown="if(event.key==='Enter'){redirect('my', 'MiscellaneousUtilities/WordCountTracker.html')}"><h3>word count tracker</h3><p>authors can track words they write each day. saved locally.</p></div>
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