function saveGameProgress(health, animationSpeed, saveHP,PlayerHealth) {
    localStorage.setItem('health', health);
    localStorage.setItem('animationSpeed', animationSpeed);
    localStorage.setItem('saveHP', saveHP);
  }
  
  function loadGameProgress() {
    const savedHealth = localStorage.getItem('health');
    const savedAnimationSpeed = localStorage.getItem('animationSpeed');
    const savedSaveHP = localStorage.getItem('saveHP');
  
    if (savedHealth) {
      health = Number(savedHealth);
    }
    console.log(health);
    if (savedAnimationSpeed) {
      AnimationSpeed = Number(savedAnimationSpeed);
    }
  
    if (savedSaveHP) {
      saveHP = Number(savedSaveHP);
    }
  }