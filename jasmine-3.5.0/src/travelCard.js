class TravelCard {
  constructor() {
    this.balance = 0;
    this.maxBalance = 90;
  }

  topUp = (money) => {
    if (this._exceedMaxBalance(money)) {
      this._add(money);
      return `£${money} Sucessfully added, Balance = £${this.balance}`;
    } else {
      throw new Error(
        `Can Not Exceed Maximum balance of £${
          this.maxBalance
        }, Max Top Up Avaliable = £${this.maxBalance - this.balance}`
      );
    }
  };

  deductFare = (money) => {
    this._minus(money);
    return `£${money} Fare Deducted, Balance = £${this.balance}`;
  };

  _exceedMaxBalance = (money) => {
    return this.balance + money <= this.maxBalance;
  };

  _add = (money) => {
    this.balance += money;
  };

  _minus = (money) => {
    this.balance -= money;
  };
}
