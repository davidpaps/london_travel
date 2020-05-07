"use strict";

describe("TravelCard", function () {
  let travelCard;

  beforeEach(function () {
    travelCard = new TravelCard();
    travelCard.topUp(20);
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
      travelCard.touchIn("Woodford");
      expect(travelCard.isInJourney).toBe(true);
    });

    it("provides a message displaying the fare deduction and the new balance", function () {
      expect(travelCard.touchIn("Woodford")).toBe(
        "Journey Started at Woodford"
      );
    });

    it("throws an error if not enough credit for a journey", function () {
      travelCard.topUp(-18);
      expect(function () {
        travelCard.touchIn("Woodford");
      }).toThrowError(
        "Insufficent Funds, Top up a Minimum of £1 to Start a Journey"
      );
    });

    it("charges penalty fare if touch in when isInJourney is true", function () {
      travelCard.touchIn("Woodford");
      travelCard.touchIn("Hampstead");
      expect(travelCard.balance).toEqual(15);
    });

    it("provides a message displaying the penalty fare deduction and the new balance", function () {
      travelCard.touchIn("Woodford");
      expect(travelCard.touchIn("Hampstead")).toBe(
        "Previous Journey Incomplete, £5 charged, current balance = £15"
      );
    });
  });

  describe("touchOut", function () {
    it("changes inJourney to false", function () {
      travelCard.touchIn("Woodford");
      travelCard.touchOut("Hampstead");
      expect(travelCard.isInJourney).toBe(false);
    });

    it("provides a message displaying the fare deduction and the new balance", function () {
      travelCard.touchIn("Woodford");
      expect(travelCard.touchOut("Hampstead")).toBe(
        "Journey Ended at Hampstead, £3 Fare Deducted, Balance = £17"
      );
    });
  });
});
