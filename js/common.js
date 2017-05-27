$(function(){
  (function(){
    $(document).on("click","*[data-url]",function(){
      var link=$(this).attr("data-url");
      if(link){
        window.location.href=link;
      }
    });
  })();
})
