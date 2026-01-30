
let editTask = null;
function addList(){
    if(editTask !== null){
        editTask.innerText = input.value;
        editTask = null;
        input.value = "";
        return;
    }
    let addNewList = document.createElement("li")
    let task = document.getElementById("itemList")
    let taskContent = document.createElement("p")
    
    taskContent.innerText = input.value
    if(input.value==="") 
        return;
    task.appendChild(addNewList)
    addNewList.appendChild(taskContent)
    document.getElementById("input").value = ""
     

    let delEditBtn = document.createElement("div")
    addNewList.appendChild(delEditBtn)
    deleteButton(delEditBtn)
    editButton(taskContent)

function deleteButton(delEditBtn){
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "delete"
    deleteBtn.style.cssText ="color:red; border:none; background:transparent"
    delEditBtn.appendChild(deleteBtn)
    deleteBtn.onclick = function(){
    addNewList.remove()
    }
}
function editButton(taskContent){
    let editBtn = document.createElement("button")
    editBtn.textContent = "edit"
    editBtn.style.cssText ="color:red; border:none; background:transparent"
    delEditBtn.appendChild(editBtn)
    editBtn.onclick = function(){
    input.value = taskContent.innerText
    // addNewList.innerText = ""
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


