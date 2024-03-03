        // book now corner button
        var $thresholdPoint = document.getElementById("product-main");
        var $reservationBtn = document.getElementById("book-now-alt")
        
        let checkWindowPos = () => {
          if(window.scrollY > $thresholdPoint.offsetTop){
            console.log("below threshold");
            $reservationBtn.className = "visible";
          }else{
            console.log("above threshold");
            $reservationBtn.className = "hidden";
          }
        }

        checkWindowPos();

        window.onscroll = () => {
          checkWindowPos();
        };

        // lazyload gallery images

        let galleryImage = document.getElementsByClassName("gallery-image");

        for (let i = 0; i < galleryImage.length; i++) {
          let gallery$img = document.createElement("IMG");
          gallery$img.setAttribute("src",galleryImage[i].getAttribute("href"));
          galleryImage[i].appendChild(gallery$img);
        }