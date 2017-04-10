var dogs=["Ed's Classic Wiener", "Ed's Above Average Wiener", "The Jabroni Coney", "The 'Dirty' Dog", "Señior Salsa Dog"];

function processDogs(){
  var listItem = "";
  for (var i=0; i<5; i++) {
    listItem="item" + (i + 1)   
    document.getElementById(listItem).innerHTML = dogs[i];   
  }
}

window.addEventListener("load", processDogs);