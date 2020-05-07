"use strict";

describe("JourneyLog", function () {
  let journeyLog;
  let journey;

  beforeEach(function () {
    journeyLog = new JourneyLog();
    journey = jasmine.createSpyObj("journey", ["_startJourney", "_endJourney"]);
  });

  describe("startLog", function () {
    it("logs the starting station", function () {
      journeyLog._startLog("Woodford");
      expect(journeyLog.currentJourney.startStation).toEqual("Woodford");
    });
  });

  describe("endLog", function () {
    it("logs the end station", function () {
      journeyLog._endLog("Hampstead");
      expect(journeyLog.currentJourney.endStation).toBe("Hampstead");
    });
  });
});
