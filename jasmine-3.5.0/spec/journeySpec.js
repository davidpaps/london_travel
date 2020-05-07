"use strict";

describe("Journey", function () {
  let journey;

  beforeEach(function () {
    journey = new Journey();
  });

  describe("startJourney", function () {
    it("logs the starting station", function () {
      journey._startJourney("Woodford");
      expect(journey.startStation).toBe("Woodford");
    });
  });

  describe("endJourney", function () {
    it("logs the end station", function () {
      journey._endJourney("Hampstead");
      expect(journey.endStation).toBe("Hampstead");
    });
  });
});
