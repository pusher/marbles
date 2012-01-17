var OrientationHandler = function (onUpdate, interval) {
  this.startBeta = this.startGamma = null;
  this.beta = this.gamma = null;

  window.addEventListener(
    'deviceorientation',
    this.onDeviceOrientation.bind(this)
  );

  setInterval(function () {
    onUpdate(this.beta, this.gamma);
  }.bind(this), interval || 100);
}

OrientationHandler.prototype.onDeviceOrientation = function (orientation) {
  this.beta = orientation.beta;
  this.gamma = orientation.gamma;

  if (this.startBeta === null) {
    this.startBeta = this.beta;
    this.startGamma = this.gamma;
  }
}
