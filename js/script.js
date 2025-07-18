//ハンバーガーメニュー
$(function(){

let hamburger_click_count = 0;
$(".hamburger").on("click",function(){
    if (window.matchMedia('(max-width: 768px)').matches) {
    $(".hamburger").toggleClass("toggle");
    $(".header_ul").css("display","flex");
    hamburger_click_count++;
    even_count = hamburger_click_count%2;
    if(even_count == 0){
        $(".header_nav ul").removeClass("nav_toggle_open");
        $(".header_nav ul").addClass("nav_toggle_close");
            $("header").css("z-index","-1");
             $("header").css("transition","z-index 4s");
    }else{
        $(".header_nav ul").removeClass("nav_toggle_close");
        $(".header_nav ul").addClass("nav_toggle_open");
        $("header").css("z-index","3");
        $("header").css("transition","none");

    }
    }

});
$(".header_ul li a").on("click",function(){
    if (window.matchMedia('(max-width: 768px)').matches) {
        $(".header_nav ul").removeClass("nav_toggle_open");
        $(".header_nav ul").addClass("nav_toggle_close");
        $(".hamburger").removeClass("toggle");
        $("header").css("z-index","-1");
        $("header").css("transition","z-index 4s");
        hamburger_click_count++;  
    } 
});
//PCサイズのとき
$(window).resize(function(){
    even_count = hamburger_click_count % 2;
  if (window.matchMedia('(min-width:769px)').matches) {
    $(".header_nav ul").removeClass("nav_toggle_open");
    $(".header_nav ul").removeClass("nav_toggle_close");
    $(".header_nav ul").css("display","flex");
    if(even_count == 0){
        $(".header_nav ul").removeClass("header_ul");
    }
    $("header").css("z-index","3");
  }else{
    if(even_count == 0 ){
        $(".header_nav ul").css("display","none");
        $("header").css("z-index","-1");
    }
    $(".header_nav ul").addClass("header_ul");
  }
});

//スクロールダウン
//  document.addEventListener("DOMContentLoaded", () => {
  const text = "SCROLL DOWN ";
  const repeatedText = text.repeat(2);
  const circleText = document.querySelector(".circle-text_02");
  const totalChars = repeatedText.length;
  const anglePerChar = 360 / totalChars;

  for (let i = 0; i < totalChars; i++) {
    const span = document.createElement("span");
    span.textContent = repeatedText[i];
    span.style.transform = `rotate(${i * anglePerChar}deg)`;
    circleText.appendChild(span);
  }
// });

});
