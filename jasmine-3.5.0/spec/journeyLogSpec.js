describe("JourneyLog", function () {
  let journeyLog;

  beforeEach(function () {
    journeyLog = new JourneyLog();
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

  describe("reset", function () {
    it("resets the current journey once completed", function () {
      journeyLog._startLog("Woodford");
      journeyLog._endLog("Hampstead");
      journeyLog._resetCurrentJourney();
      expect(journeyLog.history.length).toEqual(1);
    });

    it("resets the current journey once completed", function () {
      journeyLog._startLog("Woodford");
      journeyLog._endLog("Hampstead");
      journeyLog._resetCurrentJourney();
      expect(journeyLog.currentJourney.startStation).toBe("");
      expect(journeyLog.currentJourney.endStation).toBe("");
    });
  });

  describe("immuteJourney", function () {
    it("journey log cannot be changed", function () {
      journeyLog._startLog("Woodford");
      journeyLog._endLog("Hampstead");
      journeyLog._resetCurrentJourney();
      journeyLog.history[0].startStation = "Waterloo";
      expect(journeyLog.history[0].startStation).toBe("Woodford");
    });
  });
});
