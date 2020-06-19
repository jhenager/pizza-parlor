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
  let pizza = new Pizza(0,0);
  const pizzaSize = $("#pizzaSize").val();
  let toppings = [];
  let toppingsValue;
  


  $('input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
      pizza.toppings +=1
      toppings.push($(this).val());
      console.log(pizza.toppings);
      // return toppings;
    }
    else if($(this).is(":not(:checked)")){
        console.log("Checkbox is unchecked.");
    }
    });
    
  $("button#toppingAdd").click(function(){
    toppings.forEach(parseInt);
    console.log(toppings);
    return;
  });
   
    
  });







