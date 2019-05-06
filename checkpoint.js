// var documentHeight = document.documentElement.scrollTop || window.scrollY || window.pageYOffset || document.body.scrollTop;

console.log("checkpoint.js ready")

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
