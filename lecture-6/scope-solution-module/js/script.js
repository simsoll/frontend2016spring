var module = (function(){
	"use strict";

	var num = 0,
        calc = document.querySelector(".calc"),
        answer = document.querySelector(".answer");
  
    var init = function(){
      calc.addEventListener("click", doCalc);
    };
    
    var doCalc = function(e) {
      num += 42;
      answer.innerHTML = num;
    };
    
    var getNum = function() {
      return num;
    };
    
    return {
      init: init,
      getNum: getNum
    };
    
}());

module.init();