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
                $(".nameReturn").removeClass("nameReturn");
                $("div#createdContact").append(clone);
            } else {
              alert("Please enter valid information.")
            }

    event.preventDefault();

  })
})
