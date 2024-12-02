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