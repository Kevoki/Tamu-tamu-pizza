(document).ready(function () {
    $("#checkout").click(function (event) {
        var flavor = $("#flavors :selected").val()
        var type = $("#types :selected").val()
        var crust = $("#crusts :selected").val()
        var toppings = $("#toppings :selected").val()
        var number = $("#number").val()

       

        alert(flavour)

    })
})