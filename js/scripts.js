$(document).ready(function() {
  $("#checkout").click(function(event){
    event.preventDefault();
   let pflavour = parseInt($("#flavours option:selected").val());
   let psize = parseInt($("#sizes option:selected").val());
   let pcrust = parseInt( $("#crusts option:selected").val());
   let ptopping = parseInt( $("#toppings option:selected").val());
   let pnumber = parseInt($("#number").val());
 
   let total = pflavour + psize + pcrust + ptopping;
   let grandTotal = total * pnumber;
   
   console.log(grandTotal)

   
  });
});

