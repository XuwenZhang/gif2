//https://p5js.org/reference/#/p5/rotate
//https://www.youtube.com/watch?v=o9sgjuh-CBM&t=18m0s
//https://genekogan.com/code/p5js-transformations/

let angle = 0;
let speed = 0.02;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(190,200,240);


    noStroke();

    translate(300,300);
   rotate(angle);


  fill(0,0,0);
  rect(220-300,152-300,160,120);
  circle(302-300, 145-300, 12);
  rect(294-300,230-300,16,60);
  rect(275-300,290-300,54,22);
  rect(290-300,312-300,24,52);
  triangle(302-300, 327-300, 276-300, 392-300, 328-300, 392-300);
  rect(276-300,392-300,52,26);
  triangle(276-300, 418-300, 302-300, 453-300, 328-300, 418-300);
  triangle(267-300, 478-300, 302-300, 428-300, 337-300, 478-300);
  rect(264-300,478-300,76,13);


  fill(190,200,240);
  triangle(220-300, 150-300, 220-300, 270-300, 230-300, 150-300);
  triangle(380-300, 150-300, 380-300, 270-300, 370-300, 150-300);
  rect(286-300,149-300,20,2);
  circle(275-300, 312-300, 30);
  circle(329-300, 312-300, 30);



    angle = angle + speed

    // how would you create a spinning object?
}
