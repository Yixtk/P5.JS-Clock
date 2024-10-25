// Yi Cui
// the length of blood on the painting stands for seconds
// the number of cubes stands for hours
// the size of cut on the portrait's throat stands for minutes
// the letter of the embryo's blood vessels stands for A.M./P.M.
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(156, 99, 89);
}

function draw() {
	// original painting
	stroke(74, 41, 35);
	strokeWeight(15);
	rect(width * 0.1, height * 0.1, width * 0.5, height * 0.6);
	noStroke();
	fill(135, 125, 123);
	rect(width * 0.1, height * 0.1, width * 0.5, height * 0.6);
	stroke(74, 41, 35);
	strokeWeight(5);
	fill(212, 162, 157);
	rect(width * 0.15, height * 0.15, width * 0.4, height * 0.5);
	line(width * 0.1, height * 0.1, width * 0.15, height * 0.15);
	line(width * 0.1, height * 0.7, width * 0.15, height * 0.65);
	line(width * 0.6, height * 0.1, width * 0.55, height * 0.15);
	line(width * 0.6, height * 0.7, width * 0.55, height * 0.65);
	noFill();
	strokeWeight(3);
	rect(width * 0.115, height * 0.115, width * 0.47, height * 0.57);
	//first tree
	beginShape();
	strokeWeight(width * 0.02);
	vertex(width * 0.23, height * 0.64);
	vertex(width * 0.23, height * 0.45);
	vertex(width * 0.2, height * 0.4);
	vertex(width * 0.23, height * 0.3);
	vertex(width * 0.25, height * 0.16);
	endShape();
	strokeWeight(width * 0.015);
	line(width * 0.24, height * 0.25, width * 0.2, height * 0.16);
	strokeWeight(width * 0.01);
	line(width * 0.24, height * 0.25, width * 0.15, height * 0.2);
	beginShape();
	vertex(width * 0.23, height * 0.45);
	vertex(width * 0.27, height * 0.4);
	vertex(width * 0.35, height * 0.16);
	endShape();
	line(width * 0.33, height * 0.21, width * 0.3, height * 0.16);
	//second tree
	stroke(74, 41, 35, 200);
	beginShape();
	strokeWeight(width * 0.015);
	vertex(width * 0.38, height * 0.63);
	vertex(width * 0.38, height * 0.4);
	vertex(width * 0.35, height * 0.29);
	vertex(width * 0.38, height * 0.16);
	endShape();
	beginShape();
	strokeWeight(width * 0.01);
	vertex(width * 0.38, height * 0.4);
	vertex(width * 0.4, height * 0.26);
	vertex(width * 0.39, height * 0.19);
	endShape();
	line(width * 0.4, height * 0.26, width * 0.425, height * 0.155);
	line(width * 0.35, height * 0.29, width * 0.335, height * 0.225);
	line(width * 0.23, height * 0.17, width * 0.335, height * 0.225);
	//third tree
	stroke(74, 41, 35, 160);
	beginShape();
	strokeWeight(width * 0.01);
	vertex(width * 0.42, height * 0.62);
	vertex(width * 0.42, height * 0.3);
	vertex(width * 0.465, height * 0.21);
	vertex(width * 0.54, height * 0.16);
	endShape();
	line(width * 0.42, height * 0.3, width * 0.36, height * 0.155);
	line(width * 0.465, height * 0.21, width * 0.49, height * 0.155);
	noStroke();
	fill(74, 41, 35);
	arc(width * 0.35, height * 0.65, width * 0.4, height * 0.1, PI, 2 * PI);
	fill('black');
	circle(width * 0.17, height * 0.58, width * 0.04);
	circle(width * 0.43, height * 0.18, width * 0.06);
	circle(width * 0.4, height * 0.2, width * 0.03);
	circle(width * 0.48, height * 0.46, width * 0.03);
	//frame of the lower portrait 
	stroke(74, 41, 35);
	strokeWeight(20);
	beginShape();
	vertex(width * 0.13, height * 0.73);
	vertex(width * 0.57, height * 0.73);
	vertex(width * 0.6, height * 0.76);
	vertex(width * 0.6, height * 0.9);
	vertex(width * 0.57, height * 0.93);
	vertex(width * 0.13, height * 0.93);
	vertex(width * 0.1, height * 0.9);
	vertex(width * 0.1, height * 0.76);
	endShape(CLOSE);
	stroke(214, 163, 45);
	strokeWeight(15);
	fill(126, 140, 127);
	beginShape();
	vertex(width * 0.13, height * 0.73);
	vertex(width * 0.57, height * 0.73);
	vertex(width * 0.6, height * 0.76);
	vertex(width * 0.6, height * 0.9);
	vertex(width * 0.57, height * 0.93);
	vertex(width * 0.13, height * 0.93);
	vertex(width * 0.1, height * 0.9);
	vertex(width * 0.1, height * 0.76);
	endShape(CLOSE);
	
	stroke(74, 41, 35);
	noFill();
	strokeWeight(6);
	beginShape();
	vertex(width * 0.115, height * 0.765);
	vertex(width * 0.138, height * 0.74);
	vertex(width * 0.56, height * 0.74);
	vertex(width * 0.586, height * 0.765);
	vertex(width * 0.586, height * 0.895);
	vertex(width * 0.56, height * 0.92);
	vertex(width * 0.138, height * 0.92);
	vertex(width * 0.115, height * 0.895);
	endShape(CLOSE);
	stroke(87, 112, 64);
	noFill();
	strokeWeight(2);
	beginShape();
	vertex(width * 0.115, height * 0.765);
	vertex(width * 0.138, height * 0.74);
	vertex(width * 0.56, height * 0.74);
	vertex(width * 0.586, height * 0.765);
	vertex(width * 0.586, height * 0.895);
	vertex(width * 0.56, height * 0.92);
	vertex(width * 0.138, height * 0.92);
	vertex(width * 0.115, height * 0.895);
	endShape(CLOSE);
	//portrait
	stroke('black');
	fill('black');
	strokeWeight(3);
	beginShape();
	vertex(width * 0.24, height * 0.91);
	vertex(width * 0.26, height * 0.88);
	vertex(width * 0.31, height * 0.85);
	vertex(width * 0.37, height * 0.83);
	vertex(width * 0.39, height * 0.86);
	vertex(width * 0.45, height * 0.88);
	vertex(width * 0.47, height * 0.91);
	endShape(CLOSE);
	ellipse(width * 0.34, height * 0.8, width * 0.08, height * 0.1);
	ellipse(width * 0.38, height * 0.8, width * 0.01, height * 0.02);
	//eyes
	fill('white');
	noStroke();
	ellipse(width * 0.32, height * 0.8, width * 0.01, height * 0.015);
	ellipse(width * 0.345, height * 0.8, width * 0.015, height * 0.02);

	blood(); // calling the blood drawing function from draw()
	cube(); // calling the cube drawing function from draw()
	cut(); // calling the cut drawing function from draw()
	embryo(); // calling the embryo drawing function from draw()
}

function blood() { // this is a function that handles the blood drawing portion of the code
	// blood drop by each second
	let yRadius = width*0.38*0.1;
	let s = second();
	strokeWeight(2);
	stroke(184, 47, 9);
	// reverse the direction of blood flowing by one second
	let millisecond = millis()%2000;
	let phase;
	if(millisecond<1000){
		phase = map(millisecond,0,1000,-1,1);
	} else{
		phase = map(millisecond,1000,2000,1,-1);
	}
	
	for (let y = height * 0.16; y <= (yRadius * 2) + height * 0.53 * (s/60); y++) {
		for (let x = width * 0.16; x < width * 0.54; x++) {
			let angle = map(x, width * 0.16, width * 0.54, 0, 4*PI);
			point(x,  (sin(angle) * yRadius * phase) + y);
		}
	}
	// repeat painting 
	stroke(74, 41, 35);
	strokeWeight(5);
	fill(245, 225, 225);
	line(width * 0.1, height * 0.1, width * 0.15, height * 0.15);
	line(width * 0.1, height * 0.7, width * 0.15, height * 0.65);
	line(width * 0.6, height * 0.1, width * 0.55, height * 0.15);
	line(width * 0.6, height * 0.7, width * 0.55, height * 0.65);
	noFill();
	strokeWeight(3);
	rect(width * 0.115, height * 0.115, width * 0.47, height * 0.57);
	beginShape();
	strokeWeight(width * 0.02);
	vertex(width * 0.23, height * 0.64);
	vertex(width * 0.23, height * 0.45);
	vertex(width * 0.2, height * 0.4);
	vertex(width * 0.23, height * 0.3);
	vertex(width * 0.25, height * 0.16);
	endShape();
	strokeWeight(width * 0.015);
	line(width * 0.24, height * 0.25, width * 0.2, height * 0.16);
	strokeWeight(width * 0.01);
	line(width * 0.24, height * 0.25, width * 0.15, height * 0.2);
	beginShape();
	vertex(width * 0.23, height * 0.45);
	vertex(width * 0.27, height * 0.4);
	vertex(width * 0.35, height * 0.16);
	endShape();
	line(width * 0.33, height * 0.21, width * 0.3, height * 0.16);
	stroke(74, 41, 35, 200);
	beginShape();
	strokeWeight(width * 0.015);
	vertex(width * 0.38, height * 0.63);
	vertex(width * 0.38, height * 0.4);
	vertex(width * 0.35, height * 0.29);
	vertex(width * 0.38, height * 0.16);
	endShape();
	beginShape();
	strokeWeight(width * 0.01);
	vertex(width * 0.38, height * 0.4);
	vertex(width * 0.4, height * 0.26);
	vertex(width * 0.39, height * 0.19);
	endShape();
	line(width * 0.4, height * 0.26, width * 0.425, height * 0.155);
	line(width * 0.35, height * 0.29, width * 0.335, height * 0.225);
	line(width * 0.23, height * 0.17, width * 0.335, height * 0.225);
	stroke(74, 41, 35, 160);
	beginShape();
	strokeWeight(width * 0.01);
	vertex(width * 0.42, height * 0.62);
	vertex(width * 0.42, height * 0.3);
	vertex(width * 0.465, height * 0.21);
	vertex(width * 0.54, height * 0.16);
	endShape();
	line(width * 0.42, height * 0.3, width * 0.36, height * 0.155);
	line(width * 0.465, height * 0.21, width * 0.49, height * 0.155);
	noStroke();
	fill(74, 41, 35);
	arc(width * 0.35, height * 0.65, width * 0.4, height * 0.1, PI, 2 * PI);
	fill('black');
	circle(width * 0.17, height * 0.58, width * 0.04);
	circle(width * 0.43, height * 0.18, width * 0.06);
	circle(width * 0.4, height * 0.2, width * 0.03);
	circle(width * 0.48, height * 0.46, width * 0.03);
}

function cube() {// this is a function that handles the cube number portion of the code
	// the number of cubes stands for hours
	let h = hour();
	// convert to 12 hours
	if (h >= 12) {
		h = h - 12;
	}
	for (let i = 0; i < h; i += 1) {
		// 2 columns, 6 rows in total
		let heightAdd = int(i / 2) * height * 0.1;
		// left column
		if (i % 2 == 0) {
			noStroke();
			fill('black');
			rect(width * 0.7, height * 0.1 + heightAdd, width * 0.06, height * 0.06);
			stroke('black');
			strokeWeight(1);
			beginShape();
			vertex(width * 0.7, height * 0.1 + heightAdd);
			vertex(width * 0.715, height * 0.085 + heightAdd);
			vertex(width * 0.775, height * 0.085 + heightAdd);
			vertex(width * 0.775, height * 0.145 + heightAdd);
			vertex(width * 0.76, height * 0.16 + heightAdd);
			endShape(CLOSE);
		}
		// right column
		else {
			noStroke();
			fill('black');
			rect(width * 0.8, height * 0.1 + heightAdd, width * 0.06, height * 0.06);
			stroke('black');
			strokeWeight(1);
			beginShape();
			vertex(width * 0.8, height * 0.1 + heightAdd);
			vertex(width * 0.815, height * 0.085 + heightAdd);
			vertex(width * 0.875, height * 0.085 + heightAdd);
			vertex(width * 0.875, height * 0.145 + heightAdd);
			vertex(width * 0.86, height * 0.16 + heightAdd);
			endShape(CLOSE);
		}
	}
}

function cut() {// this is a function that handles the cut size on the person's throat portion of the code
	// the size of cut increases by minute
	let m = minute();
	stroke(184, 47, 9);
	strokeWeight(1);
	fill(156, 99, 89);
	ellipse(width * 0.345, height * 0.845, width * 0.475 * m / 60, height * 0.02 * m / 60);
}

function embryo() {// this is a function that handles the letter represented by the embryo
	let h = hour();
	//umbilical cord presents "A"(A.M.)
	if (h<12){
		stroke(184, 47, 9);
		strokeWeight(5);
		noFill();
		beginShape();
		vertex(width * 0.81, height * 0.85);
		quadraticVertex(width * 0.875, height * 0.82,width * 0.9, height * 0.788);
		vertex(width * 0.915, height * 0.758);
		vertex(width * 0.934, height * 0.81);
		endShape();
		line(width * 0.9, height * 0.788,width * 0.926, height * 0.785);
	}
	//umbilical cord presents "P"(P.M.)
	if (h>12){
		stroke(184, 47, 9);
		strokeWeight(5);
		noFill();
		beginShape();
		vertex(width * 0.81, height * 0.85);
		quadraticVertex(width * 0.875, height * 0.82,width * 0.9, height * 0.788);
		vertex(width * 0.9, height * 0.72);
		endShape();
		arc(width * 0.9, height * 0.73,width * 0.05, height * 0.03,-0.5*PI,0.5*PI);
	}
	// draw the embryo
	stroke('black');
	strokeWeight(2);
	fill(204, 186, 171);
	beginShape();
	vertex(width * 0.77, height * 0.8);
	quadraticVertex(width * 0.81, height * 0.77,width * 0.83, height * 0.81);
	vertex(width * 0.82, height * 0.825);
	quadraticVertex(width * 0.82, height * 0.85,width * 0.837, height * 0.863);
	vertex(width * 0.85, height * 0.85);
	vertex(width * 0.875, height * 0.86);
	vertex(width * 0.884, height * 0.852);
	vertex(width * 0.878, height * 0.868);
	vertex(width * 0.854, height * 0.861);
	quadraticVertex(width * 0.82, height * 0.9,width * 0.78, height * 0.86);
	quadraticVertex(width * 0.76, height * 0.83,width * 0.77, height * 0.8);
	endShape(CLOSE);
	beginShape();
	vertex(width * 0.8, height * 0.834);
	vertex(width * 0.825, height * 0.835);
	vertex(width * 0.85, height * 0.828);
	vertex(width * 0.854, height * 0.838);
	vertex(width * 0.841, height * 0.837);
	vertex(width * 0.817, height * 0.844);
	vertex(width * 0.806, height * 0.84);
	endShape();
	noStroke();
	fill('black');
	circle(width * 0.79, height * 0.815,width * 0.015);
	circle(width * 0.81, height * 0.817,width * 0.012);
}