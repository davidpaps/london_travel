"use strict";

class Journey {
  constructor() {
    this.startStation = "";
    this.endStation = "";
  }

  _startJourney = (station) => {
    this.startStation = station;
  };

  _endJourney = (station) => {
    this.endStation = station;
  };
}
