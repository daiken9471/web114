// David Aiken 3/23/26


answer1 = prompt('what is 2 + 2 ?')
if (answer1 === 4){
    console.log('Good job!')}
else {
    console.log('YOU ABSOLUTE RUBE!!! HOW COULD YOU NOT KNOW THIS!?')}

answer2 = prompt('How are you today?')
if (answer2.toLowerCase() === 'good'){
    console.log('Nice. Keep it up.')}
else{
    console.log('Listen, I was just trying to be polite. Please don\'t make this awkward.')}

alert('Think of a number between 1 and 10')
if (confirm('is 3 is the number you were thinking? Okay for yes / Cancel for no')){
    console.log('Impressed?')}
else{
    console.log('Well, I tried. I\'m not a mind reader ya know?')}

let answer4 = false
answer4 = confirm('Starwars is pretty great, right?')
while (answer4 == false){
    alert('I\'m not okay with your answer. Let\'s try again.')
    answer4 = confirm('Starwars is pretty great, right?')
console.log('thank you')}
    