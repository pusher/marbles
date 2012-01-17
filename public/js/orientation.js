var OrientationHandler = function (onUpdate, interval) {
  this.startBeta = this.startGamma = null;
  this.beta = this.gamma = null;

  var self = this;
  window.ondeviceorientation = function(orientation) {
    self.beta = orientation.beta;
    self.gamma = orientation.gamma;

    if (self.startBeta === null) {
      self.startBeta = self.beta;
      self.startGamma = self.gamma;
    }
  }

  setInterval(function () {
    onUpdate(self.beta, self.gamma);
  }, interval || 100);
}