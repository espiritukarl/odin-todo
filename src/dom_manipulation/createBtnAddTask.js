import { addtaskModal } from "../components/modal";

export const newTaskBtn = () => {
    const btn = document.createElement("button")
    const modal = document.getElementById("addTaskDialog");

    btn.setAttribute("id", "add-task-btn")
    btn.innerHTML = `<i class="fa fa-plus" aria-hidden="true"></i> Add New Task`

    btn.onclick = function() {
        addtaskModal.showModal()
    }
    return btn
}