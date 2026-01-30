window.onload = menu

function menu() {
  document.getElementById("output").innerHTML=`<span style="display: flex; justify-content: center;">
  <button onclick="cryptanalysis()" class="main-button">Cryptanalysis</button>
  <button onclick="utilities()" class="main-button">Utilities</button></br>
  <button onclick="games()" class="main-button">Games</button>
  <button onclick="spoof()" class="main-button">Spoof</button></br>
  <button onclick="miscellaneous()" class="main-button">Miscellaneous</button>
  <button onclick="comments()" class="main-button">Comments</button>
  </span>`;
}

function comments() {
  window.location.replace("https://scratch.mit.edu/users/kpoovakan#comments");
}
