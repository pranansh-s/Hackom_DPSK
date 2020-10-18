var btn = document.getElementById('search');
btn.addEventListener("click", function(){
  var type = document.getElementById('type');
  if(type.value == "") return;

  var locale = document.getElementById('locale');
  var wh = document.getElementById('wh');

  window.location = "res.html";
});
