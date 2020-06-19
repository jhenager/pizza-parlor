// Business Logic

function Pizza (toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

Pizza.prototype.price = function () {

}

// User Interface Logic

const beverage = $("#beverage").val();