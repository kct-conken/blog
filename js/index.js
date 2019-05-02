'use strict';
{
    $(document).ready(() => {
       $('.slick-slider').slick({
           autoplay: true,
           autoplaySpeed: 2000,
           arrows: false,
       });
        $('.bg-slider').vegas({
           slides: [
               {src: './img/award.jpg'},
               {src: './img/book.jpg'},
               {src: './img/densansitu01.jpg'},
               {src: './img/roomfoward.jpg'},
               {src: './img/room.jpg'},
           ],
            delay: 5000,
            transitionDuration: 3000,
            transition: 'blur',
            animation: 'random',
        });
    });
    document.addEventListener('DOMContentLoaded', function(){
      var trigger = new ScrollTrigger();
    });
}