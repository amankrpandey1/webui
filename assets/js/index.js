$(".banner-vid").prop('muted', true);

// $(document).ready(function() {
// $("#switch-container").click(function (){
//     if( $(".banner-vid").prop('muted') ) {
//           $(".banner-vid").prop('muted', false);
//     } else {
//       $(".banner-vid").prop('muted', true);
//     }
//   });
// });

document.querySelectorAll('a[href^="#"]').forEach($anchor => {
    $anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start' //scroll to top of the target element
        });
    });
});

$(document).ready(function() {

    function toggleSidebar() {
      $(".button").toggleClass("active");
      $("main").toggleClass("move-to-left");
      $(".sidebar-item").toggleClass("active");
      $(".sidebar").toggleClass("active")
      
    }
  
    $(".button").on("click tap", function() {
      toggleSidebar();
    });
  
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        toggleSidebar();
      }
    });
  
  });

  $(document).ready(function() {
    $('#show-hidden-menu').click(function() {
        $('.hidden-menu').slideToggle("slow");
        $(this).text(function(i, v){
            return v === 'Show more' ? 'Show less' : 'Show more'
    });
      // Alternative animation for example
      // slideToggle("fast");
    });
  });



// =============================
// The toggle button function
// =============================
let soundOn = false;

function toggleSoundOnOff()  {
  if (soundOn == true) {
    soundOn = false
    console.log("soundOn: ", soundOn)
  } else if (soundOn == false) {
    soundOn = true
    console.log("soundOn: ", soundOn)
  }
  if( $(".banner-vid").prop('muted') ) {
    $(".banner-vid").prop('muted', false);
  } else {
    $(".banner-vid").prop('muted', true);
  }
}

 
// =============================
// The sound button function
// =============================
  function playSound() {
    if (soundOn !== false) {
      let sound = document.getElementById("audio");
      sound.play();      
    }
  }

  /*
Class for scrolling effect: ons croll moves to the next section, appending classes to the section: current, prev and next, and making prev and next sections darker.
*/

const myPage = {
    // Scroll to the block
    scrollThere: function(targetElement, speed) {
      var _self = this;
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: targetElement.offset().top
          },
          {
            duration: speed,
            complete: function() {
              _self.setViewportClasses(); // On complete set viewport classes
            }
          }
        );
    },
  
    //Check if element is in the viewport
    isInViewport: function(element) {
      var _self = this;
      // check for the section which is the main currently
      var elementMiddle = element.offset().top + element.outerHeight() / 2;
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementMiddle > viewportTop && elementMiddle < viewportBottom;
    },
  
    // Set classes for the current element, prev and next
    setViewportClasses: function() {
      var _self = this;
      // add classes for main, prev and next sections
      $(".inView").removeClass("inView");
      $(".prev-inView").removeClass("prev-inView");
      $(".next-inView").removeClass("next-inView");
      $("section").each(function(i, obj) {
        if (_self.isInViewport($(this))) {
          $(this).addClass("inView");
          if ($(this).prev())
            $(this)
              .prev()
              .addClass("prev-inView");
          if ($(this).next())
            $(this)
              .next()
              .addClass("next-inView");
          return false;
        }
      });
    },
  
    initEvents: function() {
      var _self = this;
      $(window)
        .off()
        .on("wheel", function(e) {
          e.preventDefault;
          if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            //scroll up
            if ($(".prev-inView").length > 0)
              _self.scrollThere($(".prev-inView"), 500);
          } else {
            //scroll down
            if ($(".next-inView").length > 0)
              _self.scrollThere($(".next-inView"), 500);
          }
        });
    },
  
    init: function() {
      var _self = this;
      _self.setViewportClasses();
      _self.initEvents();
    }
  };
  
  myPage.init();
  