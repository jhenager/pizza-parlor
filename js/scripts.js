// Business Logic

function Pizza (toppings, size, totalPrice) {
  this.toppings = toppings;
  this.size = size;
  this.totalPrice = totalPrice;
}

Pizza.prototype.price = function () {
  this.totalPrice = this.toppings + this.size;
}

function getSum(total, num) {
  return total + Math.round(num);
}

// User Interface Logic

$(document).ready(function(){ 
  $("#toppingAdd").submit(function(){
    event.preventDefault();
    let toppings = [];
    let pizzaSize = parseInt($("#pizzaSize").val());
    $('input[type="checkbox"]:checked').each(function() {
      toppings.push(parseInt(this.value));
    });
    let pizzaToppings = toppings.reduce(getSum, 0);
    let pizza1 = new Pizza(pizzaToppings,pizzaSize);
    pizza1.price();
    $(".total").text(" " + "$" + pizza1.totalPrice);
  }); 
});







