function changeColor() {
  const spanElement = document.getElementById('colorSpan');
  const randomColor = getRandomColor();
  spanElement.style.color = randomColor;
}
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const changeColorBtn = document.getElementById('changeColorBtn');
const colorBox = document.getElementById('colorBox');
changeColorBtn.addEventListener('click', changeBoxColor);

function changeBoxColor() {
  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
}

setInterval(changeColor, 500);
