$(window).on('scroll', function() {
  var winScroll = $(this).scrollTop();

  $('.star').css({
    'transform': 'translate(-' + winScroll / 2 + '%)'
  });
  $('.moon').css({
    'transform': 'translateY(-' + winScroll / 6.5 + '%)'
  });
    $('.headline').css({
    'transform': 'translate(+' + winScroll / 8.5 + '%)'
  });
});

$('.scroll-button').click(function(){
    $("body").animate({ scrollTop: window.pageYOffset + $(window).height()}, 2000);
    return false;
 });


 //wheel scroll across and rotate
 //marble works goes to certain point, click, do something, then move to the next one.
 //fadein/fadeout changing views
 //morphing shapes