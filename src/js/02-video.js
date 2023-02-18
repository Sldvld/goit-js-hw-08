import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = function(data) {
    localStorage.setItem("videoplayer-current-time",
    JSON.stringify(data.seconds)
    );
    let time = Number(localStorage.getItem("videoplayer-current-time"));
    console.log(time);
}

    player.on("timeupdate", throttle(currentTime, 1000));

    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
        .then(function(seconds) {
    })  .catch(function(error) {
            switch (error.name) {
            case 'RangeError':
            break;
            default:
            break;
        }
    });
