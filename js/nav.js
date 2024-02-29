var btn = document.getElementsByClassName("mobileDropDown");
var i;

for (var i = 0; i < btn.length; i++) {

  btn[i].addEventListener("click",function(){
    toggleThis(this,"active");
    var childNav = this.nextElementSibling;
    if(childNav.style.maxHeight){
      childNav.style.maxHeight = null;
    }else{
      childNav.style.maxHeight = childNav.scrollHeight + "px";
    }
  });
}

var $eventListener = (function () {
  'use strict';
  if ("ontouchstart" in document.documentElement === true) {
      return "touchstart"
  } else {
      return "click";
  }
}());

var menuCont = document.getElementById("main-nav");
var menuBtn = document.getElementById("menu-btn");

document.addEventListener($eventListener, function (event) {
  if (!menuCont.contains(event.target) && !visible(menuCont)) {
      menuCont.className = "main-nav";
      menuBtn.className = "menu-btn";
  }
})

function visible(elem) {
  return elem && (elem.offsetWidth === 0);
}

var $eventListener = (function () {
  "use strict";
  if ("ontouchstart" in document.documentElement === true) {
    return "touchstart";
  } else {
    return "click";
  }
})();
var menuCont = document.getElementById("main-nav");
var menuBtn = document.getElementById("menu-btn");
//console.log(menuCont.offsetWidth);
document.addEventListener($eventListener, function (event) {
  if (!menuCont.contains(event.target) && !visible(menuCont)) {
    menuCont.className = "main-nav";
    menuBtn.className = "menu-btn";
  }
});
function visible(elem) {
  return elem && elem.offsetWidth === 0;
}

