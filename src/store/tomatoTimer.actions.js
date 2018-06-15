import time from '../lib/helpers/time';
import { timer } from '../index';
import startTimer from '../lib/tomatoTimer'

export const ACTION_TICK_TIMER = 'ACTION_TICK_TIMER';
export const ACTION_START_TIMER = 'ACTION_START_TIMER';
export const ACTION_PAUSE_TIMER = 'ACTION_PAUSE_TIMER';
export const ACTION_SHOW_SETTINGS = 'ACTION_SHOW_SETTINGS';

export const actionStartTimer = function({timerCounter, durationWorkCount,durationWork,durationSmallBreak,durationBigBreak}) {
  var counter = startTimer(timer,timerCounter, durationWorkCount,durationWork,durationSmallBreak,durationBigBreak)
  return {
    type: ACTION_START_TIMER,
    payload: counter
  }
};

export const actionPauseTimer = function() {
  timer.pause();

  return {
    type: ACTION_PAUSE_TIMER,
    payload: null 
  }
};

export const tickTimer = function(t) {
  const {min, sec} = time(t);
  return {
    type: ACTION_TICK_TIMER,
    payload: {minutes: min, seconds: sec} 
  }
}

export const actionShowSettings = function(show) {
  console.log('actionShowSettings: ', show);
  return {
    type: ACTION_SHOW_SETTINGS,
    payload: show
  }
}
