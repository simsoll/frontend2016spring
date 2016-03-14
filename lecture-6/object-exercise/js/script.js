var app = app || {};

(function(){
  "use strict";
  
  function Actor() {
    this.x = 0;
    this.y = 0;
    this.element = document.createElement("div");
    document.body.appendChild(this.element);
  }
  
  Actor.prototype.move = function(x, y){
      this.x += x;
      this.y += y;
      this.element.style.left = this.x + "px";
      this.element.style.top = this.y + "px";
  }
  
  function Hero() {
    Actor.call(this);
    this.element.className = "actor hero";
  }
  
  Hero.prototype = Object.create(Actor.prototype);
    
  app.hero = new Hero();
  app.hero.move(10, 10);
  
})();

