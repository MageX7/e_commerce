const body = document.querySelector("body")

const addModalContent = (content, ...rest)=>{
    const modal = document.createElement("div")
    modal.classList.add("modal")
    const overlay = document.createElement("div")
    overlay.classList.add("overlay")
    modal.appendChild(overlay)
    content.classList.add("modal-content")
    modal.appendChild(content)
    body.appendChild(modal)
    overlay.addEventListener("click",()=>{
        body.removeChild(modal)
    })
    if(rest.length !== 0){
        rest.forEach(element=>{
            element(modal)
        })
    }

}