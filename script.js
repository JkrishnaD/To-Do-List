
let taskInput = document.getElementById("input")

let taskList = document.querySelector(".taskList")

let button = document.getElementById("btn")

button.addEventListener("click", (e) => {
    e.preventDefault();
    const list = taskInput.value;
    
    if(list == ""){
       alert("Enter Task");
    }else{
        console.log(list);
        const listItem = document.createElement("li");
        listItem.innerHTML = list;
        taskList.append(listItem);

        const del = document.createElement("span");
        del.innerHTML = `&times;`
        listItem.appendChild(del)
        saveList();
    }
})

taskList.addEventListener("click",(e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("check");
        saveList();
    }

    if(e.target.tagName=="SPAN"){
        let li = e.target.parentElement;
        li.remove();
        saveList();
    }
})

function showList(){
    taskList.innerHTML = localStorage.getItem("taskList");
}

function saveList(){
    localStorage.setItem("taskList",taskList.innerHTML);
}

showList();
