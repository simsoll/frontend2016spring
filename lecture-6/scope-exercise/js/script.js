(function(){
	"use strict";

	answer = 0;
  
    document.querySelector(".calc").onclick = function(e) {
      var answer += 42;
      getAnswer();
    };

})();

function getAnswer() {
    document.querySelector(".answer").innerHTML = answer;
}