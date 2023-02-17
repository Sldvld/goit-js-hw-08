import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


    player.on('timeupdate', function(data) {{
            duration: 61.857
            percent: 0.049
            seconds: 3.034
    }
        console.log('data', data);
    });

    player.setCurrentTime(30).then(function(seconds) {
    }).catch(function(error) {
            switch (error.name) {
            case 'RangeError':
            break;
            default:
            break;
        }
    });
