'use strict'

describe("Plane", () => {
var plane;
var airport;

  beforeEach( () => {
    airport = new Airport;
    plane = new Plane;
  });

  it("status of plane equals false when asked if it's flying", () => {
    airport.land(plane)
    expect(plane.flying).toEqual(false)
  });

  it("status of plane equals false when plane has took off", () => {
    airport.takeOff(plane)
    expect(plane.flying).toEqual(true)
  })

  //CREATE SPY FOR AIRPORT
});
