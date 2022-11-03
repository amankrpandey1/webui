$(".banner-vid").prop('muted', true);

(document).ready(function() {
$("#switch-container").click( function (){
    if( $("banner-vid").prop('muted') ) {
          $("banner-vid").prop('muted', false);
    } else {
      $("banner-vid").prop('muted', true);
    }
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