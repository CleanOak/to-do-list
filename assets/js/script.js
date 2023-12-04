const inputBox = document.getElementById("myInput");
let itemsList = document.getElementById("content-list");


function addTask(){
    //conditional statment to alert empty input box and add task
    if (inputBox.value === ''){
        alert("You must add a task!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        itemsList.appendChild(li);

        //create 'x' button to delete added task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    //empty input box after adding task
    inputBox.value ='';
}




