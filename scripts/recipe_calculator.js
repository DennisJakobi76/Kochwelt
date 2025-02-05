const ingredientsToCalculate = document.getElementsByClassName('count-ingred');
const ingredValues = [];

for (let i = 0; i < ingredientsToCalculate.length; i++) {
    ingredValues.push(ingredientsToCalculate[i].innerHTML);
}

function calculateNeededIngredients(defaultValue) {
    let defaultPortion = defaultValue;
    let newIngredValues = [];

    // process , in input-field

    let portionCount = document.getElementById('count-portion-input').value;

    if (portionCount.toString().includes(',')) {
        portionCount = portionCount.replace(',', '.');
        portionCount = parseFloat(portionCount);
    }

    // process 0 in input-field

    if (portionCount < 1) {
        portionCount = 1;
        document.getElementById('count-portion-input').value = 1;
    }

    for (let j = 0; j < ingredValues.length; j++) {
        newIngredValues.push(
            Math.round((ingredValues[j] / defaultPortion) * portionCount)
        );
        console.log(
            Math.round((ingredValues[j] / defaultPortion) * portionCount)
        );
    }

    for (let z = 0; z < ingredientsToCalculate.length; z++) {
        if (newIngredValues[z] != 0) {
            ingredientsToCalculate[z].innerHTML = newIngredValues[z];
        }
    }
}
