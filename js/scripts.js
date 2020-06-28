// Business Logic

function Pizza (toppings, size, totalPrice) {
  this.toppings = toppings;
  this.size = size;
  this.totalPrice = totalPrice;
}

Pizza.prototype.price = function () {
  this.totalPrice = this.toppings + this.size;
}


// User Interface Logic


$(document).ready(function(){
  let pizza1 = new Pizza(0,0);
  
  $("#toppingAdd").submit(function(){
    event.preventDefault();
    pizza1.size = parseInt($("#pizzaSize").val());
    let toppings = [];
    $('input[type="checkbox"]:checked').each(function() {
      toppings.push(parseInt(this.value));
    });
    function getSum(total, num) {
      return total + Math.round(num);
    }
    function addToppings(item) {
      pizza1.toppings = toppings.reduce(getSum, 0);
    } 
    addToppings();
    pizza1.price();
    $(".total").text(" " + "$" + pizza1.totalPrice);
  }); 
});







