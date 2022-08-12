$(document).ready(function () {
    $("input[name='radio']").change(function () {
        if ($("input[name='radio']:checked").val() == 'conf') {
            $('.conf').show("fade");
            $('.journal').hide("fade");
            $('.thesis').hide("fade");
        }
        if ($("input[name='radio']:checked").val() == 'journal') {
            $('.journal').show("fade");
            $('.conf').hide("fade");
            $('.thesis').hide("fade");
        }
        if ($("input[name='radio']:checked").val() == 'thesis') {
            $('.journal').hide("fade");
            $('.conf').hide("fade");
            $('.thesis').show("fade");
        }
        if ($("input[name='radio']:checked").val() == 'all') {
            $('.journal').show("fade");
            $('.conf').show("fade");
            $('.thesis').show("fade");
        }
    });
}).change();