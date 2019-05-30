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
    coal: 0,
    iron: 0,
    copper: 0,
    aluminum: 0,
    tin: 0,
    silver: 0,
    gold: 0,
    tungsten: 0,
    platinum: 0,
    titanium: 0
};


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
    titanium: 100000000000
};
var ressourceLevel = {
    coal: 0,
    iron: 0,
    copper: 0,
    aluminum: 0,
    tin: 0,
    silver: 0,
    gold: 0,
    tungsten: 0,
    platinum: 0,
    titanium: 0
};

var upgradePriceWMult = {
    coal: 0,
	iron: 0,
    copper: 0,
	aluminum: 0,
	tin: 0,
	silver: 0,
    gold: 0,
	tungsten: 0,
	platinum: 0,
    titanium: 0
};

//Actualisation tt les secondes du upgrade price w/ multiplier

var explorationPoints = 0;
var technologyPoints = 0;
var increment = 1;
var technologyPointsPerSecond = 0;


// Variable for stat.
var numExploration = 0;
var totTechPoints = 0;

//Multplier (faster upgrade)
var multiplier = 1;
var gameTime = 0;
var complexe = 1.17;




































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

$("#techButton").click(function(){
	technologyPoints += increment;
    totTechPoints += increment;
	$("#techPD").html(technologyPoints);
});

//Multiplier:
function updatePrice (mat){
    for (var i = 0; i < multiplier; i++) {
        upgradePriceWMult[mat] = updatePrice[mat] * multiplier;
        console.log("update du prix");
    }
}


function changeMultiplier(event) {
    multiplier = event.data.mult;
    $("#buttonMultiplier1").css({
        backgroundColor: 'rgb(169, 169, 169)',
    })
    $("#buttonMultiplier10").css({
        backgroundColor: 'rgb(169, 169, 169)',
    })
    $("#buttonMultiplier100").css({
        backgroundColor: 'rgb(169, 169, 169)',
    })
    $("#buttonMultiplier"+event.data.mult).css({
        backgroundColor: 'red',
    })
    listeDesMateriaux.forEach(updatePrice)
    ;
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

var test1 = 0;
var test2 = 0;
var test3 = 0;
var test4 = 0;
var test5 = 0;

function techUpgrades (incrementvalue,coalPrice,ironPrice,copperPrice,aluminumPrice,tinPrice,silverPrice,goldPrice,tungstenPrice,platinumPrice,titaniumPrice) {
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
                }

}





























//--------------------------------------------------------
//  Upgrade Materials
//--------------------------------------------------------
var matUpString = '<div id="matUp"><button class="functionButton" id="coalUpgrade"> Coal Upgrade<br> <span class="infoClass" id="coalInfo"></span> </button> <span> <br> </span><button class="functionButton" id="ironUpgrade"> Iron Upgrade<br> <span class="infoClass" id="ironInfo"></span> </button> <br><button class="functionButton" id="copperUpgrade"> Copper Upgrade<br> <span class="infoClass" id="copperInfo"></span> </button> <br><button class="functionButton" id="aluminumUpgrade"> Aluminum Upgrade<br> <span class="infoClass" id="aluminumInfo"></span> </button> <br><button class="functionButton" id="tinUpgrade"> Tin Upgrade<br> <span class="infoClass" id="tinInfo"></span> </button> <br><button class="functionButton" id="silverUpgrade"> Silver Upgrade<br> <span class="infoClass" id="silverInfo"></span> </button> <br><button class="functionButton" id="goldUpgrade"> Gold Upgrade<br> <span class="infoClass" id="goldInfo"></span> </button> <br><button class="functionButton" id="tungstenUpgrade"> Tungsten Upgrade<br> <span class="infoClass" id="tungstenInfo"></span> </button> <br><button class="functionButton" id="platinumUpgrade"> Platinum Upgrade<br> <span class="infoClass" id="platinumInfo"></span> </button> <br><button class="functionButton" id="titaniumUpgrade"> Titanium Upgrade<br> <span class="infoClass" id="titaniumInfo"></span> </button> <br></div>';

$("#matUpButton").click(function(){
   $("#displayBoxGBody").html(matUpString) 
});

//Algo: of Upgrades Buttons
function upgradePriceARessourceLevel(event) {
    if (upgradePriceWMult[event.data.material]<= technologyPoints){
        for (var i = 0; i < multiplier; i++) {
            technologyPoints -= upgradePrice[event.data.material];
            $("#techPD").html(technologyPoints); 
            ressourceLevel[event.data.material] ++;
            upgradePrice[event.data.material]   *=  complexe;
            updatePrice(event.data.material);
        }
    }
}

//Display :Button event calling the algorithm
listeDesMateriaux.forEach(
            function(mat) {
                $("#displayBoxGBody").on("click","#"+mat+"Upgrade",{material:mat,mult:multiplier},upgradePriceARessourceLevel);
            }
        );

window.setInterval(
    function (){
        listeDesMateriaux.forEach(
            function(mat) {
                $("#"+mat+"Info").html("LVL: "+ressourceLevel[mat]+"<br>"+" *"+multiplier+"<br>"+"Price: "+ upgradePriceWMult[mat].toExponential(2));
            }
        )
    },1000);




                                                            









































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
var statString ='<div id="statDiv">'+
                    '<p>Total of technology points earned (on this universe): <span id="totTechnologyPointsID"></span></p>'+
                    '<p>Total of exploration points earned (on this universe): <span id="numExplorationID"></span></p>'+
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
                    '<p>Coal Level: <span id="coalLevel"></span></p>'+
                    '<p>Iron Level: <span id="ironLevel"></span></p>'+
                    '<p>Copper Level: <span id="copperLevel"></span></p>'+
                    '<p>Aluminum Level: <span id="aluminumLevel"></span></p>'+
                    '<p>Tin Level: <span id="tinLevel"></span></p>'+
                    '<p>Silver Level: <span id="silverLevel"></span></p>'+
                    '<p>Gold Level: <span id="goldLevel"></span></p>'+
                    '<p>Tungsten Level: <span id="tungstenLevel"></span></p>'+
                    '<p>Platinum Level: <span id="platinumLevel"></span></p>'+
                    '<p>Titanium Level: <span id="titaniumLevel"></span></p>'+
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
