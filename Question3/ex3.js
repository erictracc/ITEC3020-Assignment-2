//A function to check if a number is a palindrome or not
function checkPalindrome() {
    //Gets the input element and the output element from the HTML document
    const input = document.getElementById("input-number");
    const output = document.getElementById("result");

    //Regular expression to validate input as a positive number
    const reg = new RegExp(/^\d+(\.\d+)?$/);

    //Checks if the input value is not a valid positive number
    if (isNaN(input.value) || !reg.test(input.value)) {
        // Alert the user to enter a valid positive number
        alert("Try again: Please enter a valid positive number.")
        // Clear the output text content
        output.textContent = "";
    } else {
        //Initializes variables to reverse the input number
        let reverse = 0;
        let temp = input.value;
        // Loop to reverse the input number
        for (let i = 0; temp > 0; i++) {
            reverse = (reverse * 10) + (temp % 10);
            temp = Math.floor(temp / 10);
        }

        //Displays the result if the input number is a palindrome or not
        output.textContent = "Is the number a palindrome? Answer: " + (input.value == reverse ? "yes" : "no");
    }
}
