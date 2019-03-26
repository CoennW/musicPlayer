document.addEventListener("DOMContentLoaded", function () {
    musicPlayer.loadSongs();
    
    $("#musicPlayerBtnPlay").click(function() {
        musicPlayer.playSong();
    });
    
    $("#musicPlayerBtnPause").click(function() {
        musicPlayer.pauseSong();
    });
    
    $("#musicPlayerBtnForward").click(function() {
        musicPlayer.forwardSong();
    });
    
    $("#musicPlayerBtnPrevious").click(function() {
        musicPlayer.previousSong();
    });
});