$(document).ready(function(){
    vidplay();
    function vidplay() {
        var video = document.getElementById("video");
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

$("#buttonOpenMenu").click(function(){
  $("#logo").toggleClass("displayBlock displayNone");
  $("#buttonOpenMenu").toggleClass("displayBlock displayNone");
  $("#filter").toggleClass("bg-color bg-color-black");
    $("#video-bg").addClass('filterBlur');
  $("#Menu").toggleClass("displayNone displayBlock");

    vidplay();
});

$("#buttonCloseMenu").click(function(){
  $("#Menu").toggleClass("displayBlock displayNone");
    $("#video-bg").removeClass('filterBlur');
  $("#filter").toggleClass("bg-color-black bg-color");
  $("#logo").toggleClass("displayNone displayBlock");
  $("#buttonOpenMenu").toggleClass("displayNone displayBlock");

    vidplay();
});

    $("#buttonLogin").click(function(){

      if($("#mainlogin").css("display") == 'none'){

          $("#obl-2").toggleClass("displayNone displayBlock");
          $("#obl-1").toggleClass("displayBlock displayNone");
          $("#mainMenu").hide();
          $("#mainlogin").show();
      }
    });

    $("#buttonOneBack").click(function(){
        $("#obl-2").toggleClass("displayBlock displayNone");
        $("#obl-1").toggleClass("displayNone displayBlock");
        $("#mainlogin").hide();
        $("#mainMenu").show();
    });


});