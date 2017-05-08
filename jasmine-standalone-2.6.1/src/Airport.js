function Airport() {
  this.planes = []
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
  return "The plane has landed!";
};

Airport.prototype.takeoff = function(plane) {
  this.planes.pop(plane);
  return "The plane took off!";
};
