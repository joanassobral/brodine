let footnote_container = document.getElementById("footnote_container")

function displayFootnote(footnote_individual_container){
    footnote_container.appendChild(footnote_individual_container)
    footnote_displaying = true;
}

function hideFootnote(footnote_individual_container){
    footnote_container.removeChild(footnote_individual_container)
    footnote_displaying = false;
}


Array.from(document.getElementsByClassName("essay_footnote")).forEach((essay_footnote,i) => {
    let footnote_individual_container = document.createElement("div");
        footnote_individual_container.classList.add("footnote_individual_container");

    let footnote_number = document.createElement("p");
        footnote_number.classList.add("footnote_number")
        footnote_number.innerHTML = essay_footnote.innerHTML;
        footnote_individual_container.appendChild(footnote_number)

    let footnote_text = document.createElement("p");
        footnote_text.classList.add("footnote_text")
        footnote_text.innerText = footnote_text_array[i];
        footnote_individual_container.appendChild(footnote_text)


    let footnote_displaying = false;

    window.addEventListener("scroll",()=>{
        if(essay_footnote.offsetTop <= window.scrollY+window.innerHeight &&
            essay_footnote.offsetTop >= window.scrollY &&
            footnote_displaying == false){
                displayFootnote(footnote_individual_container) 
        } else {
            hideFootnote(footnote_individual_container)
        }
    })
});