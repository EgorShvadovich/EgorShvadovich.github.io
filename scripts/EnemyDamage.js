
// Сначала нужно получить ссылки на куб и полоску здоровья
let cube = document.getElementById("red-cube");
let healthBar = document.getElementById("health-bar");
let healthBarValue = document.getElementById("health-bar-value");
let healthBarBackground = document.getElementById("health-bar-background");
let background = document.getElementById("");

const gameContainer = document.getElementById("game-container");

let nextLevel = document.querySelector('.next_level');
let nextLevelButton = document.querySelector('.next_level_button');
let nextLvlEnabled = document.getElementsByClassName('.next_level_button');
let exit = document.querySelector('.exit_menu')
let soundShoot = "ak";


const cubeImages = [
  "styles/images/enemy1.png",
  "styles/images/enemy2.png",
  "styles/images/enemy3.png",
  "styles/images/enemy4.png",
  "styles/images/enemy5.png",
  "styles/images/enemy6.png"
];

const levelDesign = [
  "styles/images/level1.png",
  "styles/images/level2.png",
  "styles/images/level3.png",
  "styles/images/level4.png",
  "styles/images/level5.png",
  "styles/images/level6.png"
];
// Устанавливаем начальное значение здоровья
let health = 100;
let AnimationSpeed = 10;
let saveHP = health;

let healthReaction = 0;

function respawnCube() {
  // Создаем новый куб и полоску здоровья
  healthBarBackground = document.createElement("div");
  healthBarBackground.id = "health-bar-background";

  healthBar = document.createElement("div");
  healthBar.id = "health-bar";

  healthBarValue = document.createElement("div");
  healthBarValue.id = "health-bar-value";

  cube = document.createElement("div");
  cube.id = "red-cube";

  // Выбираем случайный фон из массива изображений
  const randomIndexEnemy = Math.floor(Math.random() * cubeImages.length);
  const randomImageEnemy = cubeImages[randomIndexEnemy];
  cube.style.backgroundImage = `url(${randomImageEnemy})`;

  let randomIndexMap = Math.floor(Math.random() * levelDesign.length);
  let randomImageMap = levelDesign[randomIndexMap];
  gameContainer.style.backgroundImage = `url(${randomImageMap})`;

  // Увеличиваем скорость анимации и уменьшаем длительность
  AnimationSpeed -= 1;
  cube.style.animationDuration = `${AnimationSpeed}s`;
  healthBarBackground.style.animationDuration = `${AnimationSpeed}s`;

  
  healthBarValue.innerHTML = health.toString();
  const healthBarWidth = healthBarBackground.width;
  healthBar.style.width = `${healthBarWidth}px`;
  healthBar.style.transition = "width 0.5s ease-in-out";

  // Добавляем новый куб на игровое поле
  gameContainer.appendChild(cube);
  gameContainer.appendChild(healthBarBackground);
  healthBarBackground.appendChild(healthBar);
  healthBar.appendChild(healthBarValue);

  // Добавляем обработчик клика на новый куб
  cube.addEventListener("click", ClickReaction);
}

function ReturnHealth()
{
  return saveHP;
}

function NewGame()
{
  Restart();
  health = 100;
  AnimationSpeed = 10;
  saveHP = health;

  healthBarBackground = document.createElement("div");
  healthBarBackground.id = "health-bar-background";

  healthBar = document.createElement("div");
  healthBar.id = "health-bar";

  healthBarValue = document.createElement("div");
  healthBarValue.id = "health-bar-value";

  cube = document.createElement("div");
  cube.id = "red-cube";

  // Выбираем случайный фон из массива изображений
  const randomIndexEnemy = Math.floor(Math.random() * cubeImages.length);
  const randomImageEnemy = cubeImages[randomIndexEnemy];
  cube.style.backgroundImage = `url(${randomImageEnemy})`;

  cube.style.animationDuration = `${AnimationSpeed}s`;
  healthBarBackground.style.animationDuration = `${AnimationSpeed}s`;

  healthBarValue.innerHTML = health.toString();
  const healthBarWidth = healthBarBackground.width;
  healthBar.style.width = `${healthBarWidth}px`;
  healthBar.style.transition = "width 0.5s ease-in-out";

  // Добавляем новый куб на игровое поле
  gameContainer.appendChild(cube);
  gameContainer.appendChild(healthBarBackground);
  healthBarBackground.appendChild(healthBar);
  healthBar.appendChild(healthBarValue);

  cube.addEventListener("click", ClickReaction);
  
  saveGameProgress(health, AnimationSpeed, saveHP);
}

let damage = 10;

function ClickReaction() {
  takeDamage(damage);
  saveGameProgress(health, AnimationSpeed, saveHP);
  // Если здоровье куба опустилось до 0 или меньше, то убираем его с экрана
  if (health <= 0) {
    loading.style.zIndex = 9998;
    fadeoutAudio("audio_game");
    nextLevel.style.opacity = 1;
    loading.style.opacity = 1;
    setTimeout(function () {
      nextLevel.style.zIndex = 9999;
    }, 2000);
    setTimeout(function () {
      Restart();
      saveHP += 20;
      health = saveHP;
      startGame()
    }, 2500);

  }
}

function Restart()
{
  cube.remove();
  healthBar.remove();
  healthBarValue.remove();
  healthBarBackground.remove();
}

function takeDamage(damage) {

  createAudio(soundShoot).play();
  health -= damage;

  const percent = (health / saveHP) * 100;

  console.log(percent);

  if (percent === 100 || percent > 75) {
    healthBar.style.background = 'green';
  }
  else if (percent === 74 || percent > 50) {
    healthBar.style.background = 'yellow';
  }
  else if (percent === 49 || percent > 25) {
    healthBar.style.background = 'orange';
  }
  else {
    healthBar.style.background = 'red';
  }

  healthBarValue.innerHTML = health.toString();
}

nextLevelButton.addEventListener("click", function () {
  nextLevel.style.opacity = 0;
  nextLevel.style.zIndex = -9999;
  setTimeout(function () {
    loading.style.opacity = 0;
    playAudio("audio_game");
  }, 1000);
  setTimeout(function () {
    nextLevel.style.zIndex = -999;
    loading.style.zIndex = -999;
  }, 3000);
  respawnCube();
  saveGameProgress(health, AnimationSpeed, saveHP);
  nextLevelButton.disabled = true;
});

exit.addEventListener("click", function () {
  saveGameProgress(health, AnimationSpeed, saveHP);                  //выход в главное меню 
  levelElement.style.display = "none";
  mainMenu.style.display = "inline-block"; 
  StopDamage();
  loading.style.opacity = 0;
  nextLevel.style.opacity = 0;
  setTimeout(function () {
    loading.style.zIndex = -999;
    nextLevel.style.zIndex = -998;
    playAudio("audio_main_menu");
  }, 2000);
});
