import './style.css'
import { newButton } from "./dom_manipulation/project"
import { menuItems } from "./components/projectData"
import { createBtnProject } from "./dom_manipulation/createBtnProject"
import { newTaskList } from "./components/TodoHandler"
import { createList } from "./dom_manipulation/createList"
import { openTask } from './dom_manipulation/openTask'
import { addTask } from "./components/addTask"
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

export const content = document.querySelector("#content")
export const menuSection = document.querySelector(".menu__section")
export const projectSection = document.querySelector(".project__section")

export const defaultProject = newTaskList(menuItems.home)
let currentProject = defaultProject

export const getCurrentProject = () => currentProject
export const setCurrentProject = (val) => (currentProject = val)

projectSection.append(newButton())
menuSection.append(createBtnProject(true, defaultProject))
content.append(createList(defaultProject))

addTask()
openTask(document.querySelectorAll('.task'))