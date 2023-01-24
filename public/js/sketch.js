let rows = 12
let cols = 12
const distanceX = 30;
const distanceY = 30;

function setup() {
    createCanvas(displayWidth, displayHeight);
    rows = (displayHeight - 30) / 30;
    cols = (displayWidth - 30 ) / 30;
    background(0);
    noStroke();
    fill(255, 255, 255);
    fullscreen();
}

function draw() {
    background(0, 0, 0, 20);

    for (let r = 1; r <= rows; r++) {
        for (let c = 1; c <= cols; c++) {
            const randomness = mouseX / 60;
            const randomShiftX = random(-randomness, randomness);
            const randomShiftY = random(-randomness, randomness);

            const x = c * distanceX + randomShiftX;
            const y = r * distanceY + randomShiftY;

            ellipse(x, y, 1, 15);
            ellipse(y, x, 15, 1);
        }
    }
}