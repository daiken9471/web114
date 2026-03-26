// David Aiken 3/25/26


let operation = prompt('Would you like to add (+), subtract (-), multiply (*), or divide (/) ? Please enter +, -, *, or /')
operation = operation
let num1 = prompt('What is the first number you\'d like to math with: ')
num1 = parseInt(num1)
let num2 = prompt('What is the second number you\'d like to math with: ')
num2 = parseInt(num2)



switch (operation){
    case '+':
        alert(num1 + num2)
        break
    case "-":
        alert(num1 - num2)
        break
    case "*":
        alert(num1 * num2)
        break
    case "/":
        if (num2 === 0){
            alert('Error: cannot divide by zero')}
        else{
            alert(num1 / num2)}
        break
    default:
        alert('Something went wrong. Reload this page to try again.')}

  
