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


var airport = new Airport();
var plane = new Plane();

airport.land(plane);
airport.land(plane);

console.log(airport);
