// David Aiken  4/1/26
"use strict"

let fragile = 0
let inspected = 0
let loaded = 0

let crates
do{
    crates = prompt(`How many crates are you loading?: `)?.trim()}
while (crates === "" || crates === null)

if (crates === undefined){
    alert(`Scan cancelled`)}
   
for (let crateNum = 1; crateNum <= crates; crateNum++){
    if (crateNum % 5 === 0){
        console.log(`Handle with care while loading`)
        fragile += 1}
    else if (crateNum % 2 === 0){
        console.log(`Load crate`)
        loaded += 1}
    else if(crateNum % 2 === 1){
        console.log(`Inspect crate before loading`)
        inspected += 1}}

if (crates !== undefined)
    alert(`All crates scanned!

Fragile crates : ${fragile}
Inspected crates: ${inspected}
Loaded normally: ${loaded}`)



