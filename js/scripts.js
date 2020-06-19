// Business Logic

function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function () {
  this.toppings += this.size;
}

// User Interface Logic

function pizzaSizeConverter (pizza) {
  if (pizza.size==="20") {
    pizza.size = 20;
  }
  else if (pizza.size==="25") {
    pizza.size = 25;
  }
  else if (pizza.size==="30") {
    pizza.size = 30;
  }
}

function pizzaCalculator (pizza) {
  pizza.size = $("#pizzaSize").val();
  pizzaSizeConverter(pizza.size);
  return pizza;
}
function pizzaPrice (pizza) {
  pizza.price(pizza);
  return pizza;
}

$(document).ready(function(){

  let pizza1 = new Pizza(0,0);
  
  
  console.log(pizza1.size);



  $('input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
      pizza1.toppings +=1
  
      console.log(pizza1.toppings);
    }
    else if($(this).is(":not(:checked)")){
        console.log("Checkbox is unchecked.");
    }
    });
    
  $("button#toppingAdd").click(function(){
      // pizza.size = ($("#pizzaSize").val());
      pizzaCalculator(pizza1);
      pizzaSizeConverter(pizza1);
      console.log(pizza1.size)
      pizzaPrice(pizza1);
      console.log(pizza1);
      $("#total").append(" " + "$" + pizza1.toppings);

  });
    
  });







