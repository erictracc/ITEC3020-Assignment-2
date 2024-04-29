//A function to calculate the letter grade based on percentage
function calculateLetterGrade() {
    //Declares variables
    let letterGrade;
    //Gets the percentage input value from the HTML document
    let percent = document.getElementById("gradePercent").value;

    //Determines the letter grade based on the percentage range
    if (percent >= 90 && percent <= 100) {
        letterGrade = "A+";
    } else if (percent >= 80 && percent <= 89) {
        letterGrade = "A";
    } else if (percent >= 75 && percent <= 79) {
        letterGrade = "B+";
    } else if (percent >= 70 && percent <= 74) {
        letterGrade = "B";
    } else if (percent >= 65 && percent <= 69) {
        letterGrade = "C+";
    } else if (percent >= 60 && percent <= 64) {
        letterGrade = "C";
    } else if (percent >= 55 && percent <= 59) {
        letterGrade = "D+";
    } else if (percent >= 50 && percent <= 54) {
        letterGrade = "D";
    } else if (percent >= 40 && percent <= 49) {
        letterGrade = "E";
    } else if ((percent >= 1 && percent <= 39) || percent === "0") {
        letterGrade = "F";
    } else {
        //If percentage is not within the valid range, show an alert to the user
        letterGrade = "";
        alert("Cannot calculate: Please provide a valid percentage between 0 and 100.")
    }

    //Sets the calculated letter grade in the corresponding input field
    document.getElementById("correspondingGrade").value = letterGrade;
}