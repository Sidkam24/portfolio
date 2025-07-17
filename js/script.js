//タイトルテキストアニメーション
$(function(){
// const animationTargetElements = document.querySelectorAll(".textanimation");
// for( let i =0; i < animationTargetElements.length; i++ ){
//     const targetElement = animationTargetElements[i]
//     texts = targetElement.textContent;
//     textsArray = [];
    
//     targetElement.textContent = "";


//     for(let j =0; j < texts.split("").length; j++){
//     textsArray.push('<span><span style="animation-delay: '+ ((j+5) * 0.2) +'s" >' + texts.split("")[j] + '<span></span>')
//     }
//     for(let k =0; k < textsArray.length; k++){
//         targetElement.innerHTML += textsArray[k];
//     }
// }
// const cursor = document.getElementById("cursor");
// document.addEventListener("mousemove",function(e){
//     cursor.style.transform =  ` translate(${e.clientX}px,${e.clientY}px) ` 
// });

let hamburger_click_count = 0;
//ハンバーガーメニュー
$(".hamburger").on("click",function(){
    $(".hamburger").toggleClass("toggle");
    $(".header_nav ul").toggleClass("nav_toggle");
    hamburger_click_count++;
    even_count = hamburger_click_count%2;
    if(even_count == 0){
        $(".header_nav ul").css("animation","close-circle 1s forwards");
    }else{
        $(".header_nav ul").css("animation","circle 1s");
        $(".header_nav ul").css("display","flex");
    }
});
$(".header_ul li a").on("click",function(){
    $(".header_nav ul").css("animation","close-circle 1s forwards");
    $(".hamburger").removeClass("toggle");
    hamburger_click_count++;
});

});