"use strict";

describe("Journey", function () {
  let journey;
  let station;
  let stationTwo;

  beforeEach(function () {
    journey = new Journey();

    station = {
      name: "Woodford",
      zone: 1,
    };

    stationTwo = {
      name: "Hampstead",
      zone: 1,
    };
  });

  describe("startJourney", function () {
    it("logs the starting station", function () {
      journey._startJourney(station);
      expect(journey.startStation.name).toBe("Woodford");
    });
  });

  describe("endJourney", function () {
    it("logs the end station", function () {
      journey._endJourney(stationTwo);
      expect(journey.endStation.name).toBe("Hampstead");
    });
  });
});
