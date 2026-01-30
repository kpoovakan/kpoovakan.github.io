window.onload = menu

function menu() {
  document.getElementById("output").innerHTML=`<span style="width: 700px;">
  <button onclick="cryptanalysis()" class="main-button" style="float: left;">Cryptanalysis</button><div class="main-clear"></div>
  <button onclick="utilities()" class="main-button" style="float: right;">Utilities</button></br><div class="main-clear"></div>
  <button onclick="games()" class="main-button" style="float: left;">Games</button><div class="main-clear"></div>
  <button onclick="spoof()" class="main-button" style="float: right;">Spoof</button></br><div class="main-clear"></div>
  <button onclick="miscellaneous()" class="main-button" style="float: left;">Miscellaneous</button><div class="main-clear"></div>
  <button onclick="comments()" class="main-button" style="float: right;">Comments</button><div class="main-clear"></div>
  </span>`;
}

function comments() {
  window.location.replace("https://scratch.mit.edu/users/kpoovakan#comments");
}
