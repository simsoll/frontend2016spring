(function(){
	"use strict";

    var aside = document.querySelector("aside");
    var main = document.querySelector("main");
  
  /* Good practice since separation of concerns is supported with use of CSS classes */
  /* as styling source */ 
  
    document.querySelector(".aside-toggle").addEventListener("click", function(e){
      e.preventDefault();
      aside.classList.toggle("hidden-xs");
      aside.classList.toggle("hidden-sm");
      aside.classList.toggle("visible-md-block");
      aside.classList.toggle("visible-lg-block");
      main.classList.toggle("hidden");
      this.classList.toggle("toggled");
    });

/* Bad practice because of DOM manipulation via inline styling */
/*
document.querySelector(".aside-toggle").addEventListener("click", function(e){
      e.preventDefault();
      this.classList.toggle("toggled");
      if (aside.style.display === "block") {
        aside.style.display = "";
      }
      else {
        aside.style.display = "block";
      }
      window.scrollTo(0, 0);
    });
*/  
  
    var categoryParents = document.querySelectorAll(".category-parent");
  
    [].forEach.call(categoryParents, function(categoryParent) {
      categoryParent.addEventListener("click", function(e) {
        e.preventDefault();
        var childMenu = this.nextElementSibling;
        childMenu.classList.toggle("hidden");
        this.firstElementChild.classList.toggle("fa-minus-square-o");
        this.firstElementChild.classList.toggle("fa-plus-square-o");
      });
    });
                    
  
})();

