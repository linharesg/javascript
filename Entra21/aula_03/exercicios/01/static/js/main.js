$(document).ready(() => {

const $toggleButton = $("#clicker")
const $textToHide = $("p")

/**
 * Revela/oculta o texto secreto e altera o texto do botão
 */
buttonHideText = () => {
    isHidden = !isHidden;
    if (!isHidden) {
        $textToHide.css("display", "block")
        $toggleButton.text("Clique para ocultar o segredo!")
        return
    }
    $textToHide.css("display", "none")
    $toggleButton.text("Clique para revelar um segredo!")
}

let isHidden = true;
$toggleButton.click(buttonHideText);

})