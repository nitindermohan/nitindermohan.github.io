
// Updated code with selected category
$(document).ready(function () {
  $("input[name='radio']").change(function () {
    var selectedValue = $("input[name='radio']:checked").val();

    if (selectedValue === "all") {
      $(".journal, .conf, .thesis").show("fade");
    } else {
      if (selectedValue === "selected") {
            $(".journal, .conf, .thesis").hide("fade");
            $(".selected").show("fade");
      } else {
        $(".journal, .conf, .thesis").each(function () {
          var $div = $(this);
          if ($div.hasClass(selectedValue)) {
            $div.show("fade");
          } else {
            $div.hide("fade");
          }
        });
      }
    }
  });

  // Trigger the change event to show the initially selected category on page load
  $("input[name='radio']:checked").trigger("change");
});


// $(document).ready(function () {
//     $("input[name='radio']").change(function () {
//         if ($("input[name='radio']:checked").val() == 'conf') {
//             $('.conf').show("fade");
//             $('.journal').hide("fade");
//             $('.thesis').hide("fade");
//         }
//         if ($("input[name='radio']:checked").val() == 'journal') {
//             $('.journal').show("fade");
//             $('.conf').hide("fade");
//             $('.thesis').hide("fade");
//         }
//         if ($("input[name='radio']:checked").val() == 'thesis') {
//             $('.journal').hide("fade");
//             $('.conf').hide("fade");
//             $('.thesis').show("fade");
//         }
//         if ($("input[name='radio']:checked").val() == 'all') {
//             $('.journal').show("fade");
//             $('.conf').show("fade");
//             $('.thesis').show("fade");
//         }
//     });
// }).change();