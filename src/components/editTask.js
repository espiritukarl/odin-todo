import { content, getCurrentProject } from "..";
import { createList } from "../dom_manipulation/createList";
import { openTask } from "../dom_manipulation/openTask";
import { editTaskModal, modalFnc } from "./modal";
import { capitalizeFirstLetter } from "./capitalize"

export const editTask = (task) => {
    modalFnc()

    const editTaskForm = document.getElementById("edit-task-form")
    editTaskForm.reset()

    document.getElementById("edit-title").value = task.title
    document.getElementById("edit-description").value = task.description
    document.getElementById("edit-due-date").value = task.dueDate
    switch(task.priority) {
        case "Low":
            document.getElementById("edit-low").checked = true
            break
        case "Medium":
            document.getElementById("edit-medium").checked = true
            break
        case "High":
            document.getElementById("edit-high").checked = true
            break
    }
    document.getElementById("edit-complete").checked = task.complete

    editTaskForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        const entries = Object.fromEntries(data.entries())

        task.title = entries.title
        task.description = entries.description
        task.dueDate = entries['due-date']
        task.priority = capitalizeFirstLetter(entries.priority)
        task.complete = Boolean(entries.complete)

        content.append(createList(getCurrentProject()))
        openTask(document.querySelectorAll('.task'))

        editTaskModal.close()
    })
}