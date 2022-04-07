let screenSize = 10
const screen = document.querySelector('.screen')
const goButton = document.querySelector('.create-button')
const clearButton = document.querySelector('.clear')

function clearGrid () {
  screen.innerHTML = ''
}

function createGrid () {
  screen.style.gridTemplateColumns = `repeat(${screenSize},1fr)`
  screen.style.gridTemplateRows = `repeat(${screenSize},1fr)`

  for (let i = 0; i < screenSize ** 2; i++) {
    const pixel = document.createElement('div')
    pixel.classList.add('pixel')
    // pixel.addEventListener('mouseover', console.log("mouseover"))
    // pixel.addEventListener('mousedown', console.log("mousedown"))
    pixel.style.borderStyle = 'solid'
    screen.appendChild(pixel)
  }
}

goButton.addEventListener('click', createGrid)
clearButton.addEventListener('click', clearGrid)
