// Select all the elements
const bill = document.getElementById("bill")
const people = document.getElementById('people')
const custom = document.querySelector('#custom')
const btns = document.querySelectorAll('.btn')
const tipPerPerson = document.getElementById('tip_per_person')
const totalPerPerson = document.getElementById('total_per_person')
const reset = document.getElementById('reset')
const errorMessage = document.querySelector('.error_message')


// Declare all global variables
let customValue
let peopleValue
let billValue 
let result


// select the number of people value
people.addEventListener('keyup', function(e) {

    peopleValue = parseInt(e.target.value)
    
    let tipAmount = parseFloat(result / peopleValue)
    let totalAmount = parseFloat((billValue / peopleValue) + tipAmount)

    // if statement to display error message when number of people
    // is zero and display both the tip and total amount when greater
    // than 0

    if(peopleValue === 0) {

        people.style.border = "1px solid rgb(243, 76, 76, 0.7)"
        errorMessage.textContent = "Can't be zero"

    } else if(peopleValue > 0) {

        people.style.border = ""
        errorMessage.innerText = ""
        tipPerPerson.innerText = "$" + tipAmount.toFixed(2)
        totalPerPerson.innerText = "$" + totalAmount.toFixed(2)
        
    }
    
})


// Use forEach method to select all the buttons for select tip %
btns.forEach(btn => btn.addEventListener('click', function() {
    
    let buttons = btn.innerText
    let btnValue = parseFloat(parseInt(buttons) / 100)
    billValue = parseFloat(bill.value)

    result = billValue * btnValue

}))


//  Custom input value for select tip %
function getCustomValue(e) {

    customValue = parseFloat((e.target.value) / 100)
    billValue = parseFloat(bill.value)

    result = billValue * customValue

}

custom.addEventListener('change', getCustomValue)

// Reset button
reset.addEventListener('click', function() {

    bill.value = ''
    people.value = ''
    custom.value = ''

    tipPerPerson.innerHTML = "$0.00"
    totalPerPerson.innerHTML = "$0.00"
})
