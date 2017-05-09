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
    expect(airport.planes).toEqual(["PLANE"]);
  });

  it("can takeoff", function() {
    airport.land('plane')
    airport.takeoff('plane')
    expect(airport.planes).toEqual([])
  });

  it("puts a plane into the hangar", function() {
    airport.land(plane)
    expect(airport.planes).toEqual([plane])
  });
});
