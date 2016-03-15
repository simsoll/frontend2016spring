(function(){
  "use strict";
  
  var btn = document.querySelector(".btn"),
      box = document.getElementById("box"),
      question = document.getElementById("question");
  
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    box.classList.toggle("warning");
    box.innerHTML = question.value;
  });
  
}());
