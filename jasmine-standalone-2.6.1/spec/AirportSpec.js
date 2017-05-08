describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it("an airport exists", function() {
    expect(airport).toBeDefined();
  });

  it("can land planes", function() {
    airport.land('PLANE');
    expect(airport.planes).toEqual(["PLANE"]);
  });

  it("can takeoff plane", function() {
    airport.land('plane')
    airport.takeoff('plane')
    expect(airport.planes).toEqual([])
  });
});
