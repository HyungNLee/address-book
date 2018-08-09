$(document).ready(function() {

    $("#inputBox").submit(function(event) {
      var nameInput = $("input#name").val();
      var addressInput = $("input#address").val();
      var emailInput= $("input#email").val();
      var phoneInput = $("input#phoneNumber").val();
      var divName = nameInput.concat(phoneInput);

      $(".nameReturn").text(nameInput);
      $(".addressReturn").text(addressInput);
      $(".emailReturn").text(emailInput);
      $(".phoneReturn").text(phoneInput);

      //Error message
        if (nameInput.length != 0 && addressInput.length != 0 &&
              emailInput.length != 0 && phoneInput.length != 0) {
                event.preventDefault();
                var clone = $("#template").clone();
                clone = clone.attr("id", divName);
                $("div#createdContact").append(clone);
                $("#" + divName + " > h2 > span.nameReturn").removeClass("nameReturn").addClass("nameReturn" + divName);
                $("#" + divName + " > .hiddenInfo > p > span.addressReturn").removeClass("addressReturn").addClass("addressReturn" + divName);
                $("#" + divName + " > .hiddenInfo > p > span.emailReturn").removeClass("emailReturn").addClass("emailReturn" + divName);
                $("#" + divName + " > .hiddenInfo > p > span.phoneReturn").removeClass("phoneReturn").addClass("phoneReturn" + divName);

            } else {
              event.preventDefault();
              alert("Please enter valid information.")
            }

        function detectElement(arrow) {
          arrow.parent().find(".hiddenInfo").toggle();
          //arrow.nextAll('.hiddenInfo').toggle();
        }

  })

  function detectElement(arrow) {
    arrow.parent().find(".hiddenInfo").toggle();
    //arrow.nextAll('.hiddenInfo').toggle();
  }

  $(document).on('click', 'h2', function(){
    //$(this).parent().find(".hiddenInfo").toggle();
    //$(this).nextElementSibling.toggle();
    detectElement($(this));
  });

  // $("h2").click(function() {
  //   alert("1");
  //   //$(this).parent().find(".hiddenInfo").toggle();
  //   //$(this).nextElementSibling.toggle();
  //   detectElement($(this));
  // })

})
