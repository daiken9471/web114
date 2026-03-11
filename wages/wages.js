// David Aiken 3/11/26
"use strict"
// I learned how to use a while loop to to keep prompting them until they confirm yes
// just in case they enter the wrong amount and need to change it.
// That's why I had to begin with initialzing some variables to 0.
// Thankfully Javascript is very similar to Python and I'm also taking that language.
// My biggest issue so far is just remembering to use the keyword "let" when I initialize my variables.
let hourlyWage = 0
let hoursWorked = 0

let wageResult = false
while (wageResult == false){
    hourlyWage = parseInt(prompt(`Enter your hourly wage: $`).trim())
    wageResult = confirm(`You entered $${hourlyWage} per hour. Is that correct?`)}

let hoursResult = false
while (!hoursResult){
    hoursWorked = parseInt(prompt(`How many hours did you work this week?: `).trim())
    hoursResult = confirm(`You entered ${hoursWorked} hours. Is that correct?`)}

// I decdied to challenege myself to accurately calculate overtime
const taxRate = 0.10
const overTimeRate = 0.5 // an additional 50%
let overTimeHours = 0
let overtimePay = 0
if (hoursWorked > 40){
    overTimeHours = hoursWorked - 40
    overtimePay = overTimeRate*overTimeHours*hourlyWage}
let grossPay = ((hourlyWage * hoursWorked) + overtimePay)
let taxes = grossPay*taxRate
let netPay = grossPay-taxes

console.log(`${"-".repeat(6)} Weekly Earning Statment ${"-".repeat(6)} \n
Hourly Wage: $${hourlyWage.toFixed(2)} 
Hours Worked: ${hoursWorked}
Overtime Hours Worked: ${overTimeHours} \n
Gross Pay: $${grossPay.toFixed(2)}
$${overtimePay.toFixed(2)} of Gross Pay was Overtime Pay
Taxes: ${taxRate*100}% \n
Net Pay: $${netPay.toFixed(2)} \n
${"-".repeat(37)}`)

if (hoursWorked > 40){
    console.log(`You worked overtime this week!`)}
else if (hoursWorked == 40){
    console.log(`You worked exactly 40 hours.`)}
else{
    console.log(`No overtime this week.`)}

if (netPay > 800){
    console.log(`Great paycheck this week!`)}
else{
    console.log(`Keep working toward a bigger paycheck!`)}