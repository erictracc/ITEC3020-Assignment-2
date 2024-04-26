function checkPalindrome() {
    const input = document.getElementById("input-number");
    const output = document.getElementById("result");

    const reg = new RegExp(/^\d+(\.\d+)?$/);

    if (isNaN(input.value) || !reg.test(input.value)) {
        alert("Try again: Please enter a valid positive number.")
        output.textContent = "";
    } else {
        let reverse = 0;
        let temp = input.value;
        for (let i = 0; temp > 0; i++) {
            reverse = (reverse * 10) + (temp % 10);
            temp = Math.floor(temp / 10);
        }

        output.textContent = "Is the number a palindrome? Answer: " + (input.value == reverse ? "yes" : "no");
    }
}