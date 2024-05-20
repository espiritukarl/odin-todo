import { getCurrentProject } from ".."
import { editTask } from "../components/editTask"
import { modalFnc, openTaskModal as dialog, editTaskModal as editDialog, openTaskModal as openDialog } from "../components/modal"
import { deleteDOM } from "./deleteDOM"

export const openTask = (tasks) => {
    tasks.forEach((task, index) => {
        task.addEventListener('click', () => {
            openTaskDialog(getCurrentProject().tasks[index])
        })
    })
}

const openTaskDialog = (task) => {
    const modalDiv = document.getElementById("openTaskModal");

    modalFnc()
    if (document.getElementsByClassName("open-task__content").length > 0) deleteDOM(0, "open-task__content")

    const div = document.createElement('div')
    div.classList.add("open-task__content")             
    const btn = document.createElement('button')

    let projectName = document.createElement("div")
    let title = document.createElement("div")
    let description = document.createElement("div")
    let dueDate = document.createElement("div")
    let priority = document.createElement("div")
    let complete = document.createElement("div")
    let span = document.createElement("span")

    task.description === "" ? span.textContent = "No description provided." : span.textContent = `${task.description}`
    span.classList.add("task-description")

    projectName.textContent = `Project: ${task.origin}`
    title.textContent = `Title: ${task.title}`
    description.textContent = "Description: "
    description.append(span);
    dueDate.textContent = `Due date: ${task.dueDate}`
    priority.textContent = `Priority: ${task.priority}`
    complete.textContent = `Complete: ${task.complete ? "Yes" : "No"}`
    btn.innerHTML = 'Edit'
    btn.onclick = function() {
        editDialog.showModal()
        openDialog.close()
    }

    div.append(projectName)
    div.append(title)
    div.append(description)
    div.append(dueDate)
    div.append(priority)
    div.append(complete)
    div.append(btn)

    modalDiv.append(div)

    dialog.append(modalDiv)
    dialog.showModal()

    editTask(task)
}