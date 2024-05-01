const numbArray = [];

function storedNumbs() {
    let input_Field = document.getElementById("input_num");
    let result_Field = document.getElementById("final_result");

    // Check if the input is a valid number
    if (isNaN(input_Field.value)) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }

    // If a calculation has already been done, reset the array and result
    if (result_Field.textContent !== "") {
        numbArray.length = 0;
        result_Field.textContent = "";
    }

    // If the input is 0, calculate the number of positive and negative numbers
    if (input_Field.value === "0") {
        calculatePosNeg(numbArray);
        return;
    }




    // Add the number to the array and clear the input field
    numbArray[numbArray.length] = input_Field.value;
    input_Field.value = "";
}

// created a function to count the positive and negative numbers
function calculatePosNeg(numbers) {
    let posCount = 0;
    let negCount = 0;
    let result_Field = document.getElementById("final_result");

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negCount++;
        } else {
            posCount++;
        }
    }

    // will solve the amount and print the according sentence
    if (posCount === 1 && negCount !== 1) {
        result_Field.textContent = "You entered " + posCount + " positive number and " + negCount + " negative numbers.";
    } else if (posCount !== 1 && negCount === 1) {
        result_Field.textContent = "You entered " + posCount + " positive numbers and " + negCount + " negative number.";
    } else if (posCount === 1 && negCount === 1) {
        result_Field.textContent = "You entered " + posCount + " positive number and " + negCount + " negative number.";
    } else {
        result_Field.textContent = "You entered " + posCount + " positive numbers and " + negCount + " negative numbers.";
    }

}
