'use strict';
describe("Airport", () => {
  var airport;
  var plane;

  beforeEach( () => {
    airport = new Airport();
    plane = new Plane();
  });

  it("airport now lands plane", () => {
    expect(airport.land(plane)).toEqual(plane);
  });

  it("airport takes off", () => {
    expect(airport.takeOff(plane)).toEqual(plane);
  });

  // it("throws error if plane has already taken off from airport", () => {
  //   plane = new Plane;
  //   airport.takeOff(plane);
  //   expect(function(){
  //     airport.takeOff(plane);
  //   }).toThrowError("plane has taken off already")

  // });

});
  // it("cheks for 1 argument", () => {
  //   expect(airport.land).toHaveBeenCalledWith(plane)
  // });
  // CHECKS FOR NUMBER OF ARGUMENTS ON SPIES, NOT FUNCTIONS