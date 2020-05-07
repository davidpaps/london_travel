class TravelCard {
  constructor() {
    this.balance = 0;
    this.maxBalance = 90;
  }

  topUp = (money) => {
    if (this.balance + money <= this.maxBalance) {
      this.balance += money;
      return `£${money} Sucessfully added, Balance = £${this.balance}`;
    } else {
      throw new Error(
        `Can Not Exceed Maximum balance of £${
          this.maxBalance
        }, Max Top Up Avaliable = £${this.maxBalance - this.balance}`
      );
    }
  };
}
