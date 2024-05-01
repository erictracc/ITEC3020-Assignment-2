// Wait for the DOM content to load before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Select the container and generate button
    const custom_container = document.querySelector(".custom-container");
    const generate_button = document.querySelector(".generate-button");

    // Add event listener to the generate button
    generate_button.addEventListener("click", createSquares);

    // Event listener for mouseover on container
    custom_container.addEventListener('mouseover', function(event) {
        const square = event.target;

        // Check if the mouseover target is a box
        if (square.classList.contains("custom-square")) {
            // Remove the box
            square.remove();

            // Check if container has no child elements
            if (custom_container.childElementCount === 0) {
                alert("Last Square Box!");
            }
        }
    });

    // Generate initial boxes
    createSquares();
});


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



// Function to generate boxes
function createSquares() {
    const container = document.querySelector(".custom-container");

    // Generate 100 boxes
    for (let i = 0; i < 100; i++) {
        const squares = document.createElement("div");
        squares.classList.add("custom-square");
        squares.style.backgroundColor = getRandomColour();
        squares.style.border = "thin solid black";
        squares.style.position = "absolute";
        squares.style.top = (Math.floor(Math.random() * 400)) + "px";
        squares.style.left = (Math.floor(Math.random() * 400)) + "px";
        container.appendChild(squares);
    }
}
