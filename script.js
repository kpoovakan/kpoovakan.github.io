window.onload = menu

function menu() {
  document.getElementById("output").innerHTML=`<span style="width: 600px; display: block; margin: 13px auto; padding: 31px;">
  <button onclick="cryptanalysis()" class="main-button" style="float: left;">Cryptanalysis</button>
  <button onclick="utilities()" class="main-button" style="float: right;">Utilities</button></br></br><div class="main-clear"></div>
  <button onclick="games()" class="main-button" style="float: left;">Games</button>
  <button onclick="spoof()" class="main-button" style="float: right;">Spoof</button></br></br><div class="main-clear"></div>
  <button onclick="miscellaneous()" class="main-button" style="float: left;">Miscellaneous</button>
  <button onclick="comments()" class="main-button" style="float: right;">Comments</button>
  <div class="main-clear"></div></span>`;
}

function comments() {
  window.location.href="https://scratch.mit.edu/users/kpoovakan#comments";
}
