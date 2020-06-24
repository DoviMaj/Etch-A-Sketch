let div = document.querySelector('div');
div.id = 'parent-div'
div.className = 'small';
let gridSize = '';

let sizeBigChoice = document.createElement('button');
sizeBigChoice.innerHTML = 'Big';
sizeBigChoice.addEventListener('click', function(event){
  div.className = event.target.innerHTML.toLowerCase();
  gridSizeHandler();
  reset();
})

let sizeMediumChoice = document.createElement('button');
sizeMediumChoice.innerHTML = 'Medium';
sizeMediumChoice.addEventListener('click', function(event){
  div.className = event.target.innerHTML.toLowerCase();
  gridSizeHandler();
  reset();
})

let sizeSmallChoice = document.createElement('button');
sizeSmallChoice.innerHTML = 'Small';
sizeSmallChoice.addEventListener('click', function(event){
  div.className = event.target.innerHTML.toLowerCase();
  gridSizeHandler();
  reset();
})


div.parentNode.appendChild(sizeBigChoice);
div.parentNode.appendChild(sizeMediumChoice);
div.parentNode.appendChild(sizeSmallChoice);

let gridSizeHandler = function(){
  if(div.className === 'big'){
    gridSize = 7000;
  }
  if(div.className === 'medium'){
    gridSize = 5000;
  }
  if(div.className === 'small'){
    gridSize = 2000;
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

let colorInput = 'black';
let colorHandler = function(){
  div.childNodes.forEach(function(gridElement){
    gridElement.addEventListener('mouseenter', function(event){
      event.target.style.backgroundColor = colorInput;
    })
  })
}

let resetButton = '';
let reset = function(){
  let resetButton = document.createElement('button');
  resetButton.innerHTML = 'Clear';
  resetButton.id = 'reset-button'
  resetButton.addEventListener('click', function(){
  div.childNodes.forEach(function(gridElement){
    gridElement.style.backgroundColor = '';
    })
  })
  div.parentNode.appendChild(resetButton);
}



let colorInputElement = document.createElement('input');
colorInputElement.type = 'text';
colorInputElement.placeholder = 'type your color'
colorInputElement.value = '';
colorInputElement.addEventListener('mouseleave', function(event){
  //if(event.keyCode === 13){
    colorInput = event.target.value
  //}
})
div.parentNode.appendChild(colorInputElement);












// v2 requirements
// add reset button (x)
// give color options (x)
// give random color option ()

// give size options big, medium small ()
