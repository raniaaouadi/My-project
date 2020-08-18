$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});  





$(document).ready(function(){
    console.log("hiiii");
    $(".nav-icon").click(function(){
        $(".full-nav").addClass("open");
    });
       
     
      $(".nav-close").click(function () {
       $(".full-nav").remove("open");
   });
});
