// Select elements

const input = document.querySelector("#item-input");
const list = document.querySelector("#list");
const form = document.querySelector("#new-item-form");

form.addEventListener('submit', e => {
    e.preventDefault()
    
    const inputValue = input.value.trim()

    if(!inputValue) return

    const newLI = document.createElement('li')
    newLI.textContent = inputValue
    newLI.classList.add("list-item")
    list.appendChild(newLI)
    input.value = ""
    
    newLI.addEventListener('click', () => {
        newLI.remove()
    })

})
 

