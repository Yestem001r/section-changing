const buttons = document.querySelectorAll("button")
const sections = document.querySelectorAll("section")

buttons.forEach((button, i)=> {
  button.addEventListener("click", ()=> {
    removeActive()
    button.classList.add("active")
    sections[i].classList.add("active")
  })
})

function removeActive() {
  buttons.forEach((button)=> {
    button.classList.remove("active")
  })
  sections.forEach((section)=> {
    section.classList.remove("active")
  })
}