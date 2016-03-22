// 03-lightbulb

export default class Lightbulb {
  constructor() {
    this.on = true;
  }

  flip() {
    // Switch from true to false or false to true
    this.on = !this.on;

    return this.on;
  }
}
