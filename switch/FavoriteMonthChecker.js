// David Aiken 3/25/26

let favMonth = prompt('What is your favorite month?: ')
favMonth = favMonth.trim().toLowerCase()

switch (favMonth) {
    case ("january"):
        alert('You love the Winter months!')
        break
    case "february":
        alert('You love the Winter months!')
        break
    case "march":
        alert('You love the Spring months!')
        break
    case "april":
        alert('You love the Spring months!')
        break
    case ("may"):
        alert('You love the Spring months!')
        break
    case "june":
        alert('You love the Summer months!')
        break
    case "july":
        alert('You love the Summer months!')
        break
    case "august": 
        alert('You love the Summer months!')
        break
    case "september":
        alert('You love the fall months!')
        break
    case "october":
        alert('You love the Fall months!')
        break
    case "november":
        alert('You love the Fall months!')
        break
    case "december":
        alert('You love the Winter months!')
        break
    default:
        alert('Please enter a month name.')

}

/*
if (favMonth === "december" || favMonth === "january" || favMonth === "febuary"){
    alert('You love the winter months!')}

else if (favMonth === "march" || favMonth === "april" || favMonth === "may"){
    alert('Spring has sprung!')}

else if (favMonth === "june" || favMonth === "july" || favMonth === "august"){
    alert('You enjoy the summer months!')}

else {
    alert('You enjoy the winter months!')}*/
