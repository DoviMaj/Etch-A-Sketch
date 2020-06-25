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
colorInputElement.placeholder = 'type your color'
colorInputElement.value = 'black';
colorInputElement.className = 'upper-buttons';
colorInputElement.addEventListener('mouseleave', function(event){
    colorInput = event.target.value.toLowerCase();
})
ul.appendChild(colorInputElement);
ul.appendChild(resetButton);

let colorInput = 'black';
function colorHandler(){
  div.childNodes.forEach(function(gridElement){
    gridElement.addEventListener('mouseenter', function(event){
      event.target.style.backgroundColor = colorInput;
    })
  })
}
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
  reset();
}


// v2 requirements
// add reset button (x)
// give color options (x)
// give random color option ()

// give size options big, medium small (x)
