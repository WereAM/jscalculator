const result = document.querySelector('#result')

//clear all the different variable
function toClear(b){
    console.log(b)
    result.value = ''
}


/*function toClear(b){
    console.log(b)
    if(b === 'Cl'){
        result.value = ''
    }
    else if(b === 'Del'){
        console.log(b)
        const array = result.value.split('')
        array.pop()
        result.value = array.join('')
        console.log(array)
    }
}*/

//clear a single number
function toDelete(b){
    console.log(b)
    const array = result.value.split('')
    array.pop()
    result.value = array.join('')
    console.log(array)
}

//click on a number to add to the display
//function appendNumber(number)
function calcNumbers(a){
    result.value += a
    console.log(a)
}

//click on an operation
function chooseOperation(operation){

}

//take values inside the calculator and display results
function compute(){

}

//update output values
function updateDisplay(){

}