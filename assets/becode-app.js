/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 

Your name :     
Date :  
Contact information : 

What does this script do ? 
...

*/

// Your scripting goes here...


//création de la div qui contiendra le graph et l'insert dans le HTML:
let divGraphique1 = document.createElement("div");
let x = document.getElementById("mw-content-text");
let table1 = document.getElementById("table1");
x.insertBefore(divGraphique1,table1);
divGraphique1.setAttribute("id","divTable1");

//récupération des données et création d'un tableau:

//source des données de table1m
let tbody = table1.getElementsByTagName("tbody");
let tr = tbody[0].getElementsByTagName("tr");

//tableau de données:
let donnees=[];
let fonctionTableau=()=>{
    for (i=1;i<tr.length;i++){
        let pays=[];
        let th = tr[i].getElementsByTagName("th");
        let div = th[0].getElementsByTagName("div");
        let number = div[0].innerHTML;
        pays.push(number);
        let td = tr[i].getElementsByTagName("td");
            for (y=0;y<td.length;y++){
                let contenu = td[y].innerHTML;
                pays.push(contenu);
            }
        donnees.push(pays);
    }
}
fonctionTableau();

// Création du dimple
let svg = dimple.newSvg("#divTable1", 640, 600);

let data = [];
for (i=0;i<donnees.length;i++){
    for (let y=2002;y<2013;y++){
        let dataDetail = {"Année":y, "Infractions":donnees[i][y-2000], "Pays":donnees[i][1]};
        if(dataDetail.Infractions != ':'){
            data.push(dataDetail);
        }
    }
}

let chart = new dimple.chart(svg, data);
chart.addCategoryAxis("x", "Année");
chart.addMeasureAxis("y", "Infractions");
chart.addSeries("Pays", dimple.plot.line);
chart.addLegend(60, 10, 500, 120, "right");
chart.setBounds('20px', "150px", "80%", "70%"); 
chart.draw();