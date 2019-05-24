// ##############################################################
// TITRE ie ce que fait le code de ce fichier
// ##############################################################
//
// --------------------------------------------------------------
// Variables globales
// --------------------------------------------------------------

// Quantités de matériaux dont le joueur dispose

var listeDesMateriaux= ["coal","iron","copper","aluminum","tin","silver","gold","tungsten","platinum","titanium"];

var ressource = {
    coal: 0,
    iron: 0,
    copper: 0,
    aluminum: 0,
    tin: 0,
    silver: 0,
    gold: 0,
    tungsten:0,
    platinum: 0,
    titanium: 0,
}

// Quantités de matériaux automatiquement gagné à chaque seconde de jeux

var ressourceIncrementPerSecond = {
    coal: 1,
    iron: 1,
    copper: 0,
    aluminum: 0,
    tin: 0,
    silver: 0,
    gold: 0,
    tungsten:0,
    platinum: 0,
    titanium: 0,
}

// Prix (points de technologie) nécéssaire pour débloquer une ressource

var upgradePrice = {
	coal: 10,
	iron: 100,
    copper: 10000,
	aluminum: 100000,
	tin: 1000000,
	silver: 10000000,
    gold: 100000000,
	tungsten: 1000000000,
	platinum: 10000000000,
    titanium: 100000000000,
}
var ressourceLevel = {
    coal: 0,
    iron: 0,
    copper: 0,
    aluminum: 0,
    tin: 0,
    silver: 0,
    gold: 0,
    tungsten:0,
    platinum: 0,
    titanium: 0,   
}



var explorationPoints = 0;
var technologyPoints = 0;
var increment = 1;
var technologyPointsPerSecond = 0;

// Variable for stat.
var totTechnologyPoints = 0;
var numExploration = 0;

//Multplier (faster upgrade)
var multiplier = 1;

var gameTime = 0;



//########################################################
// MENU ZONE
//########################################################

// Update PD (Point Display).
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

$("#techButton").click(function(){
	technologyPoints = technologyPoints + increment;
	$("#techPD").html(technologyPoints);
});

//Multiplier:

function changeMultiplier(event) {
    multiplier = event.data.mult;
    $("#buttonMultiplier1").css({
        backgroundColor: 'rgb(169, 169, 169)',
    })
    $("#buttonMultiplier1").css({
        backgroundColor: 'rgb(169, 169, 169)',
    })
    $("#buttonMultiplier1").css({
        backgroundColor: 'rgb(169, 169, 169)',
    })
    $("#buttonMultiplier"+event.data.mult).css({
        backgroundColor: 'red',
    });
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
var techUpString = '<p id="upgrade">  1 </p>';
$("#techUpButton").click(function(){
   $("#displayBoxGBody").html(techUpString)
});



//--------------------------------------------------------
//  Upgrade Materials
//--------------------------------------------------------
var matUpString = '<p id="upgrade">  2 </p>';

$("#matUpButton").click(function(){
   $("#displayBoxGBody").html(matUpString) 
});


//88888888888888888888888888888888888888888888888888888888
//Algo: of Upgrades Buttons

function upgradePriceARessourceLevel(event) {
    if (upgradePrice[event.data.material]*multiplier <= technologyPoints){
        technologyPoints -= upgradePrice[event.data.material];
        $("#techPD").html(technologyPoints); 
        ressourceLevel[event.data.material] += multiplier;
        upgradePrice[event.data.material]   *=  1.17 * multiplier;
        $("#"+event.data.material+"Level").html(ressourceLevel[event.data.material]); 
    }
}

//Display :Button event calling the algorithm
listeDesMateriaux.forEach(
            function(mat) {
                $("#"+mat+"Upgrade").click({material:mat,mult:multiplier},upgradePriceARessourceLevel);
            }
        )
//88888888888888888888888888888888888888888888888888888888

//--------------------------------------------------------
//  Univers Upgrade
//--------------------------------------------------------
var univUpString = '<p id="upgrade">  3 </p>';
$("#univUpButton").click(function(){
   $("#displayBoxGBody").html(univUpString) 
});



//--------------------------------------------------------
//  Statistics
//--------------------------------------------------------
var statString = '<p>Total of technology points earned (on this universe): <span id="totTechnologyPointsID"></span></p> <p>Total of exploration points earned (on this universe): <span id="numExplorationID"></span></p> <p>Technology points per second: <span id="technologyPointsPerSecondID"></span></p> <p>Game time: <span id="timePlayed"></span></p> <p>Coal per second: <span id="coalPerSecond"></span></p> <p>Iron per second: <span id="ironPerSecond"></span></p> <p>Copper per second: <span id="copperPerSecond"></span></p> <p>Aluminum per second: <span id="aluminumPerSecond"></span></p> <p>Tin per second: <span id="tinPerSecond"></span></p> <p>Silver per second: <span id="silverPerSecond"></span></p> <p>Gold per second: <span id="goldPerSecond"></span></p> <p>Tungsten per second: <span id="tungstenPerSecond"></span></p> <p>Platinum per second: <span id="platinumPerSecond"></span></p> <p>Titanium per second: <span id="titaniumPerSecond"></span></p> <p>Coal Level: <span id="coalLevel"></span></p> <p>Iron Level: <span id="ironLevel"></span></p> <p>Copper Level: <span id="copperLevel"></span></p> <p>Aluminum Level: <span id="aluminumLevel"></span></p> <p>Tin Level: <span id="tinLevel"></span></p> <p>Silver Level: <span id="silverLevel"></span></p> <p>Gold Level: <span id="goldLevel"></span></p> <p>Tungsten Level: <span id="tungstenLevel"></span></p> <p>Platinum Level: <span id="platinumLevel"></span></p> <p>Titanium Level: <span id="titaniumLevel"></span></p>';

$("#statButton").click(function(){
   $("#displayBoxGBody").html(statString) 
});

$("#totTechnologyPointsID").html(totTechnologyPoints);
$("#numExplorationID").html(numExploration);
$("#technologyPointsPerSecondID").html(technologyPointsPerSecond);

//--------------------------------------------------------
// Mat upgrade
//--------------------------------------------------------



//88888888888888888888888888888888888888888888888888888888
//Algo: Increment per second for each ressource and the display refresh

window.setInterval(
    function (){
        listeDesMateriaux.forEach(
            function(mat) {
                ressource[mat] += ressourceIncrementPerSecond[mat] * ressourceLevel[mat] ;
                $("#"+mat+"PD").html(ressource[mat]);
            }
        )
    },1000);

//8888888888888888888888888888888888888888888888888888888

//Game time

window.setInterval(
    function(){
        gameTime++
        $("#timePlayed").html(gameTime);
    },1000);

