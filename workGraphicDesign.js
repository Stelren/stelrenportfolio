window.onload = function () {
  var element = document.getElementById("archViz");
  element.addEventListener("click", archVizClick);
  function archVizClick() {
    document.getElementById("archViz").href = "workArchViz.html";
  }

  var element2 = document.getElementById("3dModels");
  element2.addEventListener("click", threeDModelsClick);
  function threeDModelsClick() {
    document.getElementById("3dModels").href = "work3dM.html";
  }

  var element3 = document.getElementById("other");
  element3.addEventListener("click", other);
  function other() {
    document.getElementById("other").href = "workOther.html";
  }
  var element4 = document.getElementById("graphicDesign");
  element4.addEventListener("click", graphicDesign);
  function graphicDesign() {
    document.getElementById("graphicDesign").href = "workGraphicDesign.html";
  }
};
