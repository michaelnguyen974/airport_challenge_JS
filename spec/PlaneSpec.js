'use strict'
describe("Plane", () => {
var plane;
var airport;
  beforeEach( () => {
    airport = new Airport;
    plane = new Plane;
  });

  it("status of plane equals true when landed", () => {
    airport.land(plane)
    expect(plane.isLanded).toEqual(true)
  });

  it("status of plane equals false when plane has took off", () => {
    airport.takeoff(plane)
    expect(plane.isLanded).toEqual(false)
  })
  
});
