window.onload = function() {
    document.body.addEventListener('click', function() {
      var audio = document.getElementById('audio');
      audio.play().catch(error => {
        console.error("Error playing the audio:", error);
      });
    });
  };