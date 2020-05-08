"use strict";

describe("Feature Test", function () {
  let travelCard;
  let station;
  let stationTwo;
  let stationThree;

  beforeEach(function () {
    travelCard = new TravelCard();
    station = new Station("Woodford", 1);
    stationTwo = new Station("Hampstead", 3);
    stationThree = new Station("Warren Street", 5);
  });

  describe("touch in and out", function () {
    it("can complete a full journey with the correct amount charged", function () {
      travelCard.topUp(20);
      travelCard.touchIn(station);
      travelCard.touchOut(stationThree);
      expect(travelCard.balance).toEqual(13);
    });

    it("gives a useful message about the journey completed", function () {
      travelCard.topUp(20);
      travelCard.touchIn(station);
      expect(travelCard.touchOut(stationTwo)).toBe(
        "Journey Ended at Hampstead (Zone 3), £5 Fare Deducted, Balance = £15"
      );
    });
  });

  describe("penalty fares", function () {
    it("charges penalty fare if touch in when isInJourney is true", function () {
      travelCard.topUp(20);
      travelCard.touchIn(station);
      travelCard.touchIn(stationTwo);
      expect(travelCard.balance).toEqual(13);
    });

    it("charges penalty fare if touch out when isInJourney is false", function () {
      travelCard.topUp(20);
      travelCard.touchIn(station);
      travelCard.touchOut(stationThree);
      travelCard.touchOut(stationTwo);
      expect(travelCard.balance).toEqual(6);
    });
  });
});
