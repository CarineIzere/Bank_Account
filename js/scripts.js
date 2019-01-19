function Account(name, initial) {
  this.name = FullName;
  this.initial = initial;
}

Account.prototype.deposit = function(amount) {
  if (this._isPositive(amount)) {
    this.initial += amount;
    console.info(`Deposit: ${this.name} new balance is ${this.initial}`);
    return true;
  }
  return false;
}

Account.prototype.withdraw = function(amount) {
  if (this._isAllowed(amount)) {
    this.initial -= amount;
    console.info(`Withdraw: ${this.name} new balance is ${this.initial}`);
    return true;
  }
  return false;
}