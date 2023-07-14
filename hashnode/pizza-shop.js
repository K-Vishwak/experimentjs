const EventEmitter = require("events");

class Pizzashop extends EventEmitter {
  constructor() {
    super();
    this.order = 0;
  }

  shop(size, toppping) {
    this.order++;
    this.emit("shop", size, toppping);
  }

  displayOrder() {
    console.log("current order" + this.order);
  }
}

module.exports = Pizzashop;
