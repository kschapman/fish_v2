$(document).ready(function(){




  // $('#burger-container.open').click(function(){
  //   alert("this is working");
  //   $('#slide').hide();
  // });

  $("#burger-container").on('click', function(){
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



});
