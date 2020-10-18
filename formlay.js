const nextBtnFir = document.querySelector(".next-1");
const prevBtnSec = document.querySelector(".prev-2");
const nextBtnSec = document.querySelector(".next-2");
const prevBtnThird = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const slidePage = document.querySelector(".slide-page");

nextBtnFir.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-27.5%";
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-55%";
});

submitBtn.addEventListener("click", function(){
  setTimeout(function(){
    alert("Your Successfully helped a great cause");
    location.reload();
  },800);
});

prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-27.5%";
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
});
