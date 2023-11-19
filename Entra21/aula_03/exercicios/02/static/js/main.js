$(document).ready(() => {

    const $html = $("html")

    $html.mousedown(function (e) {
        if (e.button == 2) {
            e.preventDefault();
            alert('Clique com botão direito desabilitado!');
        }
    });

    // document.addEventListener('contextmenu', event => event.preventDefault());


})