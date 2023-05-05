let crosshair = document.getElementById("crosshair");
let crosshairSize = crosshair.offsetWidth;

document.addEventListener("mousemove", function(e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  crosshair.style.left = (mouseX - crosshairSize / 2) + "px";
  crosshair.style.top = (mouseY - crosshairSize / 2) + "px";

  crosshair.style.transform = `translate(-50%, -50%) translate(${crosshairSize / 2}px, ${crosshairSize / 2}px)`;

  document.body.style.cursor = 'none';
  document.body.appendChild(crosshair);
});


const gameField = document.getElementById('game-container');

gameField.addEventListener('mousemove', (event) => {
  // Получаем координаты курсора относительно игрового поля
  const x = event.clientX - gameField.offsetLeft;
  const y = event.clientY - gameField.offsetTop;

  // Ограничиваем координаты, чтобы курсор не выходил за пределы игрового поля
  const minX = 0;
  const minY = 0;
  const maxX = gameField.clientWidth - crosshair.clientWidth;
  const maxY = gameField.clientHeight - crosshair.clientHeight;
  const constrainedX = Math.max(minX, Math.min(maxX, x));
  const constrainedY = Math.max(minY, Math.min(maxY, y));

  // Устанавливаем новые координаты курсора
  crosshair.style.left = `${constrainedX}px`;
  crosshair.style.top = `${constrainedY}px`;

  // Отменяем скроллинг при достижении границ игрового поля
  if (constrainedX === minX || constrainedX === maxX) {
    event.preventDefault();
  }
  if (constrainedY === minY || constrainedY === maxY) {
    event.preventDefault();
  }
});