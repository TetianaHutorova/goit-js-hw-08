import Player from '@vimeo/player';
import common from '../common.json';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on(
  'timeupdate',
  throttle(function (evt) {
    localStorage.setItem(common.LSVIDEO, JSON.stringify(evt.seconds));
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem(common.LSVIDEO))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
