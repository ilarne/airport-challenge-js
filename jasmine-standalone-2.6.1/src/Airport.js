function Airport() {
  this._planes = [];
};

Airport.prototype.land = function(plane) {
  if (this._planes.length < 10) {
    this._planes.push(plane);
    return "The plane landed!";
  } else {
    throw ('Oops, hangar full.');
  };
};

Airport.prototype.planesArray = function() {
  return this._planes;
};

Airport.prototype.takeoff = function(plane) {
  if (this._planes.length > 0) {
    this._planes.pop(plane);
    return "The plane took off!";
  } else {
    throw ('No planes here.');
  };
};

var airport = new Airport();
var plane = new Plane();


airport.takeoff(plane);

console.log(airport);
