$(document).ready(function(){


  // $('#burger-container').click(function(){
  //   $('#slide').show();
	// });
  //
  $('body li a').click(function(){
    $('#slide').hide();
    $('#burger-container').toggleClass("open");
	});

  // $('#burger-container.open').click(function(){
  //   alert("this is working");
  //   $('#slide').hide();
  // });

  $("#burger-container").on('click', function(){
    $(this).toggleClass("open");
    $('#slide').toggle();
  });



});
