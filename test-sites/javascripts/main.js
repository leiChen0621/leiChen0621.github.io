let headText = document.querySelector("h3");
headText.textContent = "Hello World";

let myImg = document.querySelector('image');
let changeFlag = false;
myImg.onclick = function(){
    let src = myImg.getAttribute('src');
    if(changeFlag){
        myImg.setAttribute('src','images/timg.jpg');
        changeFlag = false;
    }
    else{
        myImg.setAttribute('src','');
        changeFlag = true;
    }
}