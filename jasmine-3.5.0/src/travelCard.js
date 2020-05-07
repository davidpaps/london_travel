class TravelCard {
  constructor() {
    this.balance = 0;
    this.maxBalance = 90;
    this.fare = 3;
    this.isInJourney = false;
    this.startStation = "";
  }

  topUp = (money) => {
    if (this._notExceedMaxBalance(money)) {
      this._addCredit(money);
      return `£${money} Sucessfully added, Balance = £${this.balance}`;
    } else {
      throw new Error(
        `Can Not Exceed Maximum balance of £${
          this.maxBalance
        }, Max Top Up Avaliable = £${this.maxBalance - this.balance}`
      );
    }
  };

  touchIn = (station) => {
    if (this._minFare()) {
      this.isInJourney = true;
      this.startStation = station;
      return `Journey Started at ${station}`;
    } else {
      throw new Error(
        `Insufficent Funds, Top up a Minimum of £${
          this.fare - this.balance
        } to Start a Journey`
      );
    }
  };

  touchOut = (station) => {
    this._deductFare();
    this.isInJourney = false;
    return `Journey Ended at ${station}, £${this.fare} Fare Deducted, Balance = £${this.balance}`;
  };

  _notExceedMaxBalance = (money) => {
    return this.balance + money <= this.maxBalance;
  };

  _minFare = () => {
    return this.balance >= this.fare;
  };

  _addCredit = (money) => {
    this.balance += money;
  };

  _deductFare = () => {
    this.balance -= this.fare;
  };
}
