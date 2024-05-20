import { content, setCurrentProject } from "../index"
import { createList } from "./createList"
import { inputClassNames } from "../components/projectData"
import { openTask } from "./openTask"

export const createBtnProject = (homeBtn, project) => {
    const button = document.createElement("button")
    if (homeBtn) {
        button.classList.add("home__button")
        button.innerHTML = `<i class="fa fa-home" aria-hidden="true"></i>  Home`
    }   
    else {
        button.classList.add(inputClassNames.proj)
        button.textContent = project.title
    }

    button.onclick = () => {
        setCurrentProject(project)
        content.append(createList(project))
        openTask(document.querySelectorAll('.task'))
    }

    content.append(createList(project)) 

    return button  
}