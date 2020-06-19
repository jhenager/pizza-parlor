// Business Logic

function Pizza (toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

Pizza.prototype.price = function () {
  this.toppings += this.size;
}

// User Interface Logic


$(document).ready(function(){
  let pizza = new Pizza();
  const beverage = $("#pizzaSize").val();


});



