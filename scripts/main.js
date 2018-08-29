function clear(){
  document.getElementById("clTake").innerHTML = "";
  document.getElementById("ltTake").innerHTML = "";
  document.getElementById("wlTake").innerHTML = "";
  document.getElementById("lmTake").innerHTML = "";
  document.getElementById("mlTake").innerHTML = "";
  document.getElementById("deTake").innerHTML = "";
  document.getElementById("wTake").innerHTML = "";
}
/*
Large-Size Liquor
*/
function crystaLiquor(){
  var cltake = "$14,942";
  document.getElementById("clTake").innerHTML = "Take = " + cltake;
  document.getElementById("ltTake").innerHTML = "";
  document.getElementById("wlTake").innerHTML = "";
  document.getElementById("lmTake").innerHTML = "";
  document.getElementById("mlTake").innerHTML = "";
  document.getElementById("deTake").innerHTML = "";
  document.getElementById("wTake").innerHTML = "";
}
function liquorTown(){
  var lttake = "$13,882";
  document.getElementById("ltTake").innerHTML = "Take = " + lttake;
  document.getElementById("clTake").innerHTML = "";
  document.getElementById("wlTake").innerHTML = "";
  document.getElementById("lmTake").innerHTML = "";
  document.getElementById("mlTake").innerHTML = "";
  document.getElementById("deTake").innerHTML = "";
  document.getElementById("wTake").innerHTML = "";
}
function wilsonLiquor(){
  var wltake = "$9,862";
  document.getElementById("wlTake").innerHTML = "Take = " + wltake;
}
/*
Medium-Size Liquor
*/
function liquorMart(){
  var lmtake = "$8,048";
  document.getElementById("lmTake").innerHTML = "Take = " + lmtake;
}
function marketLiquor(){
  var mltake = "$5,450";
  document.getElementById("mlTake").innerHTML = "Take = " + mltake;
}
function drunkenEagle(){
  var detake = "$8,478";
  document.getElementById("deTake").innerHTML = "Take = " + detake;
}
/*
Small-Size Liquor
*/
function woodfortLiquor(){
  var wtake = "$2,277";
  document.getElementById("wTake").innerHTML = "Take = " + wtake;
}
