$(document).ready(function(){
  var url = "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=zL8PxsEf3xYPolNKmWQFxSuqRVlMrpdZ";

    $.getJSON(url, function(data){
      var li = document.getElementsByClassName("news");
      for(var i = 0; i < 5; ++i){
        li[i].style.backgroundImage = "url('" + data.results[i].multimedia[0].url + "')";
        li[i].href = data.results[i].url;
        var h = document.createElement("h4");
        h.textContent = data.results[i].title;
        li[i].appendChild(h);
      }
    })
})
