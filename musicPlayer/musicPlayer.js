var musicPlayer = (function () {

    my = {};

    // *** Private properties *** //
    var songs = [], //alle audio objecten
        song = 0, //de song die speelt
        length = 0; //totaal aantal songs

    // *** Public properties *** //


    // *** Private functions *** //


    // *** Public functions *** //
    my.loadSongs = function () {
        var i = 0;
        $("#musicPlayerList li").each(function (index, value) {
            var line = '<audio id="audio-' + i + '"><source src="' + $(this).attr("ref") + '" type="audio/mpeg"></audio>';
            $(this).append(line);


            songs.push($("#audio-" + i));

            i++;
        });

        length = i - 1;

    }

    my.playSong = function () {
        songs[song].get(0).play();
        console.log("Speelt nu af:" + songs[song].get(0).innerHTML);
        console.log(songs[song]);

        //Mooie extra: wanneer een song wordt gespeeld moet er bij de li een "active" class bij....
        $("li").removeClass("active");
        $("li").eq(song).addClass("active");


        songs[song].get(0).onended = function () {
            my.forwardSong();
        };
    }

    my.pauseSong = function () {
        //hier moet iets komen...

        songs[song].get(0).pause();
    }
    
    //Reset song naar time = 0;
    my.stopSong = function () {
        songs[song].get(0).currentTime = 0;
    }

    my.previousSong = function () {
        //verander hier de property "song"

        if (song == 0) {

            this.pauseSong();
            this.stopSong();
            song = length;
            this.playSong();
        } else {

            this.pauseSong();
            this.stopSong();
            song = song - 1;
            this.playSong();

        }
    }

    my.forwardSong = function () {
        //verander hier de property "song"
        if (song < length) {

            this.pauseSong();
            this.stopSong();
            song = song + 1;
            this.playSong();
        } else {

            this.pauseSong();
            this.stopSong();
            song = 0;
            this.playSong();

        }

    }

    return my;
}());
