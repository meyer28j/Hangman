console.log("File hangmanCanvas.js loaded successfully");

function drawGradient(canvas) {
    // retrieve canvas to draw gradient in
    let context = canvas.getContext("2d");

    // construct gradient
    let gradient = context.createLinearGradient(0, 0, 0, 200); // gradient moves bottom up
    gradient.addColorStop(1, "#00a2e8"); // from blue (blends with sky image)
    gradient.addColorStop(0, "white"); // to white (blends with document background)

    // fill canvas with gradient
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, 200); // x, y, w, h
}

var canvasGradient = document.getElementById("gradient");
drawGradient(canvasGradient);

