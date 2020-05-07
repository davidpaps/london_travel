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

    it("provides a message displaying the amount added and the new total balance", function () {
      travelCard.topUp(20);
      expect(travelCard.topUp(20)).toEqual(
        "£20 Sucessfully added, Balance = £40"
      );
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
});
