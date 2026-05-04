// David Aiken 4/29/26
"use strict"

const quote = document.querySelector("#quote")
const title = document.querySelector("#title")
let points = 15
let strength = 10
let dexterity = 10
let constitution = 10
let intelligence = 10
let wisdom = 10
let charisma = 10

// CLASS BUTTONS
// most of this could have gone on the css page since these buttons dont change
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
// the rest of the classes code is mostly modeled after the "moods" assignment we did
const classes = {
    barbarian: {name: "barbarian", image: ("url(images/barbarianBackground.webp)"),bg: "#2e0501", text: "#d3d3d3", quote: "Rage!", },
    bard: {name: "bard",image: ("url(images/bardBackground.jpg)"), bg: "#d7707e", text: "#ffffff", quote: "Entertain and delight"},
    cleric: {name: "cleric",image: ("url(images/clericBackground.jpg)"), bg: "#ffffff", text: "#333333", quote: "Heal the sick and injured"},
    paladin: {name: "paladin",image: ("url(images/paladinBackground.jpeg)"), bg: "#575757", text: "#d4af37", quote: "Champion of justice"},
    rogue: {name: "rogue",image: ("url(images/rogueBackground.jpeg)"), bg: "#000000", text: "#a6a6a6", 
        quote: "Steal from the rich and give to the poor... or to yourself?"},
    wizard: {name: "wizard",image: ("url(images/wizardBackground.webp)"), bg: "#0d0138", text: "#ffffff", 
        quote: "Magic requires much study and practice"}}        

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

function barbarian(){changeClass("barbarian")}
function bard(){changeClass("bard")}
function cleric(){changeClass("cleric")}
function paladin(){changeClass("paladin")}
function rogue(){changeClass("rogue")}
function wizard(){changeClass("wizard")}

barbarianButton.addEventListener("click", barbarian)
bardButton.addEventListener("click", bard)
clericButton.addEventListener("click", cleric)
paladinButton.addEventListener("click", paladin)
rogueButton.addEventListener("click", rogue)
wizardButton.addEventListener("click", wizard)


// RACES
function resetStats(){ //to reset stats upon changing race so that toggling races doesn't give infinite bonuses.
    points = 15, strength = 10, dexterity = 10, constitution = 10, intelligence = 10, wisdom = 10, charisma = 10
    pointsButton.textContent = `Points Available: ${points}`
    strengthButton.textContent = `Strength = ${strength}`
    dexterityButton.textContent = `Dexterity = ${dexterity}`
    constitutionButton.textContent = `Constitution = ${constitution}`
    intelligenceButton.textContent = `Intelligence = ${intelligence}`
    wisdomButton.textContent = `Wisdom = ${wisdom}`
    charismaButton.textContent = `Charisma = ${charisma}`}

// I didn't expcet to be able to put a whole switch statement in an EventListener but here we are.
race.addEventListener("click", function(event){ // This gets the dropbox's current selection and adjusts stats accordingly
    let race = document.querySelector("#race")    
    switch (race.value){
        case 'dwarf':
            resetStats()
            constitution += 2    
            constitutionButton.textContent = `Constitution = ${constitution}`
            raceQuote.textContent = `Dwarves get +2 constitution`
            break
        case "elf":
            resetStats()
            dexterity += 2
            dexterityButton.textContent = `Dexterity = ${dexterity}`
            raceQuote.textContent = `Elves get +2 dexterity`
            break
        case "human":
            resetStats()
            points += 2
            pointsButton.textContent = `Points Available: ${points}`
            raceQuote.textContent = `Humans get +2 points to represent their vesatility`
            break
        case "orc":
            resetStats()
            strength += 2
            strengthButton.textContent = `Strength = ${strength}`
            raceQuote.textContent = "Orcs get +2 strength"
            break}})

/* STAT BUTTONS
This was where I watched the video you provided us about EventListeners and was able to consolodate a lot.
I could probably put all this inside just 1 EventListener wth a switch statement for what button is being clicked 
but this code works and I don't wanna fix what ain't broke. That'd prbably be the same-ish # of lines of code anyways. */
strengthButton.addEventListener("click", function(event){
    let adjustStr = parseInt(prompt(`how much would you like to +-: `))
    if (adjustStr <= points){
        strength += adjustStr
        points -= adjustStr
        event.target.textContent = `Strength = ${strength}`
        pointsButton.textContent = `Points Available: ${points}`}})
dexterityButton.addEventListener("click", function(event){
    let adjustDex = parseInt(prompt(`how much would you like to +-: `))
    if (adjustDex <= points){
        dexterity += adjustDex
        points -= adjustDex
        event.target.textContent = `Dexterity = ${dexterity}`
        pointsButton.textContent = `Points Available: ${points}`}})
constitutionButton.addEventListener("click", function(event){
    let adjustCon = parseInt(prompt(`how much would you like to +-: `))
    if (adjustCon <= points){
        constitution += adjustCon
        points -= adjustCon
        event.target.textContent = `Constitution = ${constitution}`
        pointsButton.textContent = `Points Available: ${points}`}})
intelligenceButton.addEventListener("click", function(event){
    let adjustInt = parseInt(prompt(`how much would you like to +-: `))
    if (adjustInt <= points){
        intelligence += adjustInt
        points -= adjustInt
        event.target.textContent = `Intelligence = ${intelligence}`
        pointsButton.textContent = `Points Available: ${points}`}})
wisdomButton.addEventListener("click", function(event){
    let adjustWis = parseInt(prompt(`how much would you like to +-: `))
    if (adjustWis <= points){
        wisdom += adjustWis
        points -= adjustWis
        event.target.textContent = `Wisdom = ${wisdom}`
        pointsButton.textContent = `Points Available: ${points}`}})
charismaButton.addEventListener("click", function(event){
    let adjustCha = parseInt(prompt(`how much would you like to +-: `))
    if (adjustCha <= points){
        charisma += adjustCha
        points -= adjustCha
        event.target.textContent = `Charisma = ${charisma}`
        pointsButton.textContent = `Points Available: ${points}`}})


function buildCharacter(){}