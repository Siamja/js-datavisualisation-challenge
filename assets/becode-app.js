/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 

Your name :     
Date :  
Contact information : 

What does this script do ? 
...

*/

// Your scripting goes here...


// creation div + graphique

let currentTable = document.getElementsByTagName('table')[0];

let newDiv = document.createElement("div");
newDiv.id = "graphique1";

currentTable.parentNode.insertBefore(newDiv, currentTable);

//code Dimple du graphique

var svg = dimple.newSvg("#graphique1", 500, 600,);

var data = [
{ "Word":"Hello", "Awesomeness":2000 },
{ "Word":"World", "Awesomeness":3000 }
];
var chart = new dimple.chart(svg, data);
chart.addCategoryAxis("x", "Word");
chart.addMeasureAxis("y", "Awesomeness");
chart.addSeries(null, dimple.plot.bar);
chart.draw();

let arrayCountry = [];
let arrayStats = [];

// Récupérer les pays

let arrayPushCountry = () => { 
  for (i = 0; i < 420; i++) {
    if (isNaN(parseInt(d3.select("#table1").selectAll("tbody").selectAll("td")._groups[0][i].innerText)) && d3.select("#table1").selectAll("tbody").selectAll("td")._groups[0][i].innerText != ":") {
      arrayCountry.push((d3.select("#table1").selectAll("tbody").selectAll("td")._groups[0][i].innerText));
    }
  }

}

// Récupérer les données

let arrayPushStats = () => { 
  for (i = 0; i < 420; i++) {

    if (isNaN(parseFloat(d3.select("#table1").selectAll("tbody").selectAll("td")._groups[0][i].innerText)) == false) {
      arrayStats.push(d3.select("#table1").selectAll("tbody").selectAll("td")._groups[0][i].innerText);

    }
  }
}

let arrayStatsByCountry = [];

let statsByCountry = {
  Pays: "",
  a2002: "",
  b2003: "",
  c2004: "",
  d2005: "",
  e2006: "",
  f2007: "",
  g2008: "",
  h2009: "",
  i2010: "",
  j2011: "",
  k2012: "",
}
let testObject = () => {
  for (i = 0; i < arrayCountry.length; i++) {
    let testNewObj = Object.create(statsByCountry);
    testNewObj.Pays = arrayCountry[i];
    for (y = 0; y < arrayStats.length; y++){
    testNewObj.a2002 = arrayStats[i];
    }
    arrayStatsByCountry.push(testNewObj);
  }
}

arrayPushCountry();
arrayPushStats();
testObject();
console.log(arrayCountry);
console.log(arrayStats);
console.log(arrayCountry[0]);
console.log(arrayStatsByCountry);