let screenSize = 16;
const screen = document.querySelector('.screen')
const goButton = document.querySelector('.create-button')
const clearButton = document.querySelector('.clear')
const blackButton = document.querySelector('.black-button')
const rainbowButton = document.querySelector('.rainbow-button');
const colorButton = document.querySelector('.color-button')
const defaultColor = "grey";
let currentColor = defaultColor;
let newColor = currentColor;
var slider = document.getElementById("myRange");
const cb = document.querySelector("#checkmark")





var output = document.getElementById("slider-value");
output.innerHTML = `Grid Size: 16 x 16`;
slider.oninput = function() {
  output.textContent = `Grid Size: ${this.value} x ${this.value}`;
  createGrid()
}
function clearGrid () {
  screen.innerHTML = ''

}




function draw(){   //Draw checks for color
  
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
  clearGrid();
  screenSize = slider.value;
  screen.style.gridTemplateColumns = `repeat(${screenSize},1fr)`
  screen.style.gridTemplateRows = `repeat(${screenSize},1fr)`

  for (let i = 0; i < screenSize ** 2; i++) {
    const pixel = document.createElement('div')
    pixel.classList.add('pixel')
    if (cb.checked == true)
    {pixel.classList.add("showscreen")}
    
    // pixel.addEventListener('mouseover',draw)
    pixel.addEventListener('mousedown', draw)
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
function gridToggle(){  //toggle grid on and off with checkmark
  elements = screen.querySelectorAll(".pixel");
  for (let i = 0; i < elements.length; i++) {
  let show = elements[i].classList.toggle("showscreen")
}}



createGrid()
cb.addEventListener('change', gridToggle)

goButton.addEventListener('click', createGrid)
clearButton.addEventListener('click', clearGrid)
blackButton.addEventListener('click', drawBlack)
rainbowButton.addEventListener('click', drawRainbow)
// colorButton.addEventListener("click", doThis)


/* 
todo :
1. Add toggle for 'show grid' [DONE]
2. wire up toggle to display/hide grid [DONE]
3. add fonts[DONE]
4. decorate screen box better {DONE}
5.Color Picker Implementation
6.

add keyboard shortcurts 

*/