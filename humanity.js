// ##############################################################
// TITRE ie ce que fait le code de ce fichier
// ##############################################################
//
// --------------------------------------------------------------
// Variables globales
// --------------------------------------------------------------

// Quantités de matériaux dont le joueur dispose

var listeDesMateriaux = ["coal", "iron", "copper", "aluminum", "tin", "silver", "gold", "tungsten", "platinum", "titanium"];

var ressource = {
        coal: 0,    iron: 0,    copper: 0,      aluminum: 0,    tin: 0,
        silver: 0,  gold: 0,    tungsten: 0,    platinum: 0,    titanium: 0
};

// Prix (points de technologie) nécéssaire pour débloquer une ressource

var upgradePrice = {
        coal: 10,               iron: 100,              copper: 10000,      aluminum: 100000,
        tin: 1000000,           silver: 10000000,       gold: 100000000,    tungsten: 1000000000,
        platinum: 10000000000, titanium: 100000000000
};

var ressourceLevel = {
        coal: 0,    iron: 0,    copper: 0,      aluminum: 0,    tin: 0,
        silver: 0,  gold: 0,    tungsten: 0,    platinum: 0,    titanium: 0
};

var upgradePriceWMult  = {
        coal: 0,    iron: 0,    copper: 0,      aluminum: 0,    tin: 0,
        silver: 0,  gold: 0,    tungsten: 0,    platinum: 0,    titanium: 0
};

//Actualisation tt les secondes du upgrade price w/ multiplier

var explorationPoints = 0;
var technologyPoints = 0;
var increment = 1;

// Variable for stat.
var numExploration = 0;
var totTechPoints = 0;

//Multplier (faster upgrade)
var multiplier = 1;
var gameTime = 0;
var complexe = 1.17;

var puisMult = Math.pow(complexe, multiplier);
var intermed = 0;

var techPointNeedForOneExploPoints = 10000;


function exploration () {
    ressource.coal = 0;
    ressource.iron = 0;
    ressource.copper = 0;
    ressource.aluminum = 0;
    ressource.tin = 0;
    ressource.silver = 0;
    ressource.gold = 0;
    ressource.tungsten = 0;
    ressource.platinum = 0;
    ressource.titanium = 0;
    
    upgradePrice.coal = 0;
    upgradePrice.iron = 0;
    upgradePrice.copper = 0;
    upgradePrice.aluminum = 0;
    upgradePrice.tin = 0;
    upgradePrice.silver = 0;
    upgradePrice.gold = 0;
    upgradePrice.tungsten = 0;
    upgradePrice.platinum = 0;
    upgradePrice.titanium = 0;
    
    ressourceLevel.coal = 0;
    ressourceLevel.iron = 0;
    ressourceLevel.copper = 0;
    ressourceLevel.aluminum = 0;
    ressourceLevel.tin = 0;
    ressourceLevel.silver = 0;
    ressourceLevel.gold = 0;
    ressourceLevel.tungsten = 0;
    ressourceLevel.platinum = 0;
    ressourceLevel.titanium = 0;
    
    upgradePriceWMult.coal = 0;
    upgradePriceWMult.iron = 0;
    upgradePriceWMult.copper = 0;
    upgradePriceWMult.aluminum = 0;
    upgradePriceWMult.tin = 0;
    upgradePriceWMult.silver = 0;
    upgradePriceWMult.gold = 0;
    upgradePriceWMult.tungsten = 0;
    upgradePriceWMult.platinum = 0;
    upgradePriceWMult.titanium = 0;
    numExploration++ ;
    explorationPoints += Math.round((totTechPoints / techPointNeedForOneExploPoints))
    technologyPoints = 0;
    increment = 1;
    totTechPoints = 0;
    
}


//########################################################
// MENU ZONE
//########################################################

// Update Point Display.
// Initialisation
listeDesMateriaux.forEach(
            function(mat) {
                $("#"+mat+"PD").html(ressource["mat"]);
            }
        );

//########################################################
// HEADER D ZONE
//########################################################

if(technologyPoints < 1000000){
	$("#techPD").html(technologyPoints);
}
else{
	$("#techPD").html(technologyPoints.toExponential(2));
}
$("#exploPD").html(explorationPoints);


//########################################################
// HEARDER G ZONE
//########################################################

//########################################################
// BODY D ZONE
//########################################################

$("#planets").click(function(){
	technologyPoints += increment;
    totTechPoints += increment;
    if(technologyPoints < 1000000){
        intermed = Math.round((technologyPoints + 0.00001) * 100) / 100
        $("#techPD").html(intermed);
         }
    else{
	    $("#techPD").html(technologyPoints.toExponential(2));
       }
    if (totTechPoints == 100000){
        $("#explorationButtonDiv").html('<button id="explorationButton">Explore !!!</button>')
        console.log("Oui")
}
});
function changeMultiplier(event) {
    multiplier = event.data.mult;
    $("#buttonMultiplier1").css({backgroundColor: 'rgb(169, 169, 169)',});
    $("#buttonMultiplier10").css({backgroundColor: 'rgb(169, 169, 169)', });
    $("#buttonMultiplier100").css({backgroundColor: 'rgb(169, 169, 169)',});
    $("#buttonMultiplier"+event.data.mult).css({backgroundColor: 'red',});
    puisMult = Math.pow(complexe,event.data.mult)
    listeDesMateriaux.forEach(updatePrice);

}

$("#buttonMultiplier1").click({mult:1},changeMultiplier);
$("#buttonMultiplier10").click({mult:10},changeMultiplier);
$("#buttonMultiplier100").click({mult:100},changeMultiplier);


//########################################################
// BODY G ZONE
//########################################################

//--------------------------------------------------------
// Thechnologies Upgrade
//--------------------------------------------------------

var techUpString = [];
$("#techUpButton").click(function(){
   $("#displayBoxGBody").html(techUpString)
});

var test1 = 0;
var test2 = 0;
var test3 = 0;
var test4 = 0;
var test5 = 0;

function techUpButtonCreator (name,upgradenumber,incrementvalue,coalPrice,ironPrice,copperPrice,aluminumPrice,tinPrice,silverPrice,goldPrice,tungstenPrice,platinumPrice,titaniumPrice){
    
    var coalPriceOut = 0;
    var ironPriceOut = 0;
    var copperPriceOut = 0;
    var aluminumPriceOut = 0;
    var tinPriceOut = 0;
    var silverPriceOut = 0;
    var goldPriceOut = 0;
    var tungstenPriceOut = 0;
    var platinumPriceOut = 0;
    var titaniumPriceOut = 0;
    var incrementValueOut = 0;
    
    if (coalPrice < 1000000){
        coalPriceOut = coalPrice ;    
    }
    else{
        coalPriceOut = coalPrice.toExponential(2)
    }
    
    
    if (ironPrice < 1000000){
        ironPriceOut = ironPrice ;    
    }
    else{
        ironPriceOut = ironPrice.toExponential(2)
    }
    
    
     if (copperPrice < 1000000){
        copperPriceOut = copperPrice ;    
    }
    else{
        copperPriceOut = copperPrice.toExponential(2)
    }
    
    
    if (aluminumPrice < 1000000){
        aluminumPriceOut = aluminumPrice ;    
    }
    else{
        aluminumPriceOut = aluminumPrice.toExponential(2)
    }
    
    if (tinPrice < 1000000){
        tinPriceOut = tinPrice ;    
    }
    else{
        tinPriceOut = tinPrice.toExponential(2)
    }
    
    
    if (silverPrice < 1000000){
        silverPriceOut = silverPrice ;    
    }
    else{
        silverPriceOut = silverPrice.toExponential(2)
    }
    
    
    if (goldPrice < 1000000){
        goldPriceOut = goldPrice ;    
    }
    else{
        goldPriceOut = goldPrice.toExponential(2)
    }

    
    if (tungstenPrice < 1000000){
        tungstenPriceOut = tungstenPrice ;    
    }
    else{
        tungstenPriceOut = tungstenPrice.toExponential(2)
    }
    
    if (platinumPrice < 1000000){
        platinumPriceOut = platinumPrice ;    
    }
    else{
        platinumPriceOut = platinumPrice.toExponential(2)
    }

    
    if (titaniumPrice < 1000000){
        titaniumPriceOut = titaniumPrice ;    
    }
    else{
        titaniumPriceOut = titaniumPrice.toExponential(2)
    }
    
    if (incrementvalue < 1000000){
        incrementValueOut = incrementvalue ;    
    }
    else{
        incrementValueOut = incrementvalue.toExponential(2)
    }
    techUpString.push(
        '<div id="upgradeDiv'+upgradenumber+'"><button onclick=\'techUpgrades ("'+name+'",'+upgradenumber+','+incrementvalue+','+coalPrice+','+ironPrice+','+copperPrice+','+aluminumPrice+','+tinPrice+','+silverPrice+','+goldPrice+','+tungstenPrice+','+platinumPrice+','+titaniumPrice +')\' class="upgradeButton" id="upgradeNumber'+upgradenumber+'">'+ name +
        '<br>'+
    '<pre><div class="prixInfo">'+
        '<span class="coalPrice"><img src="sprite/coalSpriteDroite.png">:'+coalPriceOut+'  </span>'+
        '<span class="ironPrice"><img src="sprite/ironSpriteDroite.png">:'+ironPriceOut+'  </span>'+
        '<span class="copperPrice"><img src="sprite/copperSpriteDroite.png">:'+copperPriceOut+'  </span>'+
        '<span class="aluminumPrice"><img src="sprite/aluminumSpriteDroite.png">:'+aluminumPriceOut+'  </span>'+
        '<span class="tinPrice"><img src="sprite/tinSpriteDroite.png">:'+tinPriceOut+'  </span>'+
        '<span class="silverPrice"><img src="sprite/silverSpriteDroite.png">:'+silverPriceOut+'  </span>'+
        '<span class="goldPrice"><img src="sprite/goldSpriteDroite.png">:'+goldPriceOut+'  </span>'+
        '<span class="tungstenPrice"><img src="sprite/tungstenSpriteDroite.png">:'+tungstenPriceOut+'  </span>'+
        '<span class="platinumPrice"><img src="sprite/platinumSpriteDroite.png">:'+platinumPriceOut+'  </span>'+
        '<span class="titaniumPrice"><img src="sprite/titaniumSpriteDroite.png">:'+titaniumPriceOut+'  </span>'+
    '</div>'+
    '<br>'+
    '<div id="infoBonus">Bonus : +' +incrementValueOut+'<img src="sprite/TechpointDroite.png"></div></pre>'+
'</button>');
    
}
    

function techUpgrades (name,upgradenumber,incrementvalue,coalPrice,ironPrice,copperPrice,aluminumPrice,tinPrice,silverPrice,goldPrice,tungstenPrice,platinumPrice,titaniumPrice) {
        if (coalPrice <= ressource.coal && ironPrice <= ressource.iron){
            test1 = 1;
        }
        if (copperPrice <= ressource.copper && aluminumPrice <= ressource.aluminum){
            test2 = 1;
        }
        if (tinPrice <= ressource.tin && silverPrice <= ressource.silver){
            test3 = 1;
        }
        if (goldPrice <= ressource.gold && tungstenPrice <= ressource.tungsten){
            test4 = 1;
        }
        if (platinumPrice <= ressource.platinum && titaniumPrice <= ressource.titanium){
            test5 = 1;
        }
        var testall = test1 + test2 + test3 + test4 + test5;
        if (testall == 5){
            ressource.coal -= coalPrice; 
            ressource.iron -= ironPrice; 
            ressource.copper -= copperPrice; 
            ressource.aluminum -= aluminumPrice; 
            ressource.tin -= tinPrice; 
            ressource.silver -= silverPrice; 
            ressource.gold -= goldPrice; 
            ressource.tungsten -= tungstenPrice; 
            ressource.platinum -= platinumPrice;
            ressource.titanium -= titaniumPrice;
            increment += incrementvalue;
            test1 = 0;
            test2 = 0;
            test3 = 0;
            test4 = 0;
            test5 = 0;
            $("#upgradeDiv"+upgradenumber).html(" ")
            techUpString[upgradenumber-1] = "";
            console.log(upgradenumber + name)
                }

}


// Upgrade creator
techUpButtonCreator ("Fire",1,1,10,0,0,0,0,0,0,0,0,0)
techUpButtonCreator ("Cooking",2,1,1000,0,0,0,0,0,0,0,0,0)
techUpButtonCreator ("Iron Age",3,2,1000,100,0,0,0,0,0,0,0,0)
techUpButtonCreator ("Iron Tools",4,5,500,1000,0,0,0,0,0,0,0,0)
techUpButtonCreator ("Iron Machines",5,10,0,5000,0,0,0,0,0,0,0,0)


//--------------------------------------------------------
//  Upgrade Materials
//--------------------------------------------------------
var matUpString = '<div id="matUp"> <table> <tr> <td> <button class="functionButton" id="coalUpgrade"> Coal Upgrade <br> <span class="infoClass" id="coalInfo"></span> <img src="sprite/Techpoint.png"> </button> </td> <td> <button class="functionButton" id="ironUpgrade"> Iron Upgrade <br> <span class="infoClass" id="ironInfo"></span> <img src="sprite/Techpoint.png"> </button> </td> </tr> <tr> <td> <button class="functionButton" id="copperUpgrade"> Copper Upgrade <br> <span class="infoClass" id="copperInfo"></span> <img src="sprite/Techpoint.png"> </button> </td> <td> <button class="functionButton" id="aluminumUpgrade"> Aluminum Upgrade <br> <span class="infoClass" id="aluminumInfo"></span> <img src="sprite/Techpoint.png"> </button> </td> </tr> <tr> <td> <button class="functionButton" id="tinUpgrade"> Tin Upgrade <br> <span class="infoClass" id="tinInfo"></span> <img src="sprite/Techpoint.png"> </button> </td> <td> <button class="functionButton" id="silverUpgrade"> Silver Upgrade <br> <span class="infoClass" id="silverInfo"></span> <img src="sprite/Techpoint.png"> </button> </td> </tr> <tr> <td> <button class="functionButton" id="goldUpgrade"> Gold Upgrade <br> <span class="infoClass" id="goldInfo"></span> <img src="sprite/Techpoint.png"> </button> </td> <td> <button class="functionButton" id="tungstenUpgrade"> Tungsten Upgrade <br> <span class="infoClass" id="tungstenInfo"></span> <img src="sprite/Techpoint.png"> </button> </td> </tr> <tr> <td> <button class="functionButton" id="platinumUpgrade"> Platinum Upgrade <br> <span class="infoClass" id="platinumInfo"></span> <img src="sprite/Techpoint.png"> </button> </td> <td> <button class="functionButton" id="titaniumUpgrade"> Titanium Upgrade <br> <span class="infoClass" id="titaniumInfo"></span> <img src="sprite/Techpoint.png"> </button> <td> </tr> </table></div>';

$("#matUpButton").click(function(){
   $("#displayBoxGBody").html(matUpString) 
});


window.setInterval(
    function (){
        listeDesMateriaux.forEach(
            function(mat) {
                if (upgradePriceWMult[mat] < 1000000){
                $("#"+mat+"Info").html("LvL: "+ressourceLevel[mat]+"<br>"+" Multiplier : * "+multiplier+"<br>"+"Price: "+ Math.round((upgradePriceWMult[mat] + 0.00001) * 100) / 100);}
                else{
                $("#"+mat+"Info").html("LvL: "+ressourceLevel[mat]+"<br>"+" Multiplier : * "+multiplier+"<br>"+"Price: "+ upgradePriceWMult[mat].toExponential(2));
                }
            }
        )
    },1000);


//--------------------------------------------------------
//  Univers Upgrade
//--------------------------------------------------------
var univUpString = '<p id="univUpgrade">  3 </p>';
$("#univUpButton").click(function(){
   $("#displayBoxGBody").html(univUpString) 
});


//--------------------------------------------------------
//  Statistics
//--------------------------------------------------------
var statString ='<div id="statDiv">'+
                    '<p>Total of technology points earned (on this universe): <span id="totTechnologyPointsID"></span></p>'+
                    '<p>Total of exploration points earned : <span id="numExplorationID"></span></p>'+
                    '<p>Technology points per second: <span id="technologyPointsPerSecondID"></span></p>'+
                    '<p>Game time: <span id="timePlayed"></span></p>'+
                    '<p>Coal per second: <span id="coalPerSecond"></span></p>'+
                    '<p>Iron per second: <span id="ironPerSecond"></span></p>'+
                    '<p>Copper per second: <span id="copperPerSecond"></span></p>'+
                    '<p>Aluminum per second: <span id="aluminumPerSecond"></span></p>'+
                    '<p>Tin per second: <span id="tinPerSecond"></span></p>'+
                    '<p>Silver per second: <span id="silverPerSecond"></span></p>'+
                    '<p>Gold per second: <span id="goldPerSecond"></span></p>'+
                    '<p>Tungsten per second: <span id="tungstenPerSecond"></span></p>'+
                    '<p>Platinum per second: <span id="platinumPerSecond"></span></p>'+
                    '<p>Titanium per second: <span id="titaniumPerSecond"></span></p>'+
            '</div>';

$("#statButton").click(function(){
   $("#displayBoxGBody").html(statString) 
});


// $("#technologyPointsPerSecondID").html(technologyPointsPerSecond);

window.setInterval(
    function (){
        listeDesMateriaux.forEach(
            function(mat) {
                $("#"+mat+"PerSecond").html(ressourceLevel[mat]);
                $("#"+mat+"PD").html(ressource[mat]);
                $("#totTechnologyPointsID").html(totTechPoints);
                $("#numExplorationID").html(numExploration);
            }
        )
    },1000);

//Game time
window.setInterval(
    function(){
        gameTime++
        $("#timePlayed").html(gameTime);
    },1000);

//--------------------------------------------------------
// Materials upgrade
//--------------------------------------------------------

//Algo: Increment per second for each ressource and the display refresh

window.setInterval(
    function (){
        listeDesMateriaux.forEach(
            function(mat) {
                ressource[mat] += ressourceLevel[mat] ;
                $("#"+mat+"PD").html(ressource[mat]);
            }
        )
    },1000);


function updatePrice (mat){
    upgradePriceWMult[mat] = upgradePrice[mat] * puisMult;
}
window.setInterval (
    listeDesMateriaux.forEach (function (mat){
        upgradePriceWMult[mat] = upgradePrice[mat] * puisMult;
    }),1000);




//Algo: of Upgrades Buttons
function upgradePriceARessourceLevel(event) {
    if ( (upgradePrice[event.data.material] * puisMult)<= technologyPoints){
        technologyPoints -= upgradePrice[event.data.material] * puisMult; 
        upgradePrice[event.data.material] *=  complexe * puisMult ;
            if(technologyPoints < 1000000){
                intermed = Math.round((technologyPoints + 0.00001) * 100) / 100
                $("#techPD").html(intermed);
                }
            else{
	           $("#techPD").html(technologyPoints.toExponential(2));
            } 
        ressourceLevel[event.data.material] += multiplier;
        updatePrice(event.data.material);
        }
    }

//Display :Button event calling the algorithm
listeDesMateriaux.forEach(
            function(mat) {
                $("#displayBoxGBody").on("click","#"+mat+"Upgrade",{material:mat,mult:multiplier},upgradePriceARessourceLevel);
                if (upgradePriceWMult[mat] < 1000000){
                $("#"+mat+"Info").html("LvL: "+ressourceLevel[mat]+"<br>"+" Multiplier : * "+multiplier+"<br>"+"Price: "+ Math.round((upgradePriceWMult[mat] + 0.00001) * 100) / 100);}
                else{
                $("#"+mat+"Info").html("LvL: "+ressourceLevel[mat]+"<br>"+" Multiplier : * "+multiplier+"<br>"+"Price: "+ upgradePriceWMult[mat].toExponential(2));
                }
                
            }
        );
