var ressources = {
	wood: 0,
	stone: 0,
	iron: 0,
	carbone: 0,
	petroleum: 0,
	lead: 0,
	steel: 0, 
}

var price = {
	woodUnlock: 100,
	stoneUnlock: 1000,
	ironUnlock: 10000,
	carboneUnlock: 100000,
	steelUnlock: 1000000,
	petroleumUnlock: 10000000,
	plasticUnlock: 100000000,
	leadUnlock: 1000000000,
}

var numExploration = 0;
var explorationPoints = 0;
var technologyPoints = 0;
var increment = 1;

$("#techPointsPrompter").html(technologyPoints);
$("#tp").click(function(){
	technologyPoints = technologyPoints + increment;
	$("#techPointsPrompter").html(technologyPoints);
});





























/*function clickTechButton (){
    document.getElementById("displayBoxGLink").innerHTML = "<p id='headerDisplayBox'>Technologies :<br/><hr width='80%' color='black'> </p>";
}
function clickUpgradesButton (){
    document.getElementById("displayBoxGLink").innerHTML ="<p id='headerDisplayBox'>Upgrades :<br/><hr width='80%' color='black'> </p>";
}
function clickCharacButton (){
    document.getElementById("displayBoxGLink").innerHTML = "<p id='headerDisplayBox'>Planet Characteristics :<br/><hr width='80%' color='black'> </p>";
}
function clickStatButton (){
    document.getElementById("displayBoxGLink").innerHTML = '<p id="headerDisplayBox">Statistics :
                                                <br/>
													<hr width="80%" color="black">
                                                </p>
                                                <p id="planet.rankDisplay"> </p>
                                                <p id="planet.populationDisplay"> </p>
                                                <p id="planet.populationMaxDisplay"> </p>
                                                <p id="planet.woodDensityDisplay"></p>
                                                <p id="planet.stoneDensityDisplay"></p>
                                                <p id="planet.carboneDensityDisplay"></p>
                                                <p id="planet.ironDensityDisplay"></p>
                                                <p id="planet.petroleumDensityDisplay"></p>
                                                <p id="planetNumDisplay"></p>';
}
    
}
All prompter
document.getElementById("planet.rankDisplay").innerHTML = "<span>Rank :" + planet.rank;
document.getElementById("planet.populationDisplay").innerHTML = "Actual Population :" + planet.population;
document.getElementById("planet.populationMaxDisplay").innerHTML = "Population Maximum :" + planet.populationMax;
document.getElementById("planet.woodDensityDisplay").innerHTML = "Planet Density in Wood :" + planet.woodDensity;
document.getElementById("planet.stoneDensityDisplay").innerHTML = "Planet Density in Stone :" + planet.stoneDensity;
document.getElementById("planet.carboneDensityDisplay").innerHTML = "Planet Density in Carbone :" + planet.carboneDensity;
document.getElementById("planet.ironDensityDisplay").innerHTML = "Planet Density in Iron :" + planet.ironDensity;
document.getElementById("planet.petroleumDensityDisplay").innerHTML = "Planet Density in Petroleum :" + planet.petroleumDensity;
document.getElementById("planetNumDisplay").innerHTML = "Planet : " + numExploration;
document.getElementById("populationDisplay").innerHTML = planet.population + " Humans";*/
