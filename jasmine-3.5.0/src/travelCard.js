class TravelCard {
  constructor() {
    this.balance = 0;
  }

  addMoney = (money) => {
    this.balance += money;
    return `£${money} Sucessfully added, Balance = £${this.balance}`;
  };
}
