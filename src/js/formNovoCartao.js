;(function(){
    "use strict"

    const form = document.querySelector(".formNovoCartao")

    form.addEventListener("submit", evento => {
        evento.preventDefault()
        const conteudo = form.querySelector(".formNovoCartao-conteudo").value.trim()
        if(!conteudo){
            const div = document.createElement("div")
            div.classList.add("formNovoCartao-msg")
            div.textContent = "Não digite vários nadas"
            
            div.setAttribute("role", "alert")
            div.setAttribute("aria-live", "polite")

            form.insertBefore(div, form.children[form.children.length - 1])

            div.addEventListener("animationend", function(){
                div.remove()
            })
                         
        } else {
            criaCartao({conteudo})
        }
    })
    form.classList.remove("no-js")
})()