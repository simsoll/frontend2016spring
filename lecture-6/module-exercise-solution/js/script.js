(function(){
	"use strict";

	function modal(){
      
      var cover = null,
          modalOpenButtons = null,
          modalCloseButtons = null,
          openModalWindow = null;
      
      var init = function(){
        cover = document.querySelector(".cover"),
        modalOpenButtons = document.querySelectorAll(".modal-btn-open"),
        modalCloseButtons = document.querySelectorAll(".modal-btn-close");
                
        for(var i=0; i<modalCloseButtons.length; i++){
          var modalCloseButton = modalCloseButtons[i];
          modalCloseButton.addEventListener("click", closeModal);
        }
        
        var max = modalOpenButtons.length;
        for(var i=0; i<max; i++){
          var modalOpenButton = modalOpenButtons[i];
          modalOpenButton.addEventListener("click", openModal);
        }
        
       // cover.onclick = closeModal;
      
      }
      
      var openModal = function(e){
        e.preventDefault();
        var modalButton = e.target;
        var modalTarget = modalButton.getAttribute("href");
        openModalWindow = document.querySelector(modalTarget);
        cover.classList.add("open");
        openModalWindow.classList.add("show");
      }
      

      var closeModal = function(){
        openModalWindow.classList.remove("show");
        cover.classList.remove("open");
      }
      
      return {
        init: init
      }
    }
  
    var modal = modal();
    modal.init();

})();

