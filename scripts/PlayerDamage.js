let healthBarPlayer = document.getElementById("player-health-bar");
let healthBarValuePlayer = document.getElementById("player-health-bar-value");
let healthBarBackgroundPlayer = document.getElementById("player-health-bar-background");

let PlayerHealth;
let EnemyHit = 10;
let intervalId; 

function startGame() {
  PlayerHealth = 100;
  healthBarValuePlayer.innerHTML = PlayerHealth.toString();
  healthBarPlayer.style.width = "100%";

  clearInterval(intervalId); 

  intervalId = setInterval(dealDamage, 4000);
}

function StopDamage() {
 clearInterval(intervalId); 
}

function StartDamage() {
  intervalId = setInterval(dealDamage, 4000);
}

function dealDamage() {
  PlayerHealth -= EnemyHit; // вычитаем урон из здоровья игрока

  // Вычисляем новую ширину зеленого хп на основе текущего здоровья
  healthBarValuePlayer.innerHTML = PlayerHealth.toString();
  const healthBarWidth = healthBarBackgroundPlayer.clientWidth;
  const newHealthBarWidth = (PlayerHealth / 100) * healthBarWidth;
  healthBarPlayer.style.width = `${newHealthBarWidth}px`;
  healthBarPlayer.style.transition = "width 0.5s ease-in-out";

  if (PlayerHealth <= 0) {
    // игрок погиб, выполняем нужные действия
    clearInterval(intervalId); // останавливаем интервал
    alert("Вы погибли!"); // выводим сообщение о смерти
    BackToMenu();
  }
}

document.getElementById("new_game").addEventListener("click", startGame);