describe("Station", function () {
  let station;

  beforeEach(function () {
    station = new Station("Woodford", 1);
  });

  it("it is created with a name", function () {
    expect(station.name).toBe("Woodford");
  });

  it("it is created with a name", function () {
    expect(station.zone).toEqual(1);
  });
});
