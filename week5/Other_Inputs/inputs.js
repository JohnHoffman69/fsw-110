var form = document.personalInformation
console.log(form)

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault()
    var firstName = document.personalInformation.firstName.value 
    lastName = document.personalInformation.lastName.value 
    age = document.personalInformation.age.value
    gender = document.personalInformation.gender.value 
    country = document.personalInformation.country.value 
    var diet = []

    if(document.personalInformation["Vegetarian"].checked) {
        diet.push(document.getElementById("Vegetarian").value)
    }
    if(document.personalInformation["Kosher"].checked) {
        diet.push(document.getElementById("Kosher").value)
    }
    if(document.personalInformation["Lactose Free"].checked) {
        diet.push(document.getElementById("Lactose Free").value)
    }

    if(document.personalInformation["None"].checked) {
        diet.push(document.getElementById("None").value)
    }
    
    alert (`
        First name: ${firstName} 
        Last name: ${lastName} 
        Age: ${age} 
        Gender: ${gender}
        Country: ${country}
        Dietary Restrictions: ${diet}`)
            
});



    
