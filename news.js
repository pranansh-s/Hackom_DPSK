$(document).ready(function(){
  var url = "https://newsapi.org/v2/top-headlines?q=corona&country=us&apiKey=492c83b3fb69467dba5345df7c3b8257";

    $.getJSON(url,function(data){
      console.log(data);
      var li = document.getElementsByClassName("news");
      for(var i = 0; i < 5; ++i){
        li[i].style.backgroundImage = "url('" + data.articles[i].urlToImage + "')";
        li[i].href = data.articles[i].url;
        var h = document.createElement("h4");
        h.textContent = data.articles[i].title;
        li[i].appendChild(h);
      }
    })
})
