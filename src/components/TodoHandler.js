// Factory for tasks
export const Task = (origin, title, description, dueDate, priority, complete) => {
    return {
        origin,
        title,
        description,
        dueDate,
        priority, 
        complete
    }
}

// Link Project titles and their tasks
export class Project {
    constructor(title, tasks) {
        this.title = title;
        this.tasks = tasks;
    }
}

// Have an array for Projects
export const projectList = []

// Creating an Array of all tasks for a project
export const newTaskList = (title) => {
    let newTaskList = new Project(title, new Array())
    projectList.push(newTaskList)
    return newTaskList
}

// Adding the task into the new project
export const addTodo = (project, task) => {
    project.tasks.push(task)
}