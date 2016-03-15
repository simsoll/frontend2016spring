(function(){
	"use strict";

    var filtering = (function(){
      
      var filterSelectors = null;
      
      var init = function(){
        filterSelectors = document.querySelectorAll("[data-filter]");
        for (var filterSelector of filterSelectors) {
          filterSelector.addEventListener("change", changeFilterItem); 
        }
        document.querySelector("[data-all-filters]").addEventListener("change", allFilters);
      }
      
      var allFilters = function(e){
        var state = e.target.checked;
        for (var filterSelector of filterSelectors) {
          filterSelector.checked = state; 
          var change = new CustomEvent("change");
          filterSelector.dispatchEvent(change);
        }
      }
            
      var changeFilterItem = function(e){
        var filterSelector = e.target;
        var filter = filterSelector.getAttribute("data-filter");
        var filterItems = document.querySelectorAll("[data-item=" + filter + "]");
        for (var filterItem of filterItems) {
          
          if(filterSelector.checked){
            if(!filterItem.classList.contains("selected")){
              filterItem.classList.add("selected");   
            }
          }
          else{
            filterItem.classList.remove("selected"); 
          }
          
        }
      }
      
      return {
        init: init
      }
      
    }());
  
    filtering.init();

})();

