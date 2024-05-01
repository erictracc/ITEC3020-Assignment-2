//A function to check if a number is a palindrome or not
function checkPalindrome() {
    //Gets the input element and the output element from the HTML document
    const inputValue = document.getElementById("input_num");
    const outputValue = document.getElementById("final_result");

    //Regular expression to validate input as a positive number
    const reg = new RegExp(/^\d+(\.\d+)?$/);

    //Checks if the input value is not a valid positive number
    if (isNaN(inputValue.value) || !reg.test(inputValue.value)) {
        // Alert the user to enter a valid positive number
        alert("Try again: Please enter a valid positive number.")
        // Clear the output text content
        outputValue.textContent = "";
    } else {
        //Initializes variables to reverse the input number
        let reverseNum = 0;
        let temp = inputValue.value;
        // Loop to reverse the input number
        for (let i = 0; temp > 0; i++) {
            reverseNum = (reverseNum * 10) + (temp % 10);
            temp = Math.floor(temp / 10);
        }

        //Displays the result if the input number is a palindrome or not
        outputValue.textContent = "Is the number a palindrome? Final Answer: " + (inputValue.value == reverseNum ? "yes it is!" : "no it isn't!");
    }
}
