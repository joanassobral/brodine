function typeOutText(text_string,text_container){
    var i = 0;
    var interval = setInterval(function(){
        text_container.innerHTML += text_string.charAt(i);
        i++;
        if (i > text_string.length){
            clearInterval(interval);
        }
    }, 3);
}

function typeOutTextWithP(text_string, parentElement){
    let newP = document.createElement("p");
        parentElement.appendChild(newP)
        typeOutText(text_string,newP);
}