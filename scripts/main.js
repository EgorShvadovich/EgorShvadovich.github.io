'use district'

const newGame = document.getElementById("new_game");
const loadGame = document.getElementById("load_game");

const levelElement = document.querySelector(".level");
const mainMenu = document.querySelector(".main_menu");

const closeControl = document.getElementById("close_control");
const gameControls = document.querySelector(".game_controls");

const openControl = document.getElementById("control");

let loading = document.querySelector('.loading');

const click = document.getElementById("click");

click.addEventListener("click", function() {
  //NewGame();
  loading.style.opacity = 0;
  loading.style.zIndex =-999;
  click.style.display = "none";
  playAudio("audio_main_menu");
  
});
newGame.addEventListener("click", function() {
  fadeoutAudio("audio_main_menu");
  loading.style.zIndex = 9999;
  loading.style.opacity = 1;
  setTimeout(function() {
  mainMenu.style.display = "none";                                        //клик по new game - начало игры
  levelElement.style.display = "inline-block";
}, 2000);
  setTimeout(function() {
  loading.style.opacity = 0;
  playAudio("audio_game");
  }, 3000);
  setTimeout(function(){
    loading.style.zIndex =-999;
  },5000);  
  if (ReturnHealth() > 100)
  {
    NewGame();
  }
  else
  {
    respawnCube();
  }
});

loadGame.addEventListener("click", function() {
  loadGameProgress();
  StartDamage();
  fadeoutAudio("audio_main_menu");
  loading.style.zIndex = 9999;
  loading.style.opacity = 1;
  setTimeout(function() {
  mainMenu.style.display = "none";                                        //клик по load game - продолжить игру
  levelElement.style.display = "inline-block";
}, 2000);
  setTimeout(function() {
  loading.style.opacity = 0;
  playAudio("audio_game");
  }, 3000);
  setTimeout(function(){
    loading.style.zIndex =-999;
  },5000);  
  respawnCube();
});

closeControl.addEventListener("click", function() {            //закрытие вкладки с клавишами управления
  gameControls.style.display = "none";
});


openControl.addEventListener("click", function() {                    //открытие вкладки с клавишами управления
  gameControls.style.display = "flex";
});

document.addEventListener("keydown", function(event) {
    if (event.key === "m" || event.key === "ь") 
    {
      StopDamage();
      fadeoutAudio("audio_game");
      loading.style.zIndex = 9999;
      loading.style.opacity = 1;
      setTimeout(function() {
        levelElement.style.display = "none";
        mainMenu.style.display = "inline-block";                   //выход в главное меню по клавише m
      }, 2000);
      setTimeout(function() {
        loading.style.opacity = 0;
      }, 3000);   
      setTimeout(function() {
        playAudio("audio_main_menu");
        loading.style.zIndex =-999;
      },5000);   
      Restart();              
    }
  });

  const closeWindow = document.getElementById("quit");
closeWindow.addEventListener("click", function() {                             //полное закрытие игры,нажатие на close
  window.close();
});

function BackToMenu()
{
  StopDamage();
      loading.style.zIndex = 9999;
      loading.classList.add('show');
      setTimeout(function() 
      {
        levelElement.style.display = "none";
        mainMenu.style.display = "inline-block";
      }, 2000);
      setTimeout(function() 
      {
        loading.classList.add('hidden');
        loading.classList.remove('hidden');
        loading.classList.remove('show');
        loading.style.zIndex = -1;
      }, 3000);           
}