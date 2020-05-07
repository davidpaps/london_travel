describe("TravelCard", function () {
  let travelCard;

  beforeEach(function () {
    travelCard = new TravelCard();
  });

  describe("balance", function () {
    it("it starts with a balance of £0", function () {
      expect(travelCard.balance).toEqual(0);
    });
  });

  describe("addMoney", function () {
    it("can add money to card", function () {
      travelCard.addMoney(20);
      expect(travelCard.balance).toEqual(20);
    });

    it("provides a message displaying the amount added and the new total balance", function () {
      travelCard.addMoney(20);
      expect(travelCard.addMoney(20)).toEqual(
        "£20 Sucessfully added, Balance = £40"
      );
    });
  });
});
