/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

export default class Character {
  constructor() {
    this.health = 100;
    this.attack = 10;
    this.defence = 40;
    this._powerMode = 0;
    this._attacksLeft = 0;
  }

  set powerMode(value) {
    if (!this._powerMode) {
      this._powerMode = value;
      this._attacksLeft = 3;
      this.doubleParameters();
    } else {
      throw new Error('Усиление уже использовалось.');
    }
  }

  powerModeOn() {
    this.powerMode = 1;
  }

  doubleParameters() {
    [
      this.health,
      this.attack,
      this.defence,
    ] = [
      this.health,
      this.attack,
      this.defence,
    ].map((item) => item * 2);
  }

  reduceParameters() {
    [
      this.health,
      this.attack,
      this.defence,
    ] = [
      this.health,
      this.attack,
      this.defence,
    ].map((item) => item / 2);
  }

  toAttack() {
    if (this._attacksLeft > 0) {
      this._attacksLeft -= 1;
    } else {
      this.reduceParameters();
    }
  }
}
