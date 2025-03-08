onload = () =>{
        document.body.classList.remove("container");
};
window.addEventListener('load', function() {
        const audio = document.getElementById('background-music');
        audio.muted = false; // Mengaktifkan suara
      });
      
      document.getElementById('play-button').addEventListener('click', function() {
        const music = document.getElementById('background-music');
        if (music.paused) {
            music.play();
            this.textContent = 'Pause Music'; // Ubah teks tombol
        } else {
            music.pause();
            this.textContent = 'Play Music';
        }
      });