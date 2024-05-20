import { content, getCurrentProject } from "../index"
import { projectList } from "./TodoHandler"
import { createList } from "../dom_manipulation/createList"
import { openTask } from "../dom_manipulation/openTask"

export const removeTask = (task) => {
    projectList.forEach(project => {
        project.tasks.forEach((x, index) => {
            if (x === task) {
                project.tasks.splice(index, 1)
            }
        })
    })
    content.append(createList(getCurrentProject()))
    openTask(document.querySelectorAll('.task'))
}   