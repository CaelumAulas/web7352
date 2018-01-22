;(function(){
    const btn = $("#btnSync")

    btn.click(function(){

        btn.addClass("botaoSync--esperando")

        const xhr = new XMLHttpRequest()
        xhr.open("POST", "http://ceep.herokuapp.com/cartoes/salvar")
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify({
            usuario: "art"
            ,cartoes: Array.from($(".cartao")).map(function(cartaoJ){
                return {
                    conteudo: cartaoJ.querySelector("p").textContent
                    ,cor: cartaoJ.style.backgroundColor
                }
            })
        }))

        xhr.addEventListener("load", function(){            
            btn.addClass("botaoSync--sincronizado")
            btn.removeClass("botaoSync--deuRuim")
            btn.removeClass("botaoSync--esperando")
        })
        
        xhr.addEventListener("error", function(){
            btn.addClass("botaoSync--deuRuim")
            btn.removeClass("botaoSync--sincronizado")
            btn.removeClass("botaoSync--esperando")
        })


    })

    btn.removeClass("no-js")
})()