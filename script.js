let screenSize = 10
const screen = document.querySelector('.screen')
const goButton = document.querySelector('.create-button')
const clearButton = document.querySelector('.clear')
const blackButton = document.querySelector('.black-button')
const rainbowButton = document.querySelector('.rainbow-button')


function clearGrid () {
  screen.innerHTML = ''
}

function draw(){
this.style.backgroundColor="black";
console.log(this)
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
  }
}

function drawBlack(){
console.log(this.id)

}

function drawRainbow(){
console.log(this.id)

}

goButton.addEventListener('click', createGrid)
clearButton.addEventListener('click', clearGrid)
blackButton.addEventListener('click', drawBlack)
rainbowButton.addEventListener('click', drawRainbow)
