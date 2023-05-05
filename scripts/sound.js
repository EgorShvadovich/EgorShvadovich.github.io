function playAudio(audioID) {
    var audio = document.getElementById(audioID);
    audio.play();
  }
  const createAudio = (audioId) => {
    const audio = new Audio(`sound/${audioId}.mp3`);
    return audio;
  };
  function fadeoutAudio(audioID) {
    var audio = document.getElementById(audioID);
    var fadeoutInterval = setInterval(function() {
      if (audio.volume > 0.1) {
        audio.volume -= 0.1;
      } else {
        clearInterval(fadeoutInterval);
        audio.pause();
        audio.volume = 1.0;
      }
    }, 200);
  }