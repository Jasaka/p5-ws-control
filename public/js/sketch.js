let socket;
socket = io.connect();
console.log('socket', socket);

let special = 3;
let sceneOne = 0;
let sceneTwo = 0;
let sceneThree = 0;
let sceneFour = 0;
let sceneFive = 0;

socket.on('special', (specialIndex) => {
    special = parseInt(specialIndex);
    if (special === 0) {
        sceneOne = 0;
        sceneTwo = 0;
        sceneThree = 0;
        sceneFour = 0;
        sceneFive = 0;
    }
    if (special === 2) {
        sceneOne = 2;
        sceneTwo = 2;
        sceneThree = 2;
        sceneFour = 2;
        sceneFive = 2;
    }
});

socket.on('sceneOne', (sceneOneIndex) => {
    sceneOne = parseInt(sceneOneIndex);
});

socket.on('sceneTwo', (sceneTwoIndex) => {
    sceneTwo = parseInt(sceneTwoIndex);
});

socket.on('sceneThree', (sceneThreeIndex) => {
    sceneThree = parseInt(sceneThreeIndex);
});

socket.on('sceneFour', (sceneFourIndex) => {
    sceneFour = parseInt(sceneFourIndex);
});

socket.on('sceneFive', (sceneFiveIndex) => {
    sceneFive = parseInt(sceneFiveIndex);
});


let rows = 12
let cols = 12
const distanceX = 30;
const distanceY = 30;

const shiftStrengths = [30, 10, 2];
const strokeColors = [[122, 122, 122], [198, 198, 198], [255, 255, 255]];
const fillColors = [[122, 122, 122], [198, 198, 198], [255, 255, 255]];
function setup() {
    createCanvas(displayWidth, displayHeight);
    rows = (displayHeight - 30) / 30;
    cols = (displayWidth - 30) / 30;
    background(0);
    noStroke();
    fill(255, 255, 255);
    rectMode(CENTER);
}

function draw() {
    background(0, 0, 0, 20);
    if (special < 3) {
        generateNodes();
    }

}

function generateNodes() {

    for (let r = 1; r <= rows; r++) {
        for (let c = 1; c <= cols; c++) {
            let sceneIndex = 0;
            if ((r * c + 1) % 5 === 0) {
                sceneIndex = sceneFive
            } else if ((r * c + 1) % 4 === 0) {
                sceneIndex = sceneFour
            } else if ((r * c + 1) % 3 === 0) {
                sceneIndex = sceneThree
            } else if ((r * c + 1) % 2 === 0) {
                sceneIndex = sceneTwo
            } else {
                sceneIndex = sceneOne
            }

            const randomness = shiftStrengths[sceneIndex];
            const randomShiftX = random(-randomness, randomness);
            const randomShiftY = random(-randomness, randomness);

            const x = c * distanceX + randomShiftX;
            const y = r * distanceY + randomShiftY;

            if ((r % 2 === 0 && c % 2 !== 0) || (r % 2 !== 0 && c % 2 === 0)) {
                noStroke();
                fill(...fillColors[sceneIndex]);
                rect(x, y, 2, 15);
            } else {
                fill(0, 0, 0);
                stroke(...strokeColors[sceneIndex]);
                strokeWeight(2);
                ellipse(x, y, 10, 15);
            }
        }
    }
}

function pulseNodes() {
    return
}