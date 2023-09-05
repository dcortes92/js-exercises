const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// Add your code here
canvas.addEventListener('keypress', event => {
  switch (event.key) {
    case 'w':
      if ((y - 5) < -25) {
        y = 345;
      } else {
        y -= 5;
      }
      break;

    case 'a':
      if ((x - 5) < -25) {
        x = 505;
      } else {
        x -= 5;
      }
      break;

    case 's':
      if ((y + 5) > 345) {
        y = 25;
      } else {
        y += 5;
      }
      break;

    case 'd':
      if ((x + 5) > 505) {
        x = 25;
      } else {
        x += 5;
      }
      break;

    default:
      break;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle(x, y, size);
});