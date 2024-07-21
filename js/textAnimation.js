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

function textIsDone(){
    console.log("new text")
}

function typeOutTextIntro(text_string_array, parentElement,j){
    let currentTextString = text_string_array[j];

    let newP = document.createElement("p");
        parentElement.appendChild(newP)

        setTimeout(()=>{
            var i = 0;
            var interval = setInterval(function(){
                newP.innerHTML += currentTextString.charAt(i);
                i++;
                if (i > currentTextString.length){
                    clearInterval(interval);
                    j++
                    if(j<text_string_array.length){
                        typeOutTextIntro(text_string_array, parentElement,j)
                    } else {
                        setTimeout(()=>{
                            enablePoem()
                        },1000)
                    }
                }
            }, 3);
        },1000)
}