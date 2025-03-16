//タイトルテキストアニメーション
const animationTargetElements = document.querySelectorAll(".textanimation");
for( let i =0; i < animationTargetElements.length; i++ ){
    const targetElement = animationTargetElements[i]
    texts = targetElement.textContent;
    textsArray = [];
    
    targetElement.textContent = "";


    for(let j =0; j < texts.split("").length; j++){
    textsArray.push('<span><span style="animation-delay: '+ ((j+5) * 0.2) +'s" >' + texts.split("")[j] + '<span></span>')
    }
    for(let k =0; k < textsArray.length; k++){
        targetElement.innerHTML += textsArray[k];
    }
}
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove",function(e){
    cursor.style.transform =  ` translate(${e.clientX}px,${e.clientY}px) ` 

});

//スクロールアニメーション
ScrollReveal({ reset: true , distance : "60px" , duration : 2000 , delay:200});
// ScrollReveal().reveal('.header_nav ul li', { delay: 300, origin:"left" , interval : 200 ,reset : false,duration:2000});
ScrollReveal().reveal('.sub_title', { delay: 200, origin:"left" });
ScrollReveal().reveal('.profile', { delay: 250, origin:"bottom" });
ScrollReveal().reveal('.profile_article', { delay: 300, origin:"right"  });
ScrollReveal().reveal('.card', { delay: 200, origin:"bottom" , interval : 200 });
ScrollReveal().reveal('.row', { delay: 200, origin:"bottom" , interval : 200 });