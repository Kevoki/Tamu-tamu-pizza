(document).ready(function () {
    $("#checkout").click(function (event) {
        var flavor = $("#flavors :selected").val()
        var type = $("#types :selected").val()
        var crust = $("#crusts :selected").val()
        var toppings = $("#toppings :selected").val()
        var number = $("#number").val()

        var add = function(number1, number2) {
            return number1 + number2;
          };

        alert(flavour)

    })
})