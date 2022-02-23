const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

//Select buttons
const black = document.getElementById('black');
const newGrid = document.getElementById('newgrid');
const clear = document.getElementById('clear');
const colorful = document.getElementById('random');

//Make button change to the selected color on hov
black.addEventListener('click', () => {
  container.addEventListener("mouseover", (e) => {
    if (e.target !== e.currentTarget) {
      e.target.style.background = 'black';
    }
    e.stopPropagation();
  })
});

//Create a new grid with a max size of 50
newGrid.addEventListener('click', () => {
  document.querySelectorAll('.grid-item').forEach(e => e.remove());
  let height = prompt('Enter Height (16 is recommended)');
  let width = prompt('Enter Width (16 is recommended)')
  
  if (height > 50 || width > 50){
    alert(Error('The size chose is too large'));
    return;
  }
  makeRows(height, width);
});


//Make grid colorful
colorful.addEventListener('click', () => {
  container.addEventListener('mouseover', (e) => {
    if (e.target !== e.currentTarget){
      e.target.style.background = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    }
    e.stopPropagation();
  })
})