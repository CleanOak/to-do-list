let itemInput = document.getElementById("myInput");
let itemsList = document.getElementsByTagName("li");
let i;

/* Create close x button*/
for (i = 0; i < itemsList.length; i++){
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    itemsList[i].appendChild(span);
}

