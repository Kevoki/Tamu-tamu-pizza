var price , crust_price, topping_price ;
let total = 0;
function Getpizza( flavours,size,crusts,toppings,number ){
  this.flavours = flavours;
  this.size = size;
  this.crusts = crusts;
  this.toppings= toppings;
  this.number = number;
}

$(document).ready(function() {
  //$("button.proceed").click(function(){
  //$("button.proceed").hide();
  //$("#information").hide();
  //$("div.choise").slideDown(1000);
  });
  
  $("button.proceed").click(function(event){
   let pflavour = $(".flavour option:selected").val();
   let psize = $("#size option:selected").val();
   let pcrust = $("#crust option:selected").val();
   let ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       ptopping.push($(this).val());
   });
   console.log(ptopping.join(", "));

   switch(psize){
    case "0":
      price =0;
    break;
    case "large":
      price = 1000;
       console.log(price);
     break;
     case "medium":
       price = 850;
       console.log("The price is "+price);
     break;
     case "small":
       price = 400;
       console.log(price);
     default:
       console.log("error"); 
   }

   switch(pcrust){
      case "0":
        crust_price = 0;
      break;
      case "Thin Crust":
        crust_price = 150;
      break;
      case "Thick Crust":
        crust_price = 250;
      break;
      case "Stuffed Crust":
        crust_price = 150;
      break;
      case "Gluten-free":
        crust_price = 250;
      break;
      case "Crisp Crust":
        crust_price = 100;
      break;
      default:
        console.log("No price"); 
    }

    let topping_value = ptopping.length*50;
    console.log("toppins value" + topping_value);
    if((psize == "0") && (pcrust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Please select pizza size and crust"); 
    }
    else{
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choise").slideDown(1000);
    }
    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;
    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);
    
// Add pizza button
    $("button.addPizza").click(function(){
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          ptopping.push($(this).val());
      });

      console.log(ptopping.join(", "));

      switch(ptopping){
        case "0":
          price =0;
        break;
        case "tomato":
           price = 100;
           console.log(price);
         break;
         case "onions":
           price = 130;
           console.log("The price is "+price);
         break;
         case "mushroom":
           price = 250;
           console.log(price);
         break;
         case "olives":
           price = 100;
           console.log(price);
         break;
         case "peperoni":
           price = 100;
           console.log(price);
         break;
         case "peri-peri chicken":
           price = 250;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(pcrusts){
          case "0":
            crust_price = 0;
          break;
          case "Thin Crust":
            crust_price = 150;
          break;
          case "Thick Crust":
            crust_price = 250;
          break;
          case "Stuffed Crust":
            crust_price = 150;
          break
          case "Gluten-free":
            crust_price = 250;
          break;
          default:
          case "Crisp Crust":
            crust_price = 100;
          break;
            console.log("No price"); 
        }
        let topping_value = ptopping.length*50;
        console.log("toppins value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);
        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      // constractor function
      var newOrder = new Getpizza(pflavours, psize, pcrust,ptopping,total);
      $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
    });
    // Checkout button
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
    });
    // home delivery button
    $("button.deliver").click(function(){
      $(".pizzatable").hide();
      $(".choise h2").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      let deliceryamount= checkoutTotal+150;
      console.log("You will pay sh. "+deliceryamount+" on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: "+deliceryamount);
    });
   
  });

  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
