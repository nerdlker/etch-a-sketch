const ROWS = 10;
const screen = document.querySelector(".screen");
const goButton = document.querySelector(".create-button")
const clearButton = document.querySelector(".clear")

function clearGrid(){
  screen.innerHTML="";
}

function createGrid(){
  // screen.style.gridTemplateColumns = `repeat(${ROWS},1fr)`
  // screen.style.gridTemplateRows = `repeat(${ROWS},1fr)`
  
  for (let i=0; i < ROWS*ROWS ; i++){
  const pixel = document.createElement('div');
    pixel.classList.add("pixel")
    pixel.addEventListener('mouseover', console.log("mouseover"))
    pixel.addEventListener('mousedown', console.log("mousedown"))
    screen.appendChild(pixel)
  }
}


goButton.addEventListener("click", createGrid)
clearButton.addEventListener("click", clearGrid)


