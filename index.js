$("#button").click(function () {
    $("#kwadrat")


        .animate({
            marginLeft: "+=100",
            height: "100px",
            width: "100px",
        }, 3000)

        .animate({
            backgroundColor: "blue"
        }, 5000, function () {
            $(this).append("<h2>Animacja zakończona</h2>");
        });
});