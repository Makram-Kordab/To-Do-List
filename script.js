const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let addPressed = false;

function addTask(){
    if(inputBox.value === '' && !addPressed){
        addPressed = true;
        alert("You must write something");
    }else if(inputBox.value === '' && addPressed){
        //do nothing;
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("Span");//adds the x/ delete button
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){//assigning functionality if user clicks the list item or x
    if(e.target.tagName === "LI"){  //toggling checked/unchecked if the user clickes either on the list item or on the circle
        e.target.classList.toggle("checked");
        saveData();//store changes
    }else if(e.target.tagName === "SPAN"){  //deleting the task if the user clicks the x
        e.target.parentElement.remove();
        saveData();
    }
}, false);

document.addEventListener("keydown", function(event) {//bind the enter to a function
    if (event.key === "Enter" && inputBox.value === '') {
        //do nothing
    }else if(event.key === "Enter" && inputBox.value != ''){
        addTask();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();