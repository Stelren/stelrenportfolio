window.onload = function () {
  var element = document.getElementById("archViz");
  element.addEventListener("click", archVizClick);
  function archVizClick() {
    document.getElementById("archViz").href = "workArchViz.html";
    document.getElementById("other").classList.remove("activeButton");
    document.getElementById("other").classList.add("topBarButton");
    document.getElementById("3dModels").classList.remove("activeButton");
    document.getElementById("3dModels").classList.add("topBarButton");
    document.getElementById("graphicDesign").classList.remove("activeButton");
    document.getElementById("graphicDesign").classList.add("topBarButton");
    element.classList.add("activeButton");
    element.classList.remove("topBarButton");
  }

  var element2 = document.getElementById("3dModels");
  element2.addEventListener("click", threeDModelsClick);
  function threeDModelsClick() {
    document.getElementById("3dModels").href = "work3dM.html";
    document.getElementById("other").classList.remove("activeButton");
    document.getElementById("other").classList.add("topBarButton");
    document.getElementById("archViz").classList.remove("activeButton");
    document.getElementById("archViz").classList.add("topBarButton");
    document.getElementById("graphicDesign").classList.remove("activeButton");
    document.getElementById("graphicDesign").classList.add("topBarButton");
    element2.classList.add("activeButton");
    element2.classList.remove("topBarButton");
  }

  var element3 = document.getElementById("other");
  element3.addEventListener("click", other);
  function other() {
    document.getElementById("other").href = "workOther.html";
    document.getElementById("3dModels").classList.remove("activeButton");
    document.getElementById("3dModels").classList.add("topBarButton");
    document.getElementById("archViz").classList.remove("activeButton");
    document.getElementById("archViz").classList.add("topBarButton");
    document.getElementById("graphicDesign").classList.remove("activeButton");
    document.getElementById("graphicDesign").classList.add("topBarButton");
    element3.classList.add("activeButton");
    element3.classList.remove("topBarButton");
  }
  var element4 = document.getElementById("graphicDesign");
  element4.addEventListener("click", graphicDesign);
  function graphicDesign() {
    document.getElementById("graphicDesign").href = "workGraphicDesign.html";
    document.getElementById("3dModels").classList.remove("activeButton");
    document.getElementById("3dModels").classList.add("topBarButton");
    document.getElementById("archViz").classList.remove("activeButton");
    document.getElementById("archViz").classList.add("topBarButton");
    document.getElementById("other").classList.remove("activeButton");
    document.getElementById("other").classList.add("topBarButton");
    element4.classList.add("activeButton");
    element4.classList.remove("topBarButton");
  }
};
