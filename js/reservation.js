import axios from "axios";
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

  // $("#my-form").on("submit", function (e) {
  //   e.preventDefault(); //prevent default form submition
  //   var email = $("#my-form").find('input[name="email"]').val();
  //   var name = $("#my-form").find('input[name="name"]').val();
  //   var phone = $("#my-form").find('input[name="phone"]').val();
  //   var guests = $("#my-form").find('input[name="guests"]').val();
  //   var time = $("#my-form").find('input[name="time"]').val();
  //   var date = $("#my-form").find('input[name="date"]').val();
  //   var FormData = {
  //     email,
  //     name,
  //     phone,
  //     guests,
  //     time,
  //     date,
  //   };

  //   const headers = {
  //     'Content-Type': 'multipart/form-data',
  //     "Access-Control-Allow-Origin": "*",
  //   }
    
  //   axios.post("C:/Users/Lenovo/Documents/ThemeForest/Resturando/reservation.php", JSON.stringify(FormData), {
  //       headers: headers
  //     })
  //     .then((response) => {
  //     console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //   // var FormData = $("#my-form").serialize();
  //   //   console.log(FormData);
  //   //   var settings = {
  //   //     cache: false,
  //   //     dataType: "jsonp",
  //   //     async: true,
  //   //     crossDomain: true,
  //   //     url: "../php/reservation",
  //   //     method: "POST",
  //   //     data: FormData,
  //   //     headers: {
  //   //       accept: "application/json",
  //   //       "Access-Control-Allow-Origin": "*",
  //   //     },
  //   //   };
  //   //   $.ajax(settings).done(function (response) {
  //   //     console.log(response);
  //   //   });
  //   //   // $.ajax({
  //   //   //   type: "POST",
  //   //   //   url: "../php/reservation.php",
  //   //   //   data: FormData,
  //   //   //   crossDomain: true,

  //   //   //    dataType: "json",
  //   //   //   encode: true,
  //   //   //   beforeSend: function () {
  //   //   //     $("#submit-button").html(
  //   //   //       '<span class="glyphicon glyphicon-repeat fast-right-spinner"></span> Sending'
  //   //   //     );
  //   //   //   },
  //   //   //   success: function (response) {
  //   //   //     console.log(response);
  //   //   //     // response = JSON.parse(response);

  //   //   //     // if (response == "ok") {
  //   //   //     //   $("sendmessage").html("Your message has been sent successfully.");
  //   //   //     // } else {
  //   //   //     //   $("errormessage").html(response);
  //   //   //     // }
  //   //   //   },
  //   //   // });
  // });
})(jQuery);



