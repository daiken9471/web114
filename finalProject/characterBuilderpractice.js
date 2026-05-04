// David Aiken 4/29/26
"use strict"

const quote = document.querySelector("#quote")
const title = document.querySelector("#title")

//----------------------------------------------------------------------------------------------------------------
// CLASSES -------------------------------------------------------------------------------------------------------
const barbarianButton = document.querySelector("#barbarianButton")
barbarianButton.style.backgroundImage = ("url(images/barbarianImage.jpg)");
barbarianButton.style.backgroundSize = "100%"
barbarianButton.style.backgroundPosition = "center"
barbarianButton.style.backgroundRepeat = "no-repeat"
barbarianButton.style.color = "#ffffff"
barbarianButton.style.backgroundColor = "#00000000"

const bardButton = document.querySelector("#bardButton")
bardButton.style.backgroundImage = ("url(images/bardImage.png)");
bardButton.style.backgroundSize = "100%"
bardButton.style.backgroundPosition = "center"
bardButton.style.backgroundRepeat = "no-repeat"
bardButton.style.color = "#ffffff"
bardButton.style.backgroundColor = "#00000000"

const clericButton = document.querySelector("#clericButton")
clericButton.style.backgroundImage = ("url(images/clericImage.webp)");
clericButton.style.backgroundSize = "100%"
clericButton.style.backgroundPosition = "center"
clericButton.style.backgroundRepeat = "no-repeat"
clericButton.style.color = "#ffffff"
clericButton.style.backgroundColor = "#00000000"

const paladinButton = document.querySelector("#paladinButton")
paladinButton.style.backgroundImage = ("url(images/paladinImage.png)");
paladinButton.style.backgroundSize = "100%"
paladinButton.style.backgroundPosition = "center"
paladinButton.style.backgroundRepeat = "no-repeat"
paladinButton.style.color = "#ffffff"
paladinButton.style.backgroundColor = "#00000000"

const rogueButton = document.querySelector("#rogueButton")
rogueButton.style.backgroundImage = ("url(images/rogueImage.jpeg)");
rogueButton.style.backgroundSize = "100%"
rogueButton.style.backgroundPosition = "center"
rogueButton.style.backgroundRepeat = "no-repeat"
rogueButton.style.color = "#ffffff"
rogueButton.style.backgroundColor = "#00000000"

const wizardButton = document.querySelector("#wizardButton")
wizardButton.style.backgroundImage = ("url(images/wizardImage.jpeg)");
wizardButton.style.backgroundSize = "100%"
wizardButton.style.backgroundPosition = "center"
wizardButton.style.backgroundRepeat = "no-repeat"
wizardButton.style.color = "#ffffff"
wizardButton.style.backgroundColor = "#00000000"
//------------------------------------------------------
const classes = {
    barbarian: {name: "barbarian", image: ("url(images/barbarianBackground.webp)"),bg: "#2e0501", text: "#d3d3d3", quote: "Rage!", },
    bard: {name: "bard",image: ("url(images/bardBackground.jpg)"), bg: "#d7707e", text: "#ffffff", quote: "Entertain and delight"},
    cleric: {name: "cleric",image: ("url(images/clericBackground.jpg)"), bg: "#ffffff", text: "#333333", quote: "Heal the sick and injured"},
    paladin: {name: "paladin",image: ("url(images/paladinBackground.jpeg)"), bg: "#575757", text: "#d4af37", quote: "Champion of justice"},
    rogue: {name: "rogue",image: ("url(images/rogueBackground.jpeg)"), bg: "#000000", text: "#a6a6a6", quote: "Steal from the rich and give to the poor... or to yourself?"},
    wizard: {name: "wizard",image: ("url(images/wizardBackground.webp)"), bg: "#0d0138", text: "#ffffff", quote: "Magic requires much study and practice"},
}        
//------------------------------------------------------
function changeClass(className){
    const characterClass = classes[className]    
    document.body.style.backgroundImage = characterClass.image
    document.body.style.backgroundSize = "contain"    
    document.body.style.backgroundPosition = "center"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.backgroundColor = characterClass.bg        
    document.body.style.color = characterClass.text
    quote.textContent = characterClass.quote
    title.textContent = characterClass.name.toUpperCase()}
//------------------------------------------------------
function barbarian(){changeClass("barbarian")}
function bard(){changeClass("bard")}
function cleric(){changeClass("cleric")}
function paladin(){changeClass("paladin")}
function rogue(){changeClass("rogue")}
function wizard(){changeClass("wizard")}
//------------------------------------------------------
barbarianButton.addEventListener("click", barbarian)
bardButton.addEventListener("click", bard)
clericButton.addEventListener("click", cleric)
paladinButton.addEventListener("click", paladin)
rogueButton.addEventListener("click", rogue)
wizardButton.addEventListener("click", wizard)

//--------------------------------------------------------------------------------------------------------------------
// RACES--------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------
// STATS -----------------------------------------------------------------------------------------------------------
let totalPoints = 15
let totalStrength = 10
let totalDexterity = 10
let totalConstitution = 10
let totalIntelligence = 10
let totalWisdom = 10
let totalCharisma = 10

/*const strengthButton = document.querySelector("#strengthButton")
strengthButton.style.backgroundColor = "#545454";
strengthButton.style.color = "#ffffff"

const dexterityButton = document.querySelector("#dexterityButton")
dexterityButton.style.backgroundColor = "#545454";
dexterityButton.style.color = "#ffffff"

const constitutionButton = document.querySelector("#constitutionButton")
constitutionButton.style.backgroundColor = "#545454";
constitutionButton.style.color = "#ffffff"

const intelligenceButton = document.querySelector("#intelligenceButton")
intelligenceButton.style.backgroundColor = "#545454";
intelligenceButton.style.color = "#ffffff"

const wisdomButton = document.querySelector("#wisdomButton")
wisdomButton.style.backgroundColor = "#545454";
wisdomButton.style.color = "#ffffff"

const charismaButton = document.querySelector("#charismaButton")
charismaButton.style.backgroundColor = "#545454";
charismaButton.style.color = "#ffffff"*/
//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------
strengthButton.addEventListener("click", function(event){
    let adjustStrength = parseInt(prompt(`how much would you like to +-: `))
    totalStrength += adjustStrength
    event.target.textContent = `strength = ${totalStrength}`
})



dexterityButton.addEventListener("click", dexterity)
constitutionButton.addEventListener("click", constitution)
intelligenceButton.addEventListener("click", intelligence)
wisdomButton.addEventListener("click", wisdom)
charismaButton.addEventListener("click", charisma)
//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------