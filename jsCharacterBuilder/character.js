// David Aiken 3/4/26
// Let's build a fantasy character

"use strict"

alert(`Welcome to the Adventure Realm! Let's create your hero!`)

const characterName = prompt(`What is your charcter's name?: `)
const characterAge = prompt(`What is your character's age?: `)
const pet = prompt(`What kind of pet does ${characterName} have?: `, "dragon, wolf, spider, etc")
const superPower = prompt(`What is ${characterName}'s super power?: `, "flight, invisibility, pyromancy, etc")
const likesFighting = confirm(`Does ${characterName} like fighting monsters?: `)
alert(`Gathering magic for ${characterName}... almost ready!`)
alert(`${"=".repeat(20)} 
       Name: ${characterName}
       age: ${characterAge}
       Pet: ${pet}
       Superpower: ${superPower}
       Monster Fighter: ${likesFighting ? "Yes" : "No"}       
       In a faraway land, ${characterName} rides a mighty ${pet}, wielding the 
       incredible power of ${superPower}! 
       Also you are ${characterAge} and will be ${+characterAge+20} in 20 years.
       The realm awaits your legend...
${"=".repeat(20)}`)
