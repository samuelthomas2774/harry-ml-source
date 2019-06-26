/*
    User-agent
    Checks browser to see if it can use blur.
    Blur's nice. I guess.
*/

import { startblur } from './blur.js';

function edge() {
    if(window.navigator.userAgent.indexOf("Edge") > -1 || navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        return true;
    } else {
        return false;
    }
}

if(edge() === true) {
    console.log('Client can use blur');
    startblur();
} else {
    console.log('Client can\'t use blur');
}
