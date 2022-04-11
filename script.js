let screenSize = 10
const screen = document.querySelector('.screen')
const goButton = document.querySelector('.create-button')
const clearButton = document.querySelector('.clear')
const blackButton = document.querySelector('.black-button')
const rainbowButton = document.querySelector('.rainbow-button')
const defaultColor = "grey"
let currentColor = defaultColor
let newColor = currentColor

function clearGrid () {
  screen.innerHTML = ''
}

/// NOTE : DRAW will require and if else statement to determin a 'new color' which will then test for the 'current color'.

function draw(){
  
  if (newColor == 'black'){
    currentColor = "black";
  }
  else if (newColor == 'rainbow'){
    //generates random color

    currentColor= "#" + ((1<<24)*Math.random() | 0).toString(16);
  }
  
this.style.backgroundColor = currentColor;
 
  
}

function createGrid () {
  screen.style.gridTemplateColumns = `repeat(${screenSize},1fr)`
  screen.style.gridTemplateRows = `repeat(${screenSize},1fr)`

  for (let i = 0; i < screenSize ** 2; i++) {
    const pixel = document.createElement('div')
    pixel.classList.add('pixel')
    pixel.addEventListener('mouseover',draw)
    // pixel.addEventListener('mousedown', draw)
    pixel.style.borderStyle = 'solid'
    screen.appendChild(pixel)
    currentColor = defaultColor;
  }
}

function drawBlack(){

  newColor="black";

}

function drawRainbow(){
  newColor= "rainbow"

}

goButton.addEventListener('click', createGrid)
clearButton.addEventListener('click', clearGrid)
blackButton.addEventListener('click', drawBlack)
rainbowButton.addEventListener('click', drawRainbow)