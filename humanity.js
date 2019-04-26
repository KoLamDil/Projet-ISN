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
var technologyPoints = 1000000000000;
var increment = 1;
var technologyPointsPerSecond = 0;

// Variable for stat.
var totTechnologyPoints = 0;
var numExploration = 0;

//Multplier (faster upgrade)
var multiplier = 1;


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

$("#techPD").html(technologyPoints);
$("#exploPD").html(explorationPoints);

//########################################################
// HEARDER G ZONE
//########################################################

//########################################################
// BODY D ZONE
//########################################################

$("#tp").click(function(){
	technologyPoints = technologyPoints + increment;
	$("#techPointsPrompter").html(technologyPoints);
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
$("#univButton").click(function(){
   $("#displayBoxGBody").html(univUpString) 
});



//--------------------------------------------------------
//  Statistics
//--------------------------------------------------------
var statString = '<p id="upgrade">  4 </p>';

$("#statButton").click(function(){
   $("#displayBoxGBody").html(statString) 
});

$("#totTechnologyPointsID").html(totTechnologyPoints);
$("#numExplorationID").html(numExploration);
$("#technologyPointsPerSecondID").html(technologyPointsPerSecond);

//########################################################
//MATH 
//########################################################

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
