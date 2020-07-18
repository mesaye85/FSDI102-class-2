//challenge: save in a variable the info that you get from the prompt display it on the cosole.

  
var info= prompt("Product Name:");

var quantity= prompt("quantity");
var price= prompt("price");
console.log(info+quantity+price);

var subtotal=quantity*price;
console.log(subtotal);

var totprice=subtotal+(0.08*subtotal);
console.log(totprice);
