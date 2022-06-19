// JavaScript Document


/* Play Audio */
$(document).ready(function() {
  "use strict";
  $('.swiper-slide').click(function(){
    
    // starting audio
    var audioID = "aud" + $(this).attr('id');
    $("#" + audioID).trigger('play');
    
  }); 
});




	