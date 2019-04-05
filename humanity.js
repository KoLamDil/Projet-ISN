/* List objects
var NOMOBJECT={
    NomPrototype1: "ValeurPrototype1",
    NomPrototype2: "ValeurPrototype2",
    NomPrototype3: "ValeurPrototype3",
}


*/
var planet = {
    rank: "1",
    population: "10",
    populationMax: "10000000000",
    woodDensity: "1",
    stoneDensity: "1",
    ironDensity: "1",
    carboneDensity: "1",
    petroleumDensity: "1",
    leadDensity: "1",
}
var numExploration = 0;
var explorationPoints = 0;
var thecnologyPoints = 0;

function popByClick () {
    planet.population = planet.population + 1;
    return planet.population;
}

function clickTechButton (){
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




if (planet.populationMax = planet.population) {
    
}
/*All prompter*/
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
