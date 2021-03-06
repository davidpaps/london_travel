"use strict";

describe("TravelCard", function () {
  let travelCard;
  let station;
  let stationOne;
  let stationTwo;
  let stationThree;
  let stationFour;
  let stationFive;
  let stationSix;

  beforeEach(function () {
    travelCard = new TravelCard();
    travelCard.topUp(20);

    station = {
      name: "Woodford",
      zone: 1,
    };

    stationOne = {
      name: "Hampstead",
      zone: 1,
    };

    stationTwo = {
      name: "Leyton",
      zone: 2,
    };

    stationThree = {
      name: "Walthamstow Station",
      zone: 3,
    };

    stationFour = {
      name: "Aldgate Eastt",
      zone: 4,
    };

    stationFive = {
      name: "Oxford Circus",
      zone: 5,
    };

    stationSix = {
      name: "Watford",
      zone: 6,
    };
  });

  describe("topUp", function () {
    it("can add money to card", function () {
      travelCard.topUp(20);
      expect(travelCard.balance).toEqual(40);
    });

    it("provides a message displaying the amount added and the new balance", function () {
      expect(travelCard.topUp(20)).toBe("£20 Sucessfully added, Balance = £40");
    });

    it("throws an error if max balance is exceeded during topUp", function () {
      travelCard.topUp(60);
      expect(function () {
        travelCard.topUp(11);
      }).toThrowError(
        "Can Not Exceed Maximum balance of £90, Max Top Up Avaliable = £10"
      );
    });
  });

  describe("touchIn", function () {
    it("changes inJourney to true", function () {
      travelCard.touchIn(station);
      expect(travelCard.isInJourney).toBe(true);
    });

    it("provides a message displaying the fare deduction and the new balance", function () {
      expect(travelCard.touchIn(station)).toBe(
        "Journey Started at Woodford (Zone 1)"
      );
    });

    it("throws an error if not enough credit for a journey", function () {
      travelCard.topUp(-18);
      expect(function () {
        travelCard.touchIn(station);
      }).toThrowError(
        "Insufficent Funds, Top up a Minimum of £1 to Start a Journey"
      );
    });

    it("charges penalty fare if touch in when isInJourney is true", function () {
      travelCard.touchIn(station);
      travelCard.touchIn(stationOne);
      expect(travelCard.balance).toEqual(13);
    });
  });

  describe("touchOut", function () {
    it("changes inJourney to false", function () {
      travelCard.touchIn(station);
      travelCard.touchOut(stationOne);
      expect(travelCard.isInJourney).toBe(false);
    });

    it("provides a message displaying the fare deduction and the new balance", function () {
      travelCard.touchIn(station);
      expect(travelCard.touchOut(stationOne)).toBe(
        "Journey Ended at Hampstead (Zone 1), £3 Fare Deducted, Balance = £17"
      );
    });

    it("charges penalty fare if touch out when isInJourney is false", function () {
      travelCard.touchIn(station);
      travelCard.touchOut(stationOne);
      travelCard.touchOut(stationOne);
      expect(travelCard.balance).toEqual(10);
    });
  });

  describe("calculate fare", function () {
    it("charges £3 for a journey in the same zones", function () {
      travelCard.touchIn(station);
      travelCard.touchOut(stationOne);
      expect(travelCard.balance).toEqual(17);
    });

    it("charges £4 for a journey accross 1 zone number", function () {
      travelCard.touchIn(stationOne);
      travelCard.touchOut(stationTwo);
      expect(travelCard.balance).toEqual(16);
    });

    it("charges £5 for a journey across 2 zone numbers", function () {
      travelCard.touchIn(stationOne);
      travelCard.touchOut(stationThree);
      expect(travelCard.balance).toEqual(15);
    });

    it("charges £6 for a journey accross 3 zones", function () {
      travelCard.touchIn(stationOne);
      travelCard.touchOut(stationFour);
      expect(travelCard.balance).toEqual(14);
    });

    it("charges £7 for a journey accross 4 zones", function () {
      travelCard.touchIn(stationOne);
      travelCard.touchOut(stationFive);
      expect(travelCard.balance).toEqual(13);
    });

    it("charges a max of £7 for a journey accross 4+ zones", function () {
      travelCard.touchIn(stationOne);
      travelCard.touchOut(stationSix);
      expect(travelCard.balance).toEqual(13);
    });
  });
});
