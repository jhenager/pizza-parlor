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

function sizeOfPizza () {
  const pizzaSize = $("#pizzaSize").val();
}

$(document).ready(function(){

  let pizza = new Pizza(0,0,0);
  let toppings = [];
  const pizzaSize = $("#pizzaSize").val();
  let size = pizzaSize
  
  // console.log(pizzaSize);
  console.log(pizza.size);
  // if (pizzaSize === 20) {
  //   pizza.size = 20;
  // }
  // else if (pizzaSize === 25) {
  //   pizza.size = 25;
  // }
  // else if (pizzaSize === 30) {
  //   pizza.size = 30;
  // }
  // console.log(pizza.size);


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
      pizza.size = ($("#pizzaSize").val());
      console.log(pizza.size);

  });
    
  });







