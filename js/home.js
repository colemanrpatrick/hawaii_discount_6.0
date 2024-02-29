var articleParent = document.getElementById('article-container');

//console.log(articleParent.offsetWidth);

// var documentHeight = document.documentElement.scrollTop || window.scrollY || window.pageYOffset || document.body.scrollTop;

//console.log("checkpoint.js ready");

// var checkpointFirst = document.getElementsByClassName("checkpoint-first")[0];

var checkpoint = document.getElementsByClassName("checkpoint");

window.onscroll = function(){

  /*=== ===*/
  for (var i = 0; i < checkpoint.length; i++) {

    var checkpointHeight = checkpoint[i].offsetTop - (checkpoint[i].clientHeight);

    var checkpointBottom = checkpoint[i].offsetTop + (checkpoint[i].clientHeight);

    if (window.scrollY > checkpointHeight && window.scrollY < checkpointBottom) {

      checkpoint[i].classList = "checkpoint active";

    }else{

      checkpoint[i].classList = "checkpoint";

    }

  }
}

//======================//

(function() {
  'use strict';
  checkArticle()
}());

function checkArticle() {

  var articles = articleParent.querySelectorAll('section .article-bloc');
  var articleSection = document.getElementById('article-section');

  articleSection.style.width = articleParent.offsetWidth * 3 + "px";

  //console.log(articles);

  for (var i = 0; i < articles.length; i++) {

    articles[i].style.width = articleParent.offsetWidth + "px";

    //console.log(articles[i].style.width);

  }

};

window.onresize = function(){

  checkArticle()

}

//======================//

const startPosition = 0;
function slideToggle(elementId, forward, frameCount) {
    var frame;
    elem = document.getElementById(elementId);
    frame = elem.offsetWidth / frameCount;
    if (!elem.position) {
        elem.position = startPosition;
    }
    if (forward) {
        elem.position += frame;
        if (elem.position >= frame * frameCount) {
            elem.position = startPosition;
        }
    }
    else {
        elem.position -= frame;
        if (elem.position < startPosition) {
            elem.position = frame * frameCount - frame * 1;
        }
    }
    elem.style.transform = "translate(-" + elem.position + "px,0)";
}
