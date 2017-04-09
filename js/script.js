$(document).ready(function(){


  $('#burger-container').click(function(){
    $('#slide').show();
	});

  $('body li a').click(function(){
    $('#slide').hide();
    $('#burger-container').toggleClass("open");
	});

  $("#burger-container").on('click', function(){
    $(this).toggleClass("open");
  });

  $('open').click(function(){
    $('#slide').hide();
	});

});
