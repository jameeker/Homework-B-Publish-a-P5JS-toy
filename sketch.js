function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES); //Main unit used
  colorMode(HSL); //To support the colour looping
  createPattern(257,0.8,180); //A fixed pattern as demonstration of parameters (257,0.8,180)
}
function mousePressed(){
  createPattern();
}

function keyPressed(){
  createPattern();
}

function createPattern (fix, zoom, startColour){
  
  var length = 0; //Length of line drawn
  var step = round(random(180)); //Degree to turn
  var colour = round(random(800)); //Start colour of HSL loop
  
  var rotationAngle = 100; //Actual angle relative to origin (derived from colour)
  var magnify = height/500; //Decrease in length (will change overall size)

  var oldX = width/2; //Original x coordinate for line
  var oldY = height/2; //Original y coordinate for line
  var newX; //New x coordinate for line
  var newY; //New y coordinate for line
  
  //Set variables to parameters if available
  if(fix != null){
    step = fix;
  }
  if(zoom != null){
    magnify = zoom;
  }
  if(startColour != null){
    colour = startColour;
  }
  
  background(0); //Clear the screen
  
  //Main pattern making loop
  for(var i = 0;i<360;i++){
    stroke(colour%360,100,50); //Colour from the HSL loop
    
    newX = length*(cos(rotationAngle))+oldX; //Calculate new x coordinate for line
    newY = length*(tan(rotationAngle))+oldY; //Calculate new y coordinate for line
    
    line(oldX,oldY,newX,newY); //Draw line
    
    oldX = newX; //Set the original x coordinate to the current x coordinate
    oldY = newY; //Set the original y coordinate to the current y coordinate
    rotationAngle -= step; //Find the actual rotation
    length += magnify; //Decrease the length of line
    colour += 1; //Continue the HSL loop
  }
}