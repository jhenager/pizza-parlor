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
  $('input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
      pizza1.toppings +=1;
      console.log(pizza1.toppings);
    }
    else if($(this).is(":not(:checked)")){
        console.log("Checkbox is unchecked.");
      }
    });
  $("#toppingAdd").submit(function(){
    event.preventDefault();
    pizza1.size = parseInt($("#pizzaSize").val());
    pizza1.price();
    $(".total").text(" " + "$" + pizza1.totalPrice);
    $("button#toppingAdd").hide();
  }); 
});







