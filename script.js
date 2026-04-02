let editTask = null;
function addList(){
    if(editTask !== null){
        editTask.innerText = input.value;
        editTask = null;
        input.value = "";
        return;
    }
    
    // CREATE ELEMENT
    let task = document.getElementById("itemList");
        let addNewList = document.createElement("li");
            let leftDiv = document.createElement("div");
                let checkbox = document.createElement("input");
                let taskContent = document.createElement("p");
            let rightDiv = document.createElement("div");
                let deleteBtn = document.createElement("button");
                let editBtn = document.createElement("button");
    

    // APPEND ELEMENT

    addNewList.appendChild(leftDiv);
        checkbox.type = "checkbox";
        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(taskContent);
    addNewList.appendChild(rightDiv);
        rightDiv.appendChild(deleteBtn);
        rightDiv.appendChild(editBtn);
    

    taskContent.innerText = input.value
    if(input.value==="") 
        return;
    task.appendChild(addNewList);
    document.getElementById("input").value = ""

    checkbox.onchange = function(){
        if(checkbox.checked){
            taskContent.style.cssText = "text-decoration : line-through solid grey 2px; color : grey";
        }
        else{
            taskContent.style.cssText = "text-decoration : none"
        }
        updateCount();
    }

    deleteButton(rightDiv)
    editButton(taskContent, rightDiv)

function deleteButton(rightDiv){
    deleteBtn.textContent = "delete"
    deleteBtn.style.cssText ="color:red; background:transparent; border: 2px solid red; padding:6px; border-radius:6px; cursor:pointer"
    rightDiv.appendChild(deleteBtn)
    deleteBtn.onclick = function(){
    addNewList.remove();
    updateCount();
    }
}
function editButton(taskContent, rightDiv){
    editBtn.textContent = "edit"
    editBtn.style.cssText ="color:green; background:transparent; border: 2px solid green; padding:6px; border-radius:6px; cursor:pointer"
    rightDiv.appendChild(editBtn)
    editBtn.onclick = function(){
    input.value = taskContent.innerText
    editTask = taskContent; 
    }
}
}

function updateCount() {
    let allCheckboxes = document.querySelectorAll('li input[type="checkbox"]');

    let completed = 0;
    let total = allCheckboxes.length;

    allCheckboxes.forEach(cb => {
        if (cb.checked) completed++;
    });

    let uncompleted = total - completed;

    document.getElementById("taskCount").innerText =
        `Completed: ${completed} | Uncompleted: ${uncompleted}`;
}

