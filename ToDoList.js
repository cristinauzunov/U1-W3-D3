
const input = document.getElementById("new-task")
const addButton = document.getElementById("add-button")
const TaskList = document.getElementById("Task-list")

function addTask(){
    const text = input.value.trim()
    if (!text) return

const li = document.createElement("li")
li.classList.add("li")

const label = document.createElement("span")
label.textContent = text
label.addEventListener("click", ()=>{
    li.classList.toggle("done")
})
const deleteButton = document.createElement("button")
deleteButton.textContent= "ELIMINA"
deleteButton.addEventListener("click", ()=> li.remove())
deleteButton.classList.add("deleteButton")

li.appendChild(label)
li.appendChild(deleteButton)
TaskList.appendChild(li)

input.value = ""
input.focus()
}

addButton.addEventListener("click", addTask)




