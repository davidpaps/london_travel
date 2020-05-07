describe("TravelCard", function () {
  let travelCard;

  beforeEach(function () {
    travelCard = new TravelCard();
  });

  describe("balance", function () {
    it("it starts with a balance of £0", function () {
      expect(travelCard.balance).toEqual(0);
    });

    it("has a maximum balance of £90", function () {
      expect(travelCard.maxBalance).toEqual(90);
    });
  });

  describe("addMoney", function () {
    it("can add money to card", function () {
      travelCard.topUp(20);
      expect(travelCard.balance).toEqual(20);
    });

    it("provides a message displaying the amount added and the new balance", function () {
      travelCard.topUp(20);
      expect(travelCard.topUp(20)).toBe("£20 Sucessfully added, Balance = £40");
    });

    it("throws an error if max balance is exceeded during topUp", function () {
      travelCard.topUp(80);
      expect(function () {
        travelCard.topUp(11);
      }).toThrowError(
        "Can Not Exceed Maximum balance of £90, Max Top Up Avaliable = £10"
      );
    });
  });

  describe("touchIn", function () {
    it("changes inJourney to true", function () {
      travelCard.topUp(10);
      travelCard.touchIn("Woodford");
      expect(travelCard.isInJourney).toBe(true);
    });

    it("provides a message displaying the fare deduction and the new balance", function () {
      travelCard.topUp(10);
      expect(travelCard.touchIn("Woodford")).toBe(
        "Journey Started at Woodford"
      );
    });

    it("throws an error if not enough credit for a journey", function () {
      travelCard.topUp(2);
      expect(function () {
        travelCard.touchIn("Woodford");
      }).toThrowError(
        "Insufficent Funds, Top up a Minimum of £1 to Start a Journey"
      );
    });
  });

  describe("touchOut", function () {
    it("changes inJourney to false", function () {
      travelCard.topUp(10);
      travelCard.touchIn("Woodford");
      travelCard.touchOut("Hampstead");
      expect(travelCard.isInJourney).toBe(false);
    });

    it("provides a message displaying the fare deduction and the new balance", function () {
      travelCard.topUp(10);
      travelCard.touchIn("Woodford");
      expect(travelCard.touchOut("Hampstead")).toBe(
        "Journey Ended at Hampstead, £3 Fare Deducted, Balance = £7"
      );
    });
  });
});
