// change require to es6 import style
import $ from 'jquery';
import './style.scss';

let currTime = 0;

function incrementTime() {
  currTime += 1;
  $('#main').html(`youve been on this pagee for ${currTime} seconds`);
}

const overall = setInterval(incrementTime, 1000);
overall();
