// David Aiken 4/22/26
"use strict"

const movies = [
    {src: "images/ep4.jpg", alt: "Episode 4", title: "A New Hope"},
    {src: "images/ep5.jpg", alt: "Episode 5", title: "The Empire Strikes Back"},
    {src: "images/ep6.jpg", alt: "Episode 6", title: "Return of the Jedi"}]

let currentIndex = 0  

// select the html elements
const imageElement = document.querySelector("#gallery")
const captionElement = document.querySelector("#caption")
const headingElement = document.querySelector("#gallery-heading")
const titleElement = document.querySelector("#title")

//next and prev buttons
const nextButton = document.querySelector("#next")
const prevButton = document.querySelector("#prev")

function showMovie(index){
    const movie = movies[index]
    imageElement.src = movie.src
    imageElement.alt = movie.alt
    titleElement.textContent = movie.title
    captionElement.textContent = movie.alt    
    headingElement.textContent = `Movie ${index + 1} of ${movies.length}`}
showMovie(currentIndex)

function nextClick(){
    currentIndex++
    if (currentIndex >= movies.length){
        currentIndex = 0}
    showMovie(currentIndex)}

function prevClick(){
    currentIndex--
    if (currentIndex < 0){
        currentIndex = movies.length -1}
    showMovie(currentIndex)}

nextButton.addEventListener("click", nextClick)
prevButton.addEventListener("click", prevClick)