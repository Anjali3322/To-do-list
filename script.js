
function addList(){
    let addNewList = document.createElement("li")
    // let checkbox = document.createElement("input")
    // checkbox.type = checkbox
    let list = document.getElementById("itemList")
    if(input.value==="") 
    //     {    //     alert("type something")    // }
        return;
    // addNewList.appendChild("checkbox")
    list.appendChild(addNewList)
    
    addNewList.textContent = document.getElementById("input").value
    document.getElementById("input").value = ""

    let delEditBtn = document.createElement("div")
    addNewList.appendChild(delEditBtn)
    deleteButton(delEditBtn)
    editButton(delEditBtn)

function deleteButton(delEditBtn){
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "delete"
    deleteBtn.style.cssText ="color:red; border:none; background:transparent"
    delEditBtn.appendChild(deleteBtn)
    deleteBtn.onclick = function(){
    addNewList.remove()
    }
}
function editButton(delEditBtn){
    let editBtn = document.createElement("button")
    editBtn.textContent = "edit"
    editBtn.style.cssText ="color:red; border:none; background:transparent"
    delEditBtn.appendChild(editBtn)
    editBtn.onclick = function(){
    input.value = addNewList.innerText
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


