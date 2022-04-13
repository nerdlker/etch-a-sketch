let screenSize = 16;
const screen = document.querySelector('.screen')
const goButton = document.querySelector('.create-button')
const clearButton = document.querySelector('.clear')
const colorButton = document.querySelector('.color-button')
const rainbowButton = document.querySelector('.rainbow-button');
const eraseButton = document.querySelector('.erase-button')
const sketchButton = document.querySelector('.sketch-button')
const defaultColor = "grey";
let currentColor = defaultColor;
let newColor = currentColor;
var slider = document.getElementById("myRange");
const checkBox = document.querySelector("#checkmark")
let mycolor = ""




var output = document.getElementById("slider-value");
output.innerHTML = `Grid Size: 16 x 16`;
slider.oninput = function() {
  output.textContent = `Grid Size: ${this.value} x ${this.value}`;
  createGrid()
}
function clearGrid () {
  screen.innerHTML = ''

}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


function draw(e){   //Draw checks for color
  if (e.type === 'mouseover' && !mouseDown) return
  if (newColor == 'mycolor'){
    currentColor = mycolor;
  }
  else if (newColor == 'rainbow'){
    //generates random color

    currentColor= "#" + ((1<<24)*Math.random() | 0).toString(16);
  }

  else if (newColor == "white"){
    currentColor ="white"
  }
  else if (newColor== "sketch"){
    currentColor = "rgba(0,0,0,0.2)";
    console.log(currentColor);
    
  }
  
this.style.backgroundColor = currentColor;
 
  
}

function createGrid () {
  clearGrid();
  screenSize = slider.value;
  screen.style.gridTemplateColumns = `repeat(${screenSize},1fr)`;
  screen.style.gridTemplateRows = `repeat(${screenSize},1fr)`;

  for (let i = 0; i < screenSize ** 2; i++) {
    const pixel = document.createElement('div')
    pixel.classList.add('pixel');
    if (checkBox.checked == true)
    {pixel.classList.add("showscreen")}
    
    pixel.addEventListener('mouseover',draw);
    pixel.addEventListener('mousedown', draw) //first click will start drawing
    screen.appendChild(pixel)
    currentColor = defaultColor;
  }
  
}

function drawColor(e){
  
  newColor = "mycolor"
  mycolor= e.target.value;

  
}

function eraser(){
  newColor = "white";
}

function drawRainbow(){
  newColor= "rainbow"

}
function gridToggle(){  //toggle grid on and off with checkmark
  elements = screen.querySelectorAll(".pixel");
  for (let i = 0; i < elements.length; i++) {
  let show = elements[i].classList.toggle("showscreen")
}}

function sketch(){
  this.textContent= "Coming soon";
  this.style.backgroundColor = "grey";
}



createGrid()
checkBox.addEventListener('change', gridToggle)

// goButton.addEventListener('click', createGrid)
clearButton.addEventListener('click', createGrid)
colorButton.addEventListener('click', drawColor)
rainbowButton.addEventListener('click', drawRainbow)
eraseButton.addEventListener("click", eraser)
colorButton.addEventListener("change",drawColor)

sketchButton.addEventListener("mouseover",sketch)
sketchButton.addEventListener("mouseout", function(){
  this.textContent = "SKETCH";
  this.style.backgroundColor = "#15883e"
});
/* 
todo :
1. Add toggle for 'show grid' [DONE]
2. wire up toggle to display/hide grid [DONE]
3. add fonts[DONE]
4. decorate screen box better {DONE}
5.Color Picker Implementation {DONE}
6. FIX Color picker functionality {DONE}
7. Add Sketch Functionality

add keyboard shortcurts 

*/