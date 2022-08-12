$("#morebutton").click(function () {
    var elem = $("#morebutton .button").text();
    if (elem == "Show older") {
        //Stuff to do when btn is in the read more state
        // $("#morebutton .button").text("Show less news");
        $('#newstable .more').slice(0, 5).removeClass("more");
    }
    if ($('#newstable .more').length == 0) {
        $(this).addClass("more");
    }
});