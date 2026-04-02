
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
                let deleteBtn = document.createElement("button")
                let editBtn = document.createElement("button")
    

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
    task.appendChild(addNewList)
    // addNewList.appendChild(taskContent)
    document.getElementById("input").value = ""

    checkbox.onchange = function(){
        if(checkbox.checked){
            taskContent.style.cssText = "text-decoration : line-through solid red 2px";
        }
        else{
            taskContent.style.cssText = "text-decoration : none"
        }
    }
     
    // let delEditBtn = document.createElement("div")
    // addNewList.appendChild(delEditBtn)
    deleteButton(delEditBtn)
    editButton(taskContent)

function deleteButton(delEditBtn){

    deleteBtn.textContent = "delete"
    deleteBtn.style.cssText ="color:red; background:transparent; border: 2px solid red; padding:6px; border-radius:6px; cursor:pointer"
    delEditBtn.appendChild(deleteBtn)
    deleteBtn.onclick = function(){
    addNewList.remove()
    }
}
function editButton(taskContent){
    
    editBtn.textContent = "edit"
    editBtn.style.cssText ="color:green; background:transparent; border: 2px solid green; padding:6px; border-radius:6px; cursor:pointer"
    delEditBtn.appendChild(editBtn)
    editBtn.onclick = function(){
    input.value = taskContent.innerText
    editTask = taskContent; 
    }
}
}

// let compOne = document.createElement("p")
// let idx = 0
// for(p[0] of complete){
//     p[0].innerText = `complete ${idx}`
//     idx++
// }
// let compTwo = document.createElement("p")
// let complete = document.getElementById("complete")
// complete.insertAdjacentElement("afterbegin", compOne)
// complete.insertAdjacentElement("beforeend", compTwo)
// compOne.textContent = "complete"
// compTwo.textContent = "Uncomplete"


