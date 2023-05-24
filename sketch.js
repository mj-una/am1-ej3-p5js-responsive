// 12.4.23

let entX, entY, mvX, mvY;

let colA, colB, colF;

let img, vsb;

function preload() {
    img = loadImage("imagen.png");
}

function setup() {
    createCanvas(400, 500);
    image(img, 0, 0);

    colorMode(HSL, 100, 100, 100, 100);
   
    vsb = true;

    //frameRate(30);
}

function draw() {
    if (vsb) {
        image(img, 0, 0);
    } else {
        // eje x
        mvX = mouseX - entX;
        if (mvX >= width / 1.5) mvX = width / 1.5;
        if (mvX <= -width / 1.5) mvX = -width / 1.5;
        mvX = map(mvX, -width / 1.5, width / 1.5, 0, 100);
    
        // eje y
        mvY = mouseY - entY;
        if (mvY >= height / 2) mvY = height / 2;
        if (mvY <= -height / 2) mvY = -height / 2;
        mvY = map(mvY, -height / 2, height / 2, 100, 0);
        
        // colores
        colA = mvX - 40.8334;
        if (colA <= 0) colA += 100;

        colB = mvX - 42.7778;
        if (colB <= 0) colB += 100;

        colF = 50 - mvX;
        if (colF <= 0) colF = -colF;

        background(10.5555 + colF, 77, 84);

        stroke(37.7777, 21, 10);
        strokeJoin(ROUND);
        strokeWeight(1.5);

        // cuadrado base
        fill(50 + colF, 51, 19);
        quad(
            79, 388,    // vA
            173, 333,   // vB
            302, 375,   // vC
            209, 432    // vD
        );
            
        // triangulo fondo
        fill(38.8888 + colF, 12, 45);
        triangle(
            173, 333,   // vB
            302, 375,   // vC
            400 * (0.4769 + 0.003962 * mvY),
            500 * (0.1892 - 0.000584 * mvY) // vPu    **
        );

        // triangulo izquierda
        fill(29.4444 + colF, 7, 35);
        triangle(
            79, 388,    // vA
            173, 333,   // vB
            400 * (0.4769 - 0.006388 * mvY),
            500 * (0.1892 + 0.000816 * mvY) // vPi    *
        );

        // triangulo derecha
        fill(44.7222 + colF, 32, 35);
        triangle(
            302, 375,   // vC
            209, 432,   // vD
            400 * (0.4769 + 0.007512 * mvY),
            500 * (0.1892 + 0.002296 * mvY) // vPd    *
        );

        // triangulo frente volador
        fill(41.6666 + colF, 26, 46);
        triangle(
            400 * (0.1975 - 0.00025 * mvY),
            500 * (0.776 - 0.0078 * mvY), // vAf    *
            400 * (0.5225 - 0.00055 * mvY),
            500 * (0.864 - 0.00792 * mvY), // vDf    *
            400 * (0.4769 + 0.003962 * mvY),
            500 * (0.1892 - 0.000584 * mvY) // vPu    **
        );

        strokeWeight(400 * 0.005);

        // triangulo amarillo izq
        fill(colA, 94, 53);
        triangle(
            400 * (0.1893 + 0.002814 * mvY),
            500 * (0.3166 + 0.004588 * mvY), // bO    **
            400 * (0.1118 + 0.002814 * mvY),
            500 * (0.2966 + 0.004588 * mvY), // bI    *
            400 * (0.1768 + 0.002814 * mvY),
            500 * (0.1426 + 0.004588 * mvY) // pO    **
        );

        // triangulo amarillo der
        fill(colB, 73, 42);
        triangle(
            400 * (0.1893 + 0.002814 * mvY),
            500 * (0.3166 + 0.004588 * mvY), // bO    **
            400 * (0.2493 + 0.002814 * mvY),
            500 * (0.2846 + 0.004588 * mvY), // bD    *
            400 * (0.1768 + 0.002814 * mvY),
            500 * (0.1426 + 0.004588 * mvY) // pO    **
        );

        noStroke();
        fill(230);
        rect(0, 0, 500 * 0.12, 500 * 0.032);
        fill(0);
        textSize(500 * 0.024);
        textAlign(CENTER);
        text("   ", 500 * 0.056, 500 * 0.024);
        textAlign(RIGHT);
        text(Math.floor(mvX), 500 * 0.046, 500 * 0.024);
        textAlign(LEFT);
        text(Math.floor(mvY), 500 * 0.066, 500 * 0.024);
    }
}

function mousePressed() {
    if (0 <= mouseX && mouseX <= width && 0 <= mouseY && mouseY <= height) {
        entX = mouseX;
        entY = mouseY;
        vsb = false;
        return false;
    }
}

function mouseReleased() {
    setup();
    return false;
}

