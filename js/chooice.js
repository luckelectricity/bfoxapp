$(function(){
  $(".nav li").click(function() {
      $(this).addClass('active').siblings().removeClass('active');
      var index = $(this).index();
      $('.review li').hide();
      $('.review li').eq(index).show();
  });
  $(".chooice .main ul").eq(0).find("li").click(function() {
      $(this).addClass('active').siblings().removeClass('active');
  });
})
