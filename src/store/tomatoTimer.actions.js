import time from '../lib/helpers/time';
import { timer } from '../index';
import startTimer from '../lib/tomatoTimer'

export const ACTION_TICK_TIMER = 'ACTION_TICK_TIMER';
export const ACTION_START_TIMER = 'ACTION_START_TIMER';
export const ACTION_STOP_TIMER = 'ACTION_STOP_TIMER';
export const ACTION_NEXT_TIMER = 'ACTION_NEXT_TIMER';
export const ACTION_PAUSE_TIMER = 'ACTION_PAUSE_TIMER';

export const actionStopTimer = function() {
  return {
    type: ACTION_STOP_TIMER 
  }
}

export const actionStartTimer = function({timerCounter, durationWorkCount,durationWork,durationSmallBreak,durationBigBreak}) {
  var counter = startTimer(false, timer,timerCounter, durationWorkCount,durationWork,durationSmallBreak,durationBigBreak)
  return {
    type: ACTION_START_TIMER,
    payload: counter
  }
};

export const actionNextTimer = function({timerCounter, durationWorkCount,durationWork,durationSmallBreak,durationBigBreak}) {
  var counter = startTimer(true, timer,timerCounter, durationWorkCount,durationWork,durationSmallBreak,durationBigBreak)
  return {
    type: ACTION_NEXT_TIMER,
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
