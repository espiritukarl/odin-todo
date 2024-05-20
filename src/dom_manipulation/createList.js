import { inputClassNames } from "../components/projectData"
import { deleteDOM } from "./deleteDOM";
import { newTaskBtn } from "./createBtnAddTask";
import { removeTask } from "../components/removeTask";
import { getCurrentProject } from "..";

export const createList = (project) => {

    resetList(inputClassNames.projSection)

    const section = document.createElement("section")
    section.classList.add(inputClassNames.projSection)

    const h2 = document.createElement("h2")
    h2.classList.add("task-list-title")
    h2.textContent = project.title

    const listDiv = document.createElement("div")
    listDiv.classList.add("task-list")

    project.tasks.forEach((task, index) => {
        const div = document.createElement("div")
        div.classList.add("task-item")

        const individualTask = document.createElement("span")
        individualTask.classList.add('task')

        const span = document.createElement("span")
        const title = document.createElement("span")
        const date = document.createElement("span")
        date.classList.add("task-date")

        title.textContent = task.title
        date.textContent = task.dueDate
        span.append(taskComplete(index))

        individualTask.append()
        individualTask.append(title)
        individualTask.append(date)

        div.append(span)
        if (task.complete) {
            div.classList.add('strikethrough')
        } else {
            div.classList.add(task.priority.toLowerCase().concat("-priority"))
        }

        div.append(individualTask)
        div.append(newRemoveButton(task, "task"))
        
        listDiv.append(div)
    });

    section.append(h2)
    section.append(listDiv)
    section.append(newTaskBtn())

    return section
}

const resetList = (className) => {
    const element = document.getElementsByClassName(className)
    if (element.length > 0) {
        deleteDOM(0, className)
    }
}

const newRemoveButton = (task, className) => {
    const button = document.createElement("button")
    button.classList.add("remove__project")
    button.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`
    button.onclick = () => {removeTask(task)}

    return button  
}

const taskComplete = (index) => {
    let task = getCurrentProject().tasks[index]
    const input = document.createElement("input")
    input.setAttribute('type', "checkbox")

    input.checked = task.complete
    input.addEventListener('click', () => {
        const taskItem = document.querySelectorAll('.task-item')
        task.complete = input.checked
        taskItem[index].classList.toggle('strikethrough')
        taskItem[index].classList.toggle(task.priority.toLowerCase().concat("-priority"))
    })

    return input
}