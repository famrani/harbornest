$(document).ready(function () {

var slider = document.getElementById("myRange");
var output = document.getElementById("range-value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

