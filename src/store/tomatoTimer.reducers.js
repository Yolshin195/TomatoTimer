import { 
  ACTION_TICK_TIMER,
  ACTION_START_TIMER,
  ACTION_NEXT_TIMER,
  ACTION_PAUSE_TIMER,
  ACTION_SHOW_SETTINGS
} from './tomatoTimer.actions.js';

const initialState = {
  minutes: '00',
  seconds: '00',
  timerWork: false,
  timerCounter: 0,
  durationWorkCount: 4,
  durationWork: 1800,
  durationSmallBreak: 300,
  durationBigBreak: 1500,
  
  showSetting: false,

  navbarItems: 'ToDo,Settings',
  navbarTextLogo: 'Tomato Timer'
};

const tomatoTimerReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_TICK_TIMER:
      return {
        ...state,
        minutes: action.payload.minutes,
        seconds: action.payload.seconds
      }
    case ACTION_START_TIMER:
      return {
        ...state,
        timerCounter: action.payload,
        timerWork: true
      }
    case ACTION_NEXT_TIMER:
      return {
        ...state,
        timerCounter: action.payload,
        timerWork: true
      }
    case ACTION_PAUSE_TIMER:
      return {
        ...state,
        timerWork: false 
      }
    case ACTION_SHOW_SETTINGS:
      return {
        ...state,
        showSetting: action.payload,
      }
  }
  return state;
};

export default tomatoTimerReducer;
