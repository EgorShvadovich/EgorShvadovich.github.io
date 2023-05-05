let hand = document.getElementById("hand");
let handSize = hand.offsetWidth;
const weaponFactory = new WeaponFactory();


const weaponDeagle = document.getElementById("game-button-weapon1");
const weaponAk = document.getElementById("game-button-weapon2");
const weaponAwp = document.getElementById("game-button-weapon3");

gameField.addEventListener('mousemove', (event) => {
  // Получаем координаты курсора относительно игрового поля
  const x = event.clientX - gameField.offsetLeft;
  // Ограничиваем координаты, чтобы курсор не выходил за пределы игрового поля
  const minX = handSize / 2;
  const maxX = gameField.clientWidth - handSize / 2;
  const constrainedX = Math.max(minX, Math.min(maxX, x));

  // Устанавливаем новые координаты руки
  if (constrainedX < window.innerWidth / 2) {
    hand.style.transform = "scaleX(-1)";
    hand.style.left = (constrainedX + handSize / 2 - (hand.offsetWidth / 1.2)) + "px";
  } else {
    hand.style.transform = "scaleX(1)";
    hand.style.left = (constrainedX - handSize / 2) + "px";
  }

  // Отменяем скроллинг при достижении границ игрового поля
  if (constrainedX === minX || constrainedX === maxX) {
    event.preventDefault();
  }
});

let weapon = weaponFactory.createAk();

document.addEventListener('keydown', (event) => {
  if (event.key === '1') {
    createWeapon(weaponFactory.createDeagle());
  } else if (event.key === '2') {
    createWeapon(weaponFactory.createAk());
  } else if (event.key === '3') {
    createWeapon(weaponFactory.createAwp());
  }
});

weaponDeagle.addEventListener("click", function() {
  createWeapon(weaponFactory.createDeagle())
});

weaponAk.addEventListener("click", function() {
  createWeapon(weaponFactory.createAk());
});

weaponAwp.addEventListener("click", function() {
  createWeapon(weaponFactory.createAwp());
});

function createWeapon(type) {
  weapon = type;
  hand.style.backgroundImage = `url(${weapon.image})`;
  soundShoot = weapon.soundShoot;
  damage = weapon.damage;
  currentWeapon = weapon;
}