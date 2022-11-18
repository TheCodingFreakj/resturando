(function ($) {
  "use strict";
  $("#datepicker")
    .datepicker({
      autoclose: true,
      todayHighlight: true,
    })
    .datepicker("update", new Date());

  $("#datetime").timepicker({
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  });

  $("#submit-btn").click(function () {
    e.preventDefault();
    $("#my-form").submit(); // Submit the form
  });
})(jQuery);
