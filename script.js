let div = document.querySelector('div');
let ul = document.querySelector('ul')
div.id = 'parent-div'
div.className = 'bigger';
let gridSize = '';

let sizeBigChoice = document.createElement('button');
sizeBigChoice.innerHTML = 'Bigger';
sizeBigChoice.className = 'upper-buttons';
sizeBigChoice.addEventListener('click', function(event){
  div.className = event.target.innerHTML.toLowerCase();
  gridSizeHandler();
  reset();
})

let sizeSmallChoice = document.createElement('button');
sizeSmallChoice.innerHTML = 'Smaller';
sizeSmallChoice.className = 'upper-buttons';
sizeSmallChoice.addEventListener('click', function(event){
  div.className = event.target.innerHTML.toLowerCase();
  gridSizeHandler();
  reset();
})


ul.appendChild(sizeBigChoice);
ul.appendChild(sizeSmallChoice);

let resetButton = document.createElement('button');
resetButton.innerHTML = 'Clear';
resetButton.id = 'reset-button'
resetButton.className = 'upper-buttons';
resetButton.addEventListener('click', function(){
  reset();
})


function reset(){
  div.childNodes.forEach(function(gridElement){
    gridElement.style.backgroundColor = '';      
  })
}

let colorInputElement = document.createElement('input');
colorInputElement.type = 'text';
colorInputElement.placeholder = 'color, random or eraser'
colorInputElement.value = 'black';
colorInputElement.className = 'upper-buttons';
colorInputElement.addEventListener('blur', function(event){
    colorInput = event.target.value.toLowerCase();
})

ul.appendChild(colorInputElement);
ul.appendChild(resetButton);


gridSizeHandler();
function gridSizeHandler(){
  if(div.className === 'bigger'){
    gridSize = 2000;
  }
  if(div.className === 'smaller'){
    gridSize = 500;
  }

  div.childNodes.forEach(function(gridElement){
    gridElement.remove();
  })
  
  for(var i =0; i < gridSize; i++){
    let gridElement = document.createElement('div');
    gridElement.id = 'grid-element';
    div.appendChild(gridElement);
  }
  colorHandler();
}

let colorInput = 'black';
function colorHandler(){
  debugger
  div.childNodes.forEach(function(gridElement){
    gridElement.addEventListener('mousedown', (event) => {
      mouseOver();
      addColor(event);
    }
  )})
  function mouseOver(){
    div.childNodes.forEach(function(gridElement){
      gridElement.addEventListener('mouseover', addColor)
      gridElement.addEventListener('mouseup', removeMouseOver)
    })
  }
  function addColor(event){
    if(colorInput === 'random'){
      event.target.style.backgroundColor = randomColor();
    } 
    if(colorInput === 'eraser'){
      event.target.style.backgroundColor = 'white';
    }
    else{
      event.target.style.backgroundColor = colorInput;
    }
  }
  function removeMouseOver(){
    div.childNodes.forEach(function(gridElement){
      gridElement.removeEventListener('mouseover', addColor);
    })
  }
  function randomColor(){
    let rgb = [generateRandom(), generateRandom(), generateRandom()];
    function generateRandom(){
      return Math.floor(Math.random() * 226)
    }
    return `rgb(${rgb})`;
  }
}




// v3 requirements

// give random color option (x)
// make event change when clicking and double clicking(x)
