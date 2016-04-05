(function($){
	"use strict";

	$(".frm-person").on("submit", function(e){
      e.preventDefault();
      
      var data = $(this).serializeArray();
      
      $.ajax({
        url: "/",
        type: "POST",
        dataType: "json",
        data: data,
        success: success_callback
      });
      
    });
  
  function success_callback(response) {
    console.log(response);
  }

})(jQuery);

