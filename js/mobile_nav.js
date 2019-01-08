(function(){
  'use strict';

  var body = document.getElementsByTagName('body')[0];
  var navToggle = document.getElementById('mobile-nav-toggle');
  var container = document.getElementById('container'),
      collapse = document.querySelector(".navbar-collapse")
  // var dimmer = document.getElementById('mobile-nav-dimmer');
  var CLASS_NAME = 'mobile-nav-on';
  if (!navToggle) return;

  navToggle.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    if(document.querySelector(".navbar-collapse").className.indexOf('on') < 0) {
      collapse.className = "navbar-collapse on"
    } else {
      collapse.className = "navbar-collapse"
    }
    
    //body.classList.toggle(CLASS_NAME);
  });

  // dimmer.addEventListener('click', function(e){
  //   if (!body.classList.contains(CLASS_NAME)) return;

  //   e.preventDefault();
  //   body.classList.remove(CLASS_NAME);
  // });
})();