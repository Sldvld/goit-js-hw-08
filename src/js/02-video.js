import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_CURRENT_TIME = "videoplayer-current-time";

const currentTime = function(data) {
    localStorage.setItem(KEY_CURRENT_TIME,
    JSON.stringify(data.seconds)
    );
    let time = Number(localStorage.getItem(KEY_CURRENT_TIME));
    console.log(time);
}
    player.on("timeupdate", throttle(currentTime, 1000));
    player.setCurrentTime(localStorage.getItem(KEY_CURRENT_TIME));
