import { defaultProject, projectSection, setCurrentProject } from "../index"
import { deleteDOM } from "./deleteDOM"
import { createBtnProject } from "./createBtnProject"
import { inputClassNames } from "../components/projectData"
import { newTaskList, projectList } from "../components/TodoHandler"
import { removeTask } from "../components/removeTask"
import { createList } from "./createList"

let counter = 0

export const newButton = () => {
    const button = document.createElement("button")
    button.classList.add("new__project-btn")
    button.innerHTML = `<i class="fa fa-plus" aria-hidden="true"></i> Add New Project`
    button.onclick = createInput

    return button  
}

const createInput = () => {
    deleteDOM(0, "new__project-btn")

    const div = document.createElement("div")
    div.classList.add(inputClassNames.div)
    const input = document.createElement("input")
    input.classList.add(inputClassNames.input)
    input.setAttribute("placeholder", "Enter Project title")

    const buttonDiv = document.createElement("div")
    buttonDiv.classList.add("add-task-button")
    const acceptButton = document.createElement("button")
    acceptButton.classList.add(inputClassNames.acceptBtn)
    const rejectButton = document.createElement("button")
    rejectButton.classList.add(inputClassNames.rejectBtn)

    acceptButton.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`
    rejectButton.innerHTML = "X"
    acceptButton.onclick = acceptProjectTitle
    rejectButton.onclick = removeInput

    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
            acceptButton.click()
        }
    })

    buttonDiv.append(acceptButton)
    buttonDiv.append(rejectButton)
    
    div.append(input)
    div.append(buttonDiv)

    projectSection.append(div)
}

const acceptProjectTitle = () => {
    counter++
    const getInput = document.getElementsByClassName(inputClassNames.input)[0]
    const div = document.createElement('div')
    div.classList.add("project")
    let tempTitle = ''
    if (getInput.value !== "") {
        tempTitle = getInput.value
    } else {
        tempTitle = `Project #${counter}`
    }
    let project = newTaskList(tempTitle)
    div.append(createBtnProject(false, project))
    div.append(newRemoveButton(project, "project"))
    projectSection.append(div)
    setCurrentProject(project)
    removeInput()
}

const removeInput = () => {
    deleteDOM(0, "new__project")
    projectSection.append(newButton())
}

const newRemoveButton = (project, className) => {
    const button = document.createElement("button")
    button.classList.add("remove__project")
    button.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`
    button.onclick = () => {removeProject(project, className)}

    return button  
}

const removeProject = (project, className) => {
    let index = projectList.indexOf(project)
    projectList.splice(index, 1)
    project.tasks.forEach(task => removeTask(task))
    deleteDOM(index-1, className)
    deleteDOM(0, inputClassNames.projSection)
    setCurrentProject(defaultProject)
    content.append(createList(defaultProject))
}