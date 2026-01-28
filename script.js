
function addList(){
    let addNewList = document.createElement("li")
    // let checkbox = document.createElement("input")
    // checkbox.type = checkbox
    let list = document.getElementById("itemList")
    // addNewList.appendChild("checkbox")
    list.appendChild(addNewList)
    addNewList.textContent = document.getElementById("input").value
    document.getElementById("input").value = ""
    deleteButton(addNewList)
}
function deleteButton(addNewList){
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "delete"
    deleteBtn.style.cssText ="color:red; border:none; backgroundColor:transparent"
    addNewList.appendChild(deleteBtn)
    deleteBtn.onclick = function(){
    addNewList.remove()
    }
}

let compOne = document.createElement("p")
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