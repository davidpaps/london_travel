describe("TravelCard", function () {
  let travelCard;

  beforeEach(function () {
    travelCard = new TravelCard();
  });

  describe("balance", function () {
    it("itstarts with a balance of £0", function () {
      expect(travelCard.balance).toEqual(0);
    });
  });
});
