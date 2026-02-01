window.onload = menu

function menu() {
  document.getElementById("output").innerHTML=`<span style="width: 600px; display: block; margin: 13px auto; padding: 31px;">
  <button onclick="cryptanalysis()" class="main-button" style="float: left; margin: 13px">Cryptanalysis</button>
  <button onclick="utilities()" class="main-button" style="float: right; margin: 13px">Utilities</button></br></br><div class="main-clear"></div>
  <button onclick="games()" class="main-button" style="float: left; margin: 13px">Games</button>
  <button onclick="spoof()" class="main-button" style="float: right; margin: 13px">Spoof</button></br></br><div class="main-clear"></div>
  <button onclick="miscellaneous()" class="main-button" style="float: left; margin: 13px">Miscellaneous</button>
  <button onclick="comments()" class="main-button" style="float: right; margin: 13px">Comments</button>
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
  </span></div>`;
}

function utilities() {
  document.getElementById("output").innerHTML=`<div class="main-text"><span style="width:600px; display: block; margin: 13px auto; padding: 31px;">
  <button onclick="menu()" class="main-small-button">Back to menu</button></br>
  <p><a href="/MiscellaneousUtilities/WakeLock.html">Wake Lock</a>: prevent device from sleep mode.</p>
  <p><a href="/MiscellaneousUtilities/UpsideDownText.html">Upside-Down Text</a>: copy upside-down messages to clipboard.</p>
  <p><a href="/MiscellaneousUtilities/AskBeforeClosing.html">Ask Before Closing</a>: may prevent applications from closing browser window.</p>
  <p><a href="/MiscellaneousUtilities/WordCountTracker.html">Word Count Tracker</a>: authors can track words written, saved locally.</p>
  <p><a href="/MiscellaneousUtilities/OnlineNotebook.html">Online Notebook</a>: a free online notebook, saved locally.</p>
  </span></div>`;
}
