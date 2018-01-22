// Immeadiatelly Invoked Function Expression
keyboardeventKeyPolyfill.polyfill();

let criaCartao = (function(){   
    "use strict"
 
    let numeroDoCartao = 0
    // explodindo parâmetro
    // destructuring parâmetro

    return function criaCartao({conteudo:c, cor = "#EBFE40"}){
        numeroDoCartao++
        const $cartao = $(`
            <article id="cartao_${numeroDoCartao}" class="cartao" tabindex="0" style="background-color: ${cor};">
                <div class="opcoesDoCartao">
                <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                    <svg><use xlink:href="#iconeRemover"></use></svg>
                </button>
    
                <input type="radio" name="corDoCartao${numeroDoCartao}" value="${cor}" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo" checked>
                <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: ${cor};" tabindex="0">
                    Padrão
                </label>
    
                <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
                <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                    Importante
                </label>
    
                <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
                <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                    Tarefa
                </label>
    
                <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
                <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                    Inspiração
                </label>
                </div>
                <p class="cartao-conteudo" contenteditable tabindex="0">${c}</p>
            </article>
        `)
    
        $cartao.appendTo(".mural")
    
        $cartao.on("focusin", function(){
            $(this).addClass("cartao--focado")
        })
    
        $cartao.on("focusout", function(){
            $(this).removeClass("cartao--focado")
        })
    
        //Event Delegation
        $cartao.on("change", ".opcoesDoCartao-radioTipo", function (evento){
            $cartao.css("background-color", evento.target.value)
        })
        
        $cartao.on("keypress", ".opcoesDoCartao-tipo", function(evento){
            console.log(evento.key)
            if((evento.key == "Enter" || evento.key == " ")){
                evento.target.click()
            }
        })
    
        $cartao.on("click", ".opcoesDoCartao-remove", function (evento){
            $cartao.addClass("cartao--some")
            
            $cartao.on("transitionend", function(){
                $cartao.remove()
            })
        })
    }
})()

$.ajax({
    url: "http://ceep.herokuapp.com/cartoes/carregar/?usuario=art"
    ,method: "GET"
    ,data: {
        usuario: "art"
    }
    ,contentType: "json"
    ,dataType: "jsonp"
    ,success: function(objetao){
        const listaMsgs = objetao.cartoes
        listaMsgs.forEach(msg => {
            criaCartao(msg)
        })
    }
})

