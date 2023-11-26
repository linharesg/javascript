const $gridItem = $(".grid-item")
const $text = $("body p")

const updateSelected = function () {

    //removendo  a classe da seleção anterior
    $gridItem.removeClass("selected");

    //selecionando o botão clicado
    $(this).addClass("selected")

    //alterando o texto da <p>
    $text.text(`Quadrado selecionado: ${$(this).text()}`)
}

$gridItem.click(updateSelected)

