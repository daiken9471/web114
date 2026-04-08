// David Aiken

let user = prompt(`Enter you name: `)
let entryCount = 0
let total = 0
let weeklyGas = 0

function calcGasAvg(){
    weeklyGas = parseFloat(prompt(`Enter a gas total. Enter -1 to quit.`))

    while (weeklyGas !== -1){
        total = total + weeklyGas
        entryCount += 1
        weeklyGas = parseFloat(prompt(`Enter a gas total. Enter -1 to quit.`))}        

    if (entryCount > 0){
        return (total/entryCount)}        
    else{
        return 0}
    }

let gas = calcGasAvg()
if (entryCount === 0){
    alert(`No gas totals were entered.`)}
else{
    alert(`${user}'s average weekly gas bill is: $${gas.toFixed(2)}
        Total: $${total.toFixed(2)} 
        Entries: ${entryCount}`)
}


