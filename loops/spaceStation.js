// David Aiken  4/1/26
"use strict"

let crates;
do{
    crates = prompt(`How many crates are you loading?: `)?.trim()}
while (crates === "" || crates === null)

if (crates === undefined){
    console.log(`Scan cancelled`)
}else

for (let crateNum = 1; crateNum <= crates; crateNum++){
    if (crateNum % 5 === 0){
        console.log(`Handle with care`)}
    else if (crateNum % 2 === 0){
        console.log(`Load crate`)}
    else if(crateNum % 2 === 1){
        console.log(`Inspect crate`)}
}

