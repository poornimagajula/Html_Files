function showpop(){
    document.getElementById("show").style.visibility = "visible";
    document.getElementById("showwin").style.visibility = "visible";
}
function hidepop(){
    document.getElementById("show").style.visibility = "hidden";
    document.getElementById("showwin").style.visibility = "hidden";
}

var slideIndex = 1;
showImg(slideIndex);

function slideImages(number){
  showImg(slideIndex += number);
}

function showImg(number){
    var elements = document.getElementsByClassName("slides");
    if(number < 1){
        slideIndex = elements.length;
    }
    if(number > elements.length){
       slideIndex = 1
    }
    for(i=0;i<elements.length;i++){
       elements[i].style.display = "none";
    }
    elements[slideIndex-1].style.display = "block";

}

var acc= document.getElementsByClassName("section1");
for(let i=0;i<acc.length;i++){
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }
        else{
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}
