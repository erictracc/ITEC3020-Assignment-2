// Wait for the DOM content to load before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Select the container and generate button
    const container = document.querySelector(".custom-container");
    const generateButton = document.querySelector(".generate-button");

    // Add event listener to the generate button
    generateButton.addEventListener("click", generateBoxes);

    // Event listener for mouseover on container
    container.addEventListener('mouseover', function(event) {
        const box = event.target;
        // Check if the mouseover target is a box
        if (box.classList.contains("custom-box")) {
            // Remove the box
            box.remove();
            // Check if container has no child elements
            if (container.childElementCount === 0) {
                alert("Last child!");
            }
        }
    });

    // Generate initial boxes
    generateBoxes();
});

// Function to generate boxes
function generateBoxes() {
    const container = document.querySelector(".custom-container");

    // Generate 100 boxes
    for (let i = 0; i < 100; i++) {
        const box = document.createElement("div");
        box.classList.add("custom-box");
        box.style.backgroundColor = getRandomColour();
        box.style.border = "thin solid black";
        box.style.position = "absolute";
        box.style.top = (Math.floor(Math.random() * 400)) + "px";
        box.style.left = (Math.floor(Math.random() * 400)) + "px";
        container.appendChild(box);
    }
}

// Function to generate random colour
function getRandomColour() {
    const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let colour = "";

    // Generate random colour code
    for (let i = 0; i < 6; i++) {
        colour += hexValues[Math.floor(Math.random() * 16)];
    }

    return "#" + colour;
}