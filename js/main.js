
// coverage icon dialogue 
try {
    var _eventListener = (function() {
        'use strict';
        if("ontouchstart" in document.documentElement === true){
          return "touchstart"
        }else{
          return "click";
        }
      }());
      (function () {
          'use strict';
          document.addEventListener(_eventListener, function (event) {
            var _isVisible = function (el) {
              return !!el && !!(el.offsetWidth === 0 || el.offsetHeight === 0);
            }
            var elem = document.getElementsByClassName("coverage-dialogue");
            for (var i = 0; i < elem.length; i++) {
                if (!elem[i].contains(event.target) && !_isVisible(elem[i].parentElement)) {
                    elem[i].parentElement.className = "c-dialoge-wrapper";
                };
            };
        });
      }());
} catch (error) {
    //console.log(error);
}

//expand hidden article

try {
  let $em = document.getElementById("expand-more");
  let $el = document.getElementById("expand-less");
  let $ar = document.getElementById("activity-reading");

  $em.addEventListener("click",function(){
    $ar.className = "activity-reading expand";
    $em.style.display = "none";
    $el.style.display = "block";
  },false);

  $el.addEventListener("click",function(){
    $ar.className = "activity-reading hidden";
    $em.style.display = "block";
    $el.style.display = "none";
  },false);
} catch (error) {
  //console.log(error);
}