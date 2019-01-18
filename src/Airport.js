class Airport {
  constructor() {
  }

  land(plane) {
    plane.flying = false
    return plane
  };

  takeOff(plane){
    plane.flying = true
    return plane
  }
};