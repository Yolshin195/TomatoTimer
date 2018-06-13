/**
 * expand prototype
 * @param {ptototype} proto
 */
function Events (proto) {

  /**
   * Emit an event
   *
   * @param {String} event
   */
  proto.emit = function(event, obj) {
    if( !this._events || !this._events[event] ) {
      return;
    }

    this._events[event].forEach(function(func) {
      func.call(func, obj);
    });
  }

  /**
   * Bind an event
   *
   * @param {String} event
   * @param {function} calback
   */
  proto.on = function(event, calback) {
    if( !this._events ) {
      this._events = {}
    }
    if( !this._events[event] ) {
      this._events[event] = [];
    }

    this._events[event].push(calback);
  }
}

export default Events;
