export const addtaskModal = document.getElementById("addTaskDialog");
export const editTaskModal = document.getElementById("editTaskDialog");
export const openTaskModal = document.getElementById("openTaskDialog");

export function modalFnc() {
    const addTaskForm = document.getElementById("add-task-form")
    const editTaskForm = document.getElementById("edit-task-form")
    const openTaskDiv = document.getElementById("openTaskModal")

    const closeAddtask = document.getElementById("closeAddTaskDialog");
    const closeOpenTask = document.getElementById("closeOpenTaskDialog");
    const closeEditTask = document.getElementById("closeEditTaskDialog");

    closeAddtask.addEventListener("click", () => {
        addtaskModal.close()
        addTaskForm.reset()
    })
    closeOpenTask.addEventListener("click", () => {
        openTaskModal.close()
    })
    closeEditTask.addEventListener("click", () => {
        editTaskModal.close()
        editTaskForm.reset()
    })

    addtaskModal.addEventListener("click", () => addtaskModal.close())
    editTaskModal.addEventListener("click", () => editTaskModal.close())
    openTaskModal.addEventListener("click", () => openTaskModal.close())

    addTaskForm.addEventListener("click", (event) => event.stopPropagation())
    editTaskForm.addEventListener("click", (event) => event.stopPropagation())
    openTaskDiv.addEventListener("click", (event) => event.stopPropagation())
}
