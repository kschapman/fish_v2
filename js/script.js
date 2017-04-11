$(document).ready(function(){




  // $('#burger-container.open').click(function(){
  //   alert("this is working");
  //   $('#slide').hide();
  // });

  $("#burger-container").click(function(){
    $(this).toggleClass("open");
    $('#slide').toggle();
  });

  // $('#burger-container').click(function(){
  //   $('#slide').show();
  // });

  $('#slide li a').click(function(){
    $('#slide').hide();
    $('#burger-container').toggleClass("open");
  });

  if ($(window).width()>768) {
    $('#slide').hide();
  }


});


$(window).resize(function(){
  if ($(window).width()>768) {
    $('#slide').hide();
    $('#burger-container').removeClass("open");
  }
});
