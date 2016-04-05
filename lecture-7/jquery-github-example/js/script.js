(function($){
	"use strict";
  
  
  $.ajax({
    url: 'https://api.github.com/users',
    success: successCallback
  });
  
  function successCallback(data){
    template.init(data); 
  }
    
  
  
  var template = (function(){
       
    var _data = null;
    
    var init = function(data){
        _data = data;
        renderUsers();
    }
    
    var renderUsers = function(){
      
      var table = $(document.createElement("table"));
      
      for(var item of _data){
        var avatar_url = item.avatar_url;
        var avatar_img = $(document.createElement("img")).prop({src: avatar_url, class: 'avatar'});
        var btn = $(document.createElement("button")).prop({id: item.login}).text('Show repos').click(getRepos);
        var tr = $(document.createElement("tr")).appendTo(table);
        var td = $(document.createElement("td")).text(item.login).appendTo(tr);
        var td = $(document.createElement("td")).html(avatar_img).appendTo(tr);
        var td = $(document.createElement("td")).html(btn).appendTo(tr);
        var td = $(document.createElement("td")).prop({id: item.login + "-repos"}).appendTo(tr);
      }
      
      $(".template").html(table);
        
    }
    
    var showRepo = function(e){
      var select = e.target;
      var optionSelected = select.options[select.selectedIndex];
      console.log(optionSelected.value);
    }
    
    var renderRepos = function(repos){
      var select = $(document.createElement("select")).change(showRepo);
      $(document.createElement("option")).prop({value: 0, text: "-- select repo --"}).appendTo(select);
      for(var repo of repos){
        var option = $(document.createElement("option")).prop({value: repo.name, text: repo.name}).appendTo(select);
      }
      return select;
    }
    
    var getRepos = function(e){
        var login = e.target.getAttribute("id");
        $.getJSON("https://api.github.com/users/"+login+"/repos", function(repos){
          var reposHTML = renderRepos(repos);
          $("#" + login + "-repos").html(reposHTML);
        });
    };
    
    return {
      init: init
    };
    
  }());
    
  
})(jQuery);

