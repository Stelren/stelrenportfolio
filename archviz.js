window.onload = function () {
  var element = document.getElementById("archviz");
  element.addEventListener("click", archvizclick);
  function archvizclick() {
    element.classList.add("activeButton");
  }
};
