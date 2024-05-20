import { addtaskModal, modalFnc } from "./modal";
import { Task, addTodo } from './TodoHandler'
import { getCurrentProject, content } from "../index"
import { defaultProject } from "../index"
import { createList } from "../dom_manipulation/createList";
import { openTask } from "../dom_manipulation/openTask";
import { capitalizeFirstLetter } from "./capitalize";

export const addTask = () => {
    modalFnc()
    const addTaskForm = document.getElementById("add-task-form")
    addTaskForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        const entries = Object.fromEntries(data.entries())
        
        let task = Task(getCurrentProject().title, entries.title, entries.description, entries['due-date'], capitalizeFirstLetter(entries.priority), Boolean(entries.complete))
        
        if (defaultProject != getCurrentProject()) {
            addTodo(getCurrentProject(), task)
        }
        addTodo(defaultProject, task)
        content.append(createList(getCurrentProject()))
        addtaskModal.close()
        addTaskForm.reset()

        openTask(document.querySelectorAll('.task'))
    })
}