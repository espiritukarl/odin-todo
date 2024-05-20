export const deleteDOM = (index, className) => {
    const element = document.getElementsByClassName(className)[index]
    element.remove()
}