<<<<<<< HEAD
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
=======
(function() {
    "use strict";

    var module = function() {
        function initForm() {
            $('#submit').on('click', function(e) {
                e.preventDefault();
                $.ajax({
                    type: "POST",
                    dataType: "JSON",
                    url: "",
                    data: $('form').serializeArray()
                })
                    .done(function(msg) {
                        alert(JSON.stringify(msg));
                    });
            });
        }

        function initUsers() {
            $.ajax({
                url: "https://api.github.com/users"
            }).success(function(users) {
                var table = $('#logins');

                $(users).each(function(index, element) {
                    var $img = $('<img>').attr('src', element.avatar_url);
                    var $button = $('<button/>',
                        {
                            text: 'Load ' + element.login + '\'s repo!',
                            click: function() {
                                updateRepos(element.repos_url);
                            }
                        });

                    table.append(
                        $('<tr>').append($('<td>').html(element.login), $('<td>').append($img), $('<td>').append($button))
                    );
                });
            });
        }

        function initRepos() {
            $('#repos').change(writeChangeToConsole);
        }

>>>>>>> Added solutions to AJAX exercise 1 and AJAX exercise 2

        function updateRepos(url) {
            $.ajax({
                url: url
            }).success(function(data) {
                var selection = $('#repos').empty();

                $(data).each(function(index, element) {
                    selection.append(
                        $('<option>').attr('value', element.name).html(element.name)
                    );
                });
            });
        }

        function writeChangeToConsole() {
            var selectBox = document.getElementById("repos");

            if (selectBox.options.length === 0) {
                return;
            }

            var selectedValue = selectBox.options[selectBox.selectedIndex].value;
            console.log(selectedValue);
        }
        
        return {
            init: function() {
                initForm();
                initUsers();
                initRepos();
            }
        }
    } ();
    
    module.init();
})();
