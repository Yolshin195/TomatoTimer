import events from './helpers/events';

function Timer() {
  this.startTime = null;
  this.remained = null;
  this.duration = null;
  this.endTime = null;

  this.timer = null;
}

Timer.prototype = {

  start: function() {
    if(this.timer) {
      return;
    }

    var time = this.remained ? this.remained : this.duration * 1000;

    this.startTime = Date.now();
    this.endTime = this.startTime + time;

    this.timer = setInterval(this.tick.bind(this), 138);
    this.emit('start');
    
  },

  stop: function(mesageFlag) {
    this.remained = this.endTime = this.startTime = null;
    
    clearInterval(this.timer);

    this.timer = null;
    if(!mesageFlag) {
      this.emit('stop');
    }
  },

  pause: function() {
    clearInterval(this.timer);
    this.timer = null;

    this.remained = this.endTime - Date.now();
    this.startTime = this.endTime = null;

    this.emit('pause');
  },

  tick: function() {
    var time = (this.endTime - Date.now()) / 1000;

    if( time < 0 ) {
      this.emit('tick', 0);

      return this.stop();
    }

    this.emit('tick', time);
  },

  setDuration: function(time) {
    this.duration = time;
  },

  isTimer: function() {
    return this.timer !== null; 
  }
}

events(Timer.prototype);

export default Timer; 
