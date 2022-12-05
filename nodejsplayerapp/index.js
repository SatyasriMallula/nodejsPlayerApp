$(document).ready(function () {
    var playersData = [];
    var max = 0;
    var ind = 0;

    var image = $("#image");
    var name = $("#name");
    var team = $("#team");
    var price = $("#price");
    var playerType = $("#type");

    var buttonNext = $("#buttonNext");
    var buttonPrev = $("#buttonPrev");

    let playersdetails = JSON.parse(localStorage.getItem("Player"));
    let data = playersdetails.map((ele) => {
        $("#loading").css("display", "none");
        $("#main").css("display", "unset");
        console.log(playersdetails);
        max = playersdetails.length - 1;
        image.attr("src", ele.playerImg);
        name.html(ele.playerName);
        team.html(ele.from);
        price.html(ele.price);
        playerType.html(ele.description);
        buttonPrev.prop("disabled", true);
    })

    buttonNext.click(function () {
        if (ind < max) {
            ind++;
            if (ind == 1) {
                buttonPrev.prop("disabled", false);
            }
            if (ind == max) {
                buttonNext.prop("disabled", true);
            }
        }
        image.attr("src", playersdetails[ind].playerImg);
        name.html(playersdetails[ind].playerName);
        team.html(playersdetails[ind].from);
        price.html(playersdetails[ind].price);
        playerType.html(playersdetails[ind].description);
    });

    buttonPrev.click(function () {
        if (ind > 0) {
            ind--;
            if (ind == max - 1) {
                buttonNext.prop("disabled", false);
            }
            if (ind == 0) {
                buttonPrev.prop("disabled", true);
            }
        }
        image.attr("src", playersdetails[ind].playerImg);
        name.html(playersdetails[ind].playerName);
        team.html(playersdetails[ind].from);
        price.html(playersdetails[ind].price);
        playerType.html(playersdetails[ind].description);
    });
});