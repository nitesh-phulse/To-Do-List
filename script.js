//code for input box starts here
const inputBox = document.getElementById("input-box");
const listConntainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("you must write something!");

    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConntainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
 //code for check uncheck todo
listConntainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//code for saving data in the browser
function saveData(){
    localStorage.setItem("data", listConntainer.innerHTML);
}

function showTask(){
    listConntainer.innerHTML = localStorage.getItem("data");
}
showTask();



