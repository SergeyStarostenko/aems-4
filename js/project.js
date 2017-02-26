$(document).ready(function(){
  //$("#box-container").css({"left":"-455px"});
	//$("#box-container").animate({left:-455*2+"px"},400)

var widthProject, screenWidth, countProject;
widthProject = widthProject();

$(".project").css({'width': widthProject + 'px'});

var widthProjectContainer = widthProject * countProject;
console.log("New count -" + countProject);
$(".project-container").css({'width': widthProjectContainer + 'px'});

function widthProject(){
screenWidth = $("body").width();
console.log(screenWidth);

countProject = $("div.project").length;
console.log(countProject);

  if ((screenWidth / countProject) <= 500 ){
      console.log("small w-" + screenWidth + " n-" + countProject);
      if (screenWidth <= 500) {
        console.log("screenWidth <= 500");
        return screenWidth;
      }
      else{
        console.log("screenWidth > 500");
        for(var i = 2; i<countProject;){
          screenWidth /= i;
          console.log(screenWidth);
          if (screenWidth < 500){
            return screenWidth;
          }
          screenWidth = $("body").width();
          console.log("New " + screenWidth);
          i++;
        }
      }
  }
  else {
    console.log("big");
    screenWidth /= countProject;
    return screenWidth;
  }
}

});

