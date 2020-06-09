function setup() {
    frameRate(30);
    textSize(30);
    textAlign(CENTER);
}

function draw() {
    background(200);
    text(frameCount, width / 2, height / 2);
}