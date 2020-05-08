"use strict";

class TravelCard {
  constructor(journey = new JourneyLog()) {
    this.balance = 0;
    this.maxBalance = 90;
    this.minFare = 3;
    this.penalty = 7;
    this.isInJourney = false;
    this.journey = journey;
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
    if (this.isInJourney) {
      this._incomplete();
    }

    if (this._minBalance()) {
      this.isInJourney = true;
      this.journey._startLog(station);
      return `Journey Started at ${station.name} (Zone ${station.zone})`;
    } else {
      throw new Error(
        `Insufficent Funds, Top up a Minimum of £${
          this.minFare - this.balance
        } to Start a Journey`
      );
    }
  };

  touchOut = (station) => {
    this.journey._endLog(station);
    let charge = 0;
    !this.isInJourney
      ? (charge = this.penalty)
      : (charge = this._calculateFare());
    this._deductFare(charge);
    this._complete();
    return `Journey Ended at ${station.name}, £${charge} Fare Deducted, Balance = £${this.balance}`;
  };

  _calculateFare = () => {
    let fare =
      this.journey.currentJourney.startStation.zone -
      this.journey.currentJourney.endStation.zone;
    return this.minFare + Math.abs(fare);
  };

  _notExceedMaxBalance = (money) => {
    return this.balance + money <= this.maxBalance;
  };

  _minBalance = () => {
    return this.balance >= this.minFare;
  };

  _addCredit = (money) => {
    this.balance += money;
  };

  _deductFare = (charge) => {
    this.balance -= charge;
  };

  _incomplete = () => {
    this._deductFare(this.penalty);
    this.journey._resetCurrentJourney();
    this.isInJourney = false;
    return `Previous Journey Incomplete, £${this.penalty} charged, current balance = £${this.balance}`;
  };

  _complete = () => {
    this.isInJourney = false;
    this.journey._resetCurrentJourney();
  };
}
