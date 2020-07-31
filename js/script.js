$(".chat-title").on("click", function (event) {
    $(".chat-body").toggle();

    setTimeout(function () {
        $(".loading").hide()
        $(".chat-answer").show()
        $("#texto").disabled()


    }, 3000
    )
    $("#texto").focus()
});

$("#texto").on("keypress", function (event) {
    var valor = $("#texto").val();
    if (event.which == 13 && valor != '') {
        $(".chat-problem").text(valor);
        $(".chat-problem").show();
        $("#texto").val("");
        
    }

});
