"use strict";

class JourneyLog {
  constructor(journey = new Journey()) {
    this.history = [];
    this.currentJourney = journey;
  }

  _startLog = (station) => {
    this.currentJourney._startJourney(station);
  };

  _endLog = (station) => {
    this.currentJourney._endJourney(station);
  };
}
