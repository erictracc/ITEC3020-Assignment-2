function calculateLetterGrade() {
    let percent = document.getElementById("percent").value;
    let letterGrade;

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
        letterGrade = "";
        alert("Cannot calculate: Please provide a valid percentage between 0 and 100.")
    }

    document.getElementById("letterGrade").value = letterGrade;
}