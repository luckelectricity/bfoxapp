$(function(){
  $.ajax({
    url:"./json/jisuanji.json",
    success:function(data){
      var tfstr="",hotstr="",rcstr="";
      for(var i in data.timefree){
        tfstr+=`<li data-url="${data.timefree[i].url}"><img src="${data.timefree[i].image}" alt=""><p>${data.timefree[i].title}</p><p>${data.timefree[i].author}</p></li>`;
      }
      for(var m in data.hot){
        hotstr+=`<li data-url="${data.timefree[i].url}"><img src="${data.hot[m].image}" alt=""><p>${data.hot[m].title}</p><p>${data.hot[m].author}</p></li>`;
      }
      for(var n in data.recommend){
        rcstr+=`<div data-url="${data.timefree[i].url}" class="list"><p class="bookpic"><img src="${data.recommend[n].image}"/></p><div class="booktext"><p>${data.recommend[n].title}</p><p>翻译：${data.recommend[n].author}</p><p>藏书量：${data.recommend[n].numbers}</p></div></div>`;
      }
      $(".container section .timefree .tfList").html(tfstr);
      $(".container section .hot .tfList").html(hotstr);
      $(".container section .recommend .reseverc").html(rcstr);
    },
    error:function(error){
      console.log("出错："+error);
    }
  })
})
