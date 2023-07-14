const Pizzashop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const pizzashop = new Pizzashop();
const drinkMachine = new DrinkMachine();

pizzashop.on("shop", (size, topping) => {
  console.log(size + topping);
  drinkMachine.serveDrink(4);
});

pizzashop.shop(4, "bread");
pizzashop.displayOrder();
