const inputBox = document.getElementById("myInput");
let itemsList = document.getElementsByTagName("content");


function addTask(){

    if (inputBox.value === ''){
        alert("You must add a task!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        itemsList.appendChild(li);
    }
}




