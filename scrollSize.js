var articleParent = document.getElementById('article-container')

console.log(articleParent.offsetWidth);

(function() {
  'use strict';
  checkArticle()
}());

function checkArticle() {


  var articles = articleParent.querySelectorAll('section .article-bloc');

  var articleSection = document.getElementById('article-section');

  articleSection.style.width = articleParent.offsetWidth * 3 + "px";

  console.log(articles);

  for (var i = 0; i < articles.length; i++) {

    articles[i].style.width = articleParent.offsetWidth + "px";

    console.log(articles[i].style.width);

  }

};

window.onresize = function(){

  checkArticle()

}
