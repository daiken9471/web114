// David Aiken 4/15/26

const quote = document.querySelector("#quote")
const title = document.querySelector("#title")
//someone asked right before we left about how to change the button color so I thought that'd be fun to try too.
const happyBtn = document.querySelector("#happyBtn")
happyBtn.style.backgroundColor = "#ffff00";
happyBtn.style.color = "#4a58f2"
const calmBtn = document.querySelector("#calmBtn")
calmBtn.style.backgroundColor = "#cbc3e3";
calmBtn.style.color = "#fcf4a3"
const angryBtn = document.querySelector("#angryBtn")
angryBtn.style.backgroundColor = "#cc1100";
angryBtn.style.color = "#333333"
const sleepyBtn = document.querySelector("#sleepyBtn")
sleepyBtn.style.backgroundColor = "#301934";
sleepyBtn.style.color = "#d8bfd8"
const StarWarsBtn = document.querySelector("#StarWarsBtn")
StarWarsBtn.style.backgroundColor = "#000000";
StarWarsBtn.style.color = "#ffff00"
//------------------------------------------------------------------------------------------------------------------
const moods = {
    happy: {name: "Happy", image: ("url(happyFaceImage.jpg)"),/*bg: "#ffff00",*/ text: "#4a58f2", quote: "Everything feels bright and fun!", },
    calm: {name: "Calm",image: ("url(calm.jpg)"), bg: "#cbc3e3", text: "#fcf4a3", quote: "Deep breath in. Everything is gonna be alright!"},
    angry: {name: "Angry",image: "none", bg: "#cc1100", text: "#333333", quote: "This I cannot abide!"},
    sleepy: {name: "Sleepy",image: "none", bg: "#301934", text: "#d8bfd8", quote: "Get some rest. You earned it!"},
    StarWars: {name: "StarWars",image: "none", bg: "#000000", text: "#ffff00", quote: "May the force be with you!"}
    
}
//------------------------------------------------------------------------------------------------------------------
function changeMood(moodName){
    const mood = moods[moodName]
    //change the page info
    document.body.style.backgroundImage = mood.image
    document.body.style.backgroundSize = "50%"
    document.body.style.backgroundPosition = "center"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundColor = mood.bg    
    console.log (`${mood.bg}`)
    
    document.body.style.color = mood.text
    //change the message in the quote
    quote.textContent = mood.quote
    //change the title content
    title.textContent = mood.name.toUpperCase()
    
    console.log(`${mood.image}`)
    
    //Testing
    console.log(`mood selected: ${moodName}`)
    console.log(`mood settings: ${mood}`)    
}
//------------------------------------------------------------------------------------------------------------------
function happy(){changeMood("happy")}
function calm(){changeMood("calm")}
function angry(){changeMood("angry")}
function sleepy(){changeMood("sleepy")}
function StarWars(){changeMood("StarWars")}
//------------------------------------------------------------------------------------------------------------------
happyBtn.addEventListener("click", happy)
calmBtn.addEventListener("click", calm)
angryBtn.addEventListener("click", angry)
sleepyBtn.addEventListener("click", sleepy)
StarWarsBtn.addEventListener("click", StarWars)