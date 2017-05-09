describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("an airport exists", function() {
    expect(airport).toBeDefined();
  });

  it("can land", function() {
    airport.land('PLANE');
    expect(airport.planesArray()).toEqual(["PLANE"]);
  });

  it("can takeoff", function() {
    airport.land(plane)
    airport.takeoff(plane)
    expect(airport.planesArray()).toEqual([])
  });

  it("puts a plane into the hangar", function() {
    airport.land(plane)
    expect(airport.planesArray()).toEqual([plane])
  });

  it("throws an error if try to takeoff from empty hangar", function() {
    expect(function(){airport.takeoff(plane)}).toThrow('No planes here.');
  });

  // it("throws an error if try to takeoff from empty hangar", function() {
  //   airport.land(plane) * 11
  //   expect(airport.takeoff(plane)).toThrow(new Error('Oops, hangar full.'));
  // });
});
