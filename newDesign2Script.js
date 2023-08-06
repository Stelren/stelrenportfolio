window.onload = function () {
  var element = document.getElementById("welcomeId");
  element.addEventListener("animationend", welcomehide);

  function welcomehide() {
    element.classList.add("welcomebruh");
    element.classList.remove("welcomemessage");
  }
};
// function myFunction() {
//   var element = document.getElementById("myDIV");
//   element.classList.remove("mystyle");
// }
