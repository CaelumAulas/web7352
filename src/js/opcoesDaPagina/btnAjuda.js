;(function(){
    "use strict"

    const btn = $(`
        <button id="btnAjuda" class="opcoesDaPagina-opcao opcoesDaPagina-botao">
            ?
        </button>
    `)

    // btn.on("click", function(){})

    btn.click(() => {
        const xhr = new XMLHttpRequest()
        xhr.open(
            "GET", 
            "http://ceep.herokuapp.com/cartoes/instrucoes"
        )
        xhr.send()
        xhr.addEventListener("load", function(){
            console.log(xhr.response)
            const objetao = JSON.parse(xhr.response)

            const listaMsgs = objetao.instrucoes

            listaMsgs.forEach(msg => {
                criaCartao(msg)
            })
        })
    })
    
    btn.appendTo(".opcoesDaPagina")
    
})()