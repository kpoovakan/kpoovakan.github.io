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
  document.getElementById("output").innerHTML=``;
}
