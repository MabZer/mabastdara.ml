$(document).ready(function() {
    setTimeout(function() {
        $("#area").removeClass("is-loading");
    }, 100)
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
