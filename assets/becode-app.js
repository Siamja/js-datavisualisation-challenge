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