window.onload = patientTruck

function patientTruck() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('action')) {
    const actionType = urlParams.get('action');
    if (actionType === "cryptanalysis") {
      cryptanalysis();
    } else if (actionType === "utilities") {
      utilities();
    } else if (actionType === "games") {
      games();
    } else if (actionType === "spoof") {
      spoof();
    } else if (actionType === "miscellaneous") {
      miscellaneous();
    } else if (actionType === "archives") {
      archives();
    }
    return;
  }
  menu();
}

function menu() {
  document.getElementById("output").innerHTML=`<span style="width: 600px; display: block; margin: 13px auto; padding: 31px;">
  <button onclick="cryptanalysis()" class="main-button" style="float: left; margin: 13px">Cryptanalysis</button>
  <button onclick="utilities()" class="main-button" style="float: right; margin: 13px">Utilities</button></br></br><div class="main-clear"></div>
  <button onclick="games()" class="main-button" style="float: left; margin: 13px">Games</button>
  <button onclick="spoof()" class="main-button" style="float: right; margin: 13px">Spoof</button></br></br><div class="main-clear"></div>
  <button onclick="miscellaneous()" class="main-button" style="float: left; margin: 13px">Miscellaneous</button>
  <button onclick="archives()" class="main-button" style="float: right; margin: 13px">Archives</button>
  <div class="main-clear"></div></span>`;
}

function comments() {
  window.location.href="https://scratch.mit.edu/users/kpoovakan#comments";
}

function cryptanalysis() {
  document.getElementById("output").innerHTML=`<div class="main-text"><span style="width:600px; display: block; margin: 13px auto; padding: 31px;">
  <button onclick="menu()" class="main-small-button">Back to menu</button></br>
  <p><a href="/vigeneretableau">The Vigenère Tableau</a>: encipher and decipher messages using Vigenère's Tableau Cipher. Ciphertext, if written with a valid method, can be deciphered even if the key letter is unknown.</p>
  <p><a href="/caesarcipher">Caesar Cipher</a>: encipher and decipher messages using the Caesar Cipher. Ciphertext can be converted to plaintext even if the key letter is unknown.</p>
  <p><a href="/a1z26">A1Z26</a>: encipher and decipher messages using the simple but well-known A1Z26 monoalphabetic substitution cipher.</p>
  <p>Can't find what you're looking for? It may have been moved to the <a href="javascript:void(0)" onclick="archives()">archives</a>.</p></span></div>`;
}

function utilities() {
  document.getElementById("output").innerHTML=`<div class="main-text"><span style="width:600px; display: block; margin: 13px auto; padding: 31px;">
  <button onclick="menu()" class="main-small-button">Back to menu</button></br>
  <p><a href="/MiscellaneousUtilities/WakeLock.html">Wake Lock</a>: prevent device from sleep mode.</p>
  <p><a href="/MiscellaneousUtilities/AskBeforeClosing.html">Ask Before Closing</a>: may prevent applications from closing browser window.</p>
  <p><a href="/MiscellaneousUtilities/WordCountTracker.html">Word Count Tracker</a>: authors can track words written, saved locally.</p>
  <p>Can't find what you're looking for? It may have been moved to the <a href="javascript:void(0)" onclick="archives()">archives</a>.</p></span></div>`;
}

function games() {
  document.getElementById("output").innerHTML=`<div class="main-text"><span style="width:600px; display: block; margin: 13px auto; padding: 31px;">
  <button onclick="menu()" class="main-small-button">Back to menu</button></br>
  <p><a href="/harvest">Harvest</a>: a fun video game set in Ancient Rome.</p>
  <p><a href="/pumpkinpi">Pumpkin Pi</a>: how many digits of pi have you memorized?</p>
  <p>Can't find what you're looking for? It may have been moved to the <a href="javascript:void(0)" onclick="archives()">archives</a>.</p></span></div>`;
}

function spoof() {
  document.getElementById("output").innerHTML=`<div class="main-text"><span style="width:600px; display: block; margin: 13px auto; padding: 31px;">
  <button onclick="menu()" class="main-small-button">Back to menu</button></br>
  <p><a href="/onlinelibrary">Online Library</a></p>
  <p><a href="/sparklabs">Spark Labs</a></p>
  <p><a href="/supersnake">Super Snake</a></p>
  <p><a href="/candyshoppe">The Candy Shoppe</a></p>
  <p><a href="/craftoartsupplies">Crafto Art Supplies</a></p>
  <p>Can't find what you're looking for? It may have been moved to the <a href="javascript:void(0)" onclick="archives()">archives</a>.</p></span></div>`;
}

function miscellaneous() {
  document.getElementById("output").innerHTML=`<div class="main-text"><span style="width:600px; display: block; margin: 13px auto; padding: 31px;">
  <button onclick="menu()" class="main-small-button">Back to menu</button></br>
  <p><a href="/reflections">Reflections</a>: create text that seems unreadable until reflected by a mirror.</p>
  <p><a href="/duowonton">Duowonton</a>: quickly review Indonesian vocabulary.</p>
  <p><a href="/bypass">Bypass</a>: an experiment, for now.</p>
  <p>Can't find what you're looking for? It may have been moved to the <a href="javascript:void(0)" onclick="archives()">archives</a>.</p></span></div>`;
}

function archives() {
  document.getElementById("output").innerHTML=`<div class="main-text"><span style="width:600px; display: block; margin: 13px auto; padding: 31px;">
  <button onclick="menu()" class="main-small-button">Back to menu</button></br>
  <p><a href="/tofu">Tofu</a>: a simple way to test embedding permissions.</p>
  <p><a href="/MiscellaneousUtilities/UpsideDownText.html">Upside-Down Text</a>: copy upside-down messages to clipboard.</p>
  <p><a href="/MiscellaneousUtilities/OnlineNotebook.html">Online Notebook</a>: a free online notebook, saved locally.</p>
  </span></div>`;
}
