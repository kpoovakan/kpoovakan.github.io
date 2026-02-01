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
  document.getElementById("output").innerHTML=`<span style="width:600px; display: block; margin: 13px auto; padding: 31px;">
  <button onclick="menu()" class="main-small-button">Back to menu</button></br>
  <p><a href="/vigeneretableau">The Vigenère Tableau</a>: encipher and decipher messages using Vigenère's Tableau Cipher. Ciphertext, if written with a valid method, can be deciphered even if the key letter is unknown.</p>
  <p><a href="/caesarcipher">Caesar Cipher</a>: encipher and decipher messages using the Caesar Cipher. Ciphertext can be converted to plaintext even if the key letter is unknown.</p>
  </span>`;
}
