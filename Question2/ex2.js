const numberArray = [];

function storeNumbers() {
    let inputField = document.getElementById("number-input");
    let resultField = document.getElementById("result");

    // Check if the input is a valid number
    if (isNaN(inputField.value)) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }

    // If a calculation has already been done, reset the array and result
    if (resultField.textContent !== "") {
        numberArray.length = 0;
        resultField.textContent = "";
    }

    // If the input is 0, calculate the number of positive and negative numbers
    if (inputField.value === "0") {
        calculatePositiveNegative(numberArray);
        return;
    }




    // Add the number to the array and clear the input field
    numberArray[numberArray.length] = inputField.value;
    inputField.value = "";
}

function calculatePositiveNegative(numbers) {
    let positiveCount = 0;
    let negativeCount = 0;
    let resultField = document.getElementById("result");

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeCount++;
        } else {
            positiveCount++;
        }
    }

    if (positiveCount === 1 && negativeCount !== 1) {
        resultField.textContent = "You entered " + positiveCount + " positive number and " + negativeCount + " negative numbers.";
    } else if (positiveCount !== 1 && negativeCount === 1) {
        resultField.textContent = "You entered " + positiveCount + " positive numbers and " + negativeCount + " negative number.";
    } else if (positiveCount === 1 && negativeCount === 1) {
        resultField.textContent = "You entered " + positiveCount + " positive number and " + negativeCount + " negative number.";
    } else {
        resultField.textContent = "You entered " + positiveCount + " positive numbers and " + negativeCount + " negative numbers.";
    }
}
