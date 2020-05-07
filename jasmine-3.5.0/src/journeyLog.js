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

  _resetCurrentJourney = () => {
    this.history.push(this._immuteJourney(this.currentJourney));
    this.currentJourney = new Journey();
  };

  _immuteJourney = (journey) => {
    return Object.freeze(journey);
  };
}
