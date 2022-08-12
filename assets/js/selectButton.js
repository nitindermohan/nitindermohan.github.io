$('#select').on('change', function () {
    if (this.value == "all") {
        $('.subject').show(500);
    } else {
        $('.subject').hide(100);
        $('.' + this.value).show(500);
    }
});