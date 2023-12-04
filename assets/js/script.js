const inputBox = document.getElementById("myInput");
let itemsList = document.getElementById("content-list");


function addTask() {
    //conditional statment to alert empty input box and add task
    if (inputBox.value === '') {
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
    inputBox.value = '';
    saveData();
}

//click on task items to cancel or delete
itemsList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", itemsList.innerHTML);
}

function showTask() {
    itemsList.innerHTML = localStorage.getItem("data");
}

showTask();




