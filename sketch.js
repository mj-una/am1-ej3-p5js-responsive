// martin julio
// 25-4-23
// ejercicio 3 movimiento en p5js version responsive
// informatica aplicada 1 - catedra bedoian 
// basado en obra de yakov chernikhov

let anc, alc, mrg;

let entX, entY, mvX, mvY;

let colA, colB, colF;

let img, vsb;

function preload() {
    img = loadImage("imagen.png");
}

function setup() {

    if (windowWidth * 5 > windowHeight * 4) {
        mrg = Math.trunc(windowHeight / 40 + 10);
        alc = Math.trunc(windowHeight - mrg * 2);
        anc = Math.trunc(alc * 0.8);    
        document.getElementById("encaaa").style.marginBottom = "0px";
    }
    else {
        mrg = Math.trunc(windowWidth / 40 + 10);
        anc = Math.trunc(windowWidth - mrg * 2);
        alc = Math.trunc(anc * 1.25);
        document.getElementById("encaaa").style.marginBottom = 2 * mrg + "px";
    }
    
    document.getElementById("conttt").style.margin = mrg + "px";

    createCanvas(anc, alc);
    img.resize(anc, alc);
    image(img, 0, 0);

    colorMode(HSL, 100, 100, 100, 100);
   
    vsb = true;

    //frameRate(30);
}

function draw() {
    if (vsb) {
        img.resize(anc, alc);
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
        strokeWeight(anc * 0.0038);

        // cuadrado base
        fill(50 + colF, 51, 19);
        quad(
            anc * 0.1975,
            alc * 0.776, // vA
            anc * 0.4325,
            alc * 0.666, // vB
            anc * 0.755,
            alc * 0.75, // vC
            anc * 0.5225,
            alc * 0.864 // vD
        );
            
        // triangulo fondo
        fill(38.8888 + colF, 12, 45);
        triangle(
            anc * 0.4325,
            alc * 0.666, // vB
            anc * 0.755,
            alc * 0.75, // vC
            anc * (0.4769 + 0.003962 * mvY),
            alc * (0.1892 - 0.000584 * mvY) // vPu    **
        );

        // triangulo izquierda
        fill(29.4444 + colF, 7, 35);
        triangle(
            anc * 0.1975,
            alc * 0.776, // vA
            anc * 0.4325,
            alc * 0.666, // vB
            anc * (0.4769 - 0.006388 * mvY),
            alc * (0.1892 + 0.000816 * mvY) // vPi    *
        );

        // triangulo derecha
        fill(44.7222 + colF, 32, 35);
        triangle(
            anc * 0.755,
            alc * 0.75, // vC
            anc * 0.5225,
            alc * 0.864, // vD
            anc * (0.4769 + 0.007512 * mvY),
            alc * (0.1892 + 0.002296 * mvY) // vPd    *
        );

        // triangulo frente volador
        fill(41.6666 + colF, 26, 46);
        triangle(
            anc * (0.1975 - 0.00025 * mvY),
            alc * (0.776 - 0.0078 * mvY), // vAf    *
            anc * (0.5225 - 0.00055 * mvY),
            alc * (0.864 - 0.00792 * mvY), // vDf    *
            anc * (0.4769 + 0.003962 * mvY),
            alc * (0.1892 - 0.000584 * mvY) // vPu    **
        );

        strokeWeight(anc * 0.005);

        // triangulo amarillo izq
        fill(colA, 94, 53);
        triangle(
            anc * (0.1893 + 0.002814 * mvY),
            alc * (0.3166 + 0.004588 * mvY), // bO    **
            anc * (0.1118 + 0.002814 * mvY),
            alc * (0.2966 + 0.004588 * mvY), // bI    *
            anc * (0.1768 + 0.002814 * mvY),
            alc * (0.1426 + 0.004588 * mvY) // pO    **
        );

        // triangulo amarillo der
        fill(colB, 73, 42);
        triangle(
            anc * (0.1893 + 0.002814 * mvY),
            alc * (0.3166 + 0.004588 * mvY), // bO    **
            anc * (0.2493 + 0.002814 * mvY),
            alc * (0.2846 + 0.004588 * mvY), // bD    *
            anc * (0.1768 + 0.002814 * mvY),
            alc * (0.1426 + 0.004588 * mvY) // pO    **
        );

        noStroke();
        fill(230);
        rect(0, 0, alc * 0.12, alc * 0.032);
        fill(0);
        textSize(alc * 0.024);
        textAlign(CENTER);
        text("   ", alc * 0.056, alc * 0.024);
        textAlign(RIGHT);
        text(Math.floor(mvX), alc * 0.046, alc * 0.024);
        textAlign(LEFT);
        text(Math.floor(mvY), alc * 0.066, alc * 0.024);
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

function windowResized() {
    preload();
    setup(); 
    resizeCanvas(anc, alc);
    setup();
  }
