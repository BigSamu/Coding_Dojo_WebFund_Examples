// var pTags=document.querySelectorAll("p");

function getColor(element){
    console.log(element.value);
    var pTags=document.querySelectorAll("p");
    // console.log(pTags);
    for(var i=0; i<pTags.length;i++){
        pTags[i].style.color = element.value;
    }
}