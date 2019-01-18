class Airport {
  constructor() {
  }

  land(plane) {
    plane.flying = false
    plane.isLanded = true
    return plane
  };

  takeOff(plane){
    plane.flying = true
    plane.isLanded = false
    return plane
  }
};