let itemInput = document.getElementById("myInput");
let itemsList = document.getElementsByTagName("li");
let close = document.getElementsByClassName("close");
let inputValue = document.getElementById("myinput");
let span = document.createElement("span"); 
let txt = document.createTextNode("\u00D7");
let i;

/* Create close x button*/
for (i = 0; i < itemsList.length; i++){
    span.className = "close";
    span.appendChild(txt);
    itemsList[i].appendChild(span);
}

for (i = 0; i < close.length; i++){

}


function newElement(){
    let newItem = document.createElement("li");
    let addToList = document.createTextNode(inputValue);

    newItem.appendChild(addToList);
    if (inputValue === " ") {
        alert ("Type in something you want to do");
    } else {
        document.getElementById("myUL").appendChild(newItem);
    }
       document.getElementById("myInput").innerHTML = "";

    span.className = "close";
    span.appendChild(txt);
    newItem.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

