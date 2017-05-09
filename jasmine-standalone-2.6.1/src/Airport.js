function Airport() {
  this._planes = [];
  this._hangarCapacity = 10
};

Airport.prototype.land = function(plane) {
  if (this._planes.length < this._hangarCapacity) {
    this._planes.push(plane);
    return "The plane landed!";
  } else {
    throw ('Oops, hangar full.');
  };
};

// Airport.prototype.planesArray = function() {
//   return this._planes;
// }; ------> is there a reason for these reader functions over reading directly from object?

// Airport.prototype._hangarCapacity = function() {
//    return this._hangarCapacity;
// };

// Airport.prototype._setCapacity = function(number) {
//    this._hangarCapacity = number;
// }; --> you don't even need this?
// ------> you can just write airport._hangarCapacity = 15; ??? Convention?

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

airport.land(plane);

console.log(airport._planes);
