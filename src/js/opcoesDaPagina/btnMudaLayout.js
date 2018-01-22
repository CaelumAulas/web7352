;(function(){ 
    const btn = document.querySelector("#btnMudaLayout")

    function mudaTexto(){
        if(btn.textContent.trim() == "Linhas"){
            btn.textContent = "Blocos"
        } else {
            btn.textContent = "Linhas"
        }
    }

    function mudaLayout(){
        document.querySelector(".mural").classList.toggle("mural--linha")
    }

    btn.addEventListener("click", mudaTexto)
    btn.addEventListener("click", mudaLayout)

    // click é o nome do evento
    // mudaTexto é o handler do event listener
    btn.classList.remove("no-js")
})()