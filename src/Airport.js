class Airport {
  constructor() {
  }

  land(plane) {
    plane.isLanded = true
    return plane
  };

  takeoff(plane){
    plane.isLanded = false
    return plane
  }
};