function Mediator() {};

/*
 * @param {Component} sender
 * @param {String} event
 */
Mediator.prototype.notify = function(sender, event) {
  console.log(sender, event);
}

function Component(dialog) {
  this.dialog = dialog;
}

Component.prototype.click = function() {
  this.dialog.notify(this, 'click');
}

var mediator = new Mediator();

var component = new Component(mediator);

component.click();
