describe("Airport", () => {
  var airport;

  beforeEach( () => {
    airport = new Airport();
    plane = new Plane();
  });

  it("airport now lands plane", () => {
    expect(airport.land(plane)).toEqual(plane);
  });

});