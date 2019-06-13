/***
JS by https://codepen.io/GRSimon/
***/


var songList = [
    'audio/Adam Levine - Lost Stars (Lyric Video).mp3',
    'audio/Adele - Someone Like You.mp3',
    'audio/Ariana Grande Into You Lyrics (+Audio).mp3',
    'audio/Ashley Tisdale - Love Me & Let Me Go (Official Video).mp3',
    'audio/Avril Lavigne - Hush Hush [Lyrics].mp3',
    'audio/Birdy - Skinny Love [Official Music Video].mp3',
    'audio/Blue Beyonce Lyrics.mp3',
    'audio/Céline Dion - Ashes (from Deadpool 2 Motion Picture Soundtrack).mp3',
    'audio/Christina Perri - A Thousand Years (Lyrics).mp3',
    'audio/Ellie Goulding - How Long Will I Love You.mp3',
    'audio/Emeli Sandé - Read all about it Lyrics.mp3',
    'audio/Enrique Iglesias - Heartbeat ft. Nicole Scherzinger.mp3',
    'audio/Grow Old With Me.mp3',
    'audio/Hymn for the Missing - Red Lyrics.mp3',
    'audio/I Wanna Grow Old With You (Westlife Lyrics) - UP Movie Version.mp3',
    'audio/Jacob Lee - I Belong to You (Official Lyric Video).mp3',
    'audio/James Blunt - Carry You Home (Video).mp3',
    'audio/John Legend - Love Me NowLyrics on Screen.mp3',
    'audio/Justin Timberlake, Anna Kendrick - True Colors (Lyric).mp3',
    'audio/Lara Fabian - Choose What You Love Most (Let It Kill You) - (Official Video).mp3',
    'audio/Little Mix - Secret Love Song ft. Jason Derulo (Lyrics & Pictures).mp3',
    'audio/No One - Alicia Keys (Lyrics).mp3',
    'audio/Photograph - Ed Sheeran (Lyrics).mp3',
    'audio/Pieces - Red - Lyrics.mp3',
    'audio/Pink -Try (Lyrics).mp3',
    'audio/Sam Smith - Fire On Fire (From Watership Down).mp3',
    "audio/Sia - I'm Still Here (Audio).mp3",
    "audio/We The Kings (feat. Demi Lovato) - We'll Be A Dream.mp3",
    "audio/Whitney Houston I will always Love You Lyrics.mp3"
];

$(document).ready(function() {
   document.getElementById('audioSource').src = songList[Math.floor(Math.random() * songList.length)];
   console.log(songList[Math.floor(Math.random() * songList.length)]);
});

var getaudio = $('#player')[0],
    mouseovertimer,
    audiostatus = 'off',
    playerControls = ".player-controls";

$(document).on('mouseenter', playerControls, function() {

    if (!mouseovertimer) {

        mouseovertimer = window.setTimeout(function() {

            mouseovertimer = null;

            if (!$(playerControls).hasClass("playing")) {

                getaudio.load();
                getaudio.play();
                $(playerControls).addClass('playing');
                return false;

            }

        }, 2500);

    }

});

$(document).on('mouseleave', playerControls, function() {

    if (mouseovertimer) {

        window.clearTimeout(mouseovertimer);
        mouseovertimer = null;

    }

});

$(document).on('click touch', playerControls, function(e) {

    e.preventDefault();

    if (!$(playerControls).hasClass("playing")) {

        if (audiostatus == 'off') {

            $(playerControls).addClass('playing');
            getaudio.load();
            getaudio.play();
            window.clearTimeout(mouseovertimer);
            audiostatus = 'on';
            return false;

        } else if (audiostatus == 'on') {

            $(playerControls).addClass('playing');
            getaudio.play();

        }

    } else if ($(playerControls).hasClass("playing")) {

        getaudio.pause();
        $(playerControls).removeClass('playing');
        window.clearTimeout(mouseovertimer);
        audiostatus = 'on';

    }

    return false;

});

$('#player').on('ended', function() {

    $(playerControls).removeClass('playing');
    audiostatus = 'off';

});
