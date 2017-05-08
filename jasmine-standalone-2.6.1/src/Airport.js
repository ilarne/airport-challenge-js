function Airport() {
};

Airport.prototype.land = function(plane) {
  this.planes = plane
  return "The plane has landed!"
};
