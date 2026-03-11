// David Aiken 3/11/26
"use strict"


let hourlyWage = parseInt(prompt(`Enter your hourly wage: $`).trim())
confirm(`You entered $${hourlyWage} per hour. Is that correct?`)
let hoursWorked = parseInt(prompt(`How many hours did you work this week?: `).trim())
confirm(`You entered ${hoursWorked} hours. Is that correct?`)
let grossPay = hourlyWage * hoursWorked
const taxRate = 0.10
let taxes = grossPay*taxRate
let netPay = grossPay-taxes
console.log(`Weekly earnings: $${netPay.toFixed(2)}`)

if (hoursWorked > 40){
    console.log(`You worked overtime this week!`)}
else if (hoursWorked == 40){
    console.log(`You worked exactly 40 hours.`)}
else{
    console.log(`No overtime this week.`)}