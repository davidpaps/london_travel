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

  describe("deductFare", function () {
    it("deducts the standard fare", function () {
      travelCard.topUp(10);
      travelCard.deductFare(3);
      expect(travelCard.balance).toEqual(7);
    });

    it("provides a message displaying the fare deduction and the new balance", function () {
      travelCard.topUp(10);
      expect(travelCard.deductFare(3)).toBe("£3 Fare Deducted, Balance = £7");
    });
  });

  describe("touchIn", function () {
    it("changes inJourney to false", function () {
      travelCard.touchIn("Woodford");
      expect(travelCard.isInJourney).toBe(true);
    });
    it("provides a message displaying the fare deduction and the new balance", function () {
      expect(travelCard.touchIn("Woodford")).toBe(
        "Journey Started at Woodford"
      );
    });
  });
});
