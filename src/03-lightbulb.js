// 03-lightbulb

export default class Lightbulb {
  constructor() {
    this.on = true;
  }

  flip() {
    if (this.on) {
      this.on = false;
      return `on`;
    }

    this.on = true;
    return `off`;
  }
}
