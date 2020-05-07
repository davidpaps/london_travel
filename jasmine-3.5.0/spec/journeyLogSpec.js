describe("JourneyLog", function () {
  let journeyLog;
  let station;
  let stationTwo;

  beforeEach(function () {
    journeyLog = new JourneyLog();

    station = {
      name: "Woodford",
      zone: 1,
    };

    stationTwo = {
      name: "Hampstead",
      zone: 1,
    };
  });

  describe("startLog", function () {
    it("logs the starting station", function () {
      journeyLog._startLog(station);
      expect(journeyLog.currentJourney.startStation.name).toEqual("Woodford");
    });
  });

  describe("endLog", function () {
    it("logs the end station", function () {
      journeyLog._endLog(stationTwo);
      expect(journeyLog.currentJourney.endStation.name).toBe("Hampstead");
    });
  });

  describe("reset", function () {
    it("resets the current journey once completed", function () {
      journeyLog._startLog(station);
      journeyLog._endLog(stationTwo);
      journeyLog._resetCurrentJourney();
      expect(journeyLog.history.length).toEqual(1);
    });

    it("resets the current journey once completed", function () {
      journeyLog._startLog(station);
      journeyLog._endLog(stationTwo);
      journeyLog._resetCurrentJourney();
      expect(journeyLog.currentJourney.startStation).toBe("");
      expect(journeyLog.currentJourney.endStation).toBe("");
    });
  });

  describe("immuteJourney", function () {
    it("journey log cannot be changed", function () {
      journeyLog._startLog(station);
      journeyLog._endLog(stationTwo);
      journeyLog._resetCurrentJourney();
      journeyLog.history[0].startStation = "Waterloo";
      expect(journeyLog.history[0].startStation.name).toBe("Woodford");
    });
  });
});
