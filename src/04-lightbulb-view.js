// 04-lightbulb-view

// Brings in the Lightbulb class from the "03-lightbulb" module
import Lightbulb from '03-lightbulb';

// Exports our view class
export default class LightbulbView {
  constructor(color) {
    this.light = new Lightbulb();
    this.color = color;

    // Make a button to represent our Lightbulb
    this.el = document.createElement(`button`);
    this.renderOn();

    // Listen for clicks
    this.el.addEventListener(`click`, () => {
      // Flip the light
      this.light.flip();

      // Check if the light is on
      if (this.light.on) {
        this.renderOn();
      } else {
        this.renderOff();
      }
    });
  }

  renderOn() {
    // Make button red
    this.el.style.background = this.color;
    // Make button say "ON"
    this.el.innerText = `ON`;
  }

  renderOff() {
    // Make button not red
    this.el.style.background = `white`;
    // Make button say "OFF"
    this.el.innerText = `OFF`;
  }
}
