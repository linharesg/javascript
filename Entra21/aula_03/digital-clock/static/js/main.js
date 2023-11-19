$(document).ready(() => {

    //Selecionando os elementos do DOM
    const $clock = $(".clock")
    const $date = $(".date")
    const $toggleButton = $("#toggleButton")

    /**
     * Atualiza o relógio.
     */
    const updateClock = () => $clock.text(new Date().toLocaleTimeString())


    /**
     * Formata o dia da semana para português.
     * @param {number} dayOfWeek - Dia da semana
     * @returns {string} dia da semana formatado
     */
    const formatDayOfWeek = (dayOfWeek) => {
        const daysOfWeek = ["Domingo", "Sedunga-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
        return daysOfWeek[dayOfWeek];
    }

    /**
     * Formata o mês para português.
     * @param {number} month - Número do mês
     * @returns {string} mês semana formatado
     */
    const formatMonth = (month) => {
        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        return monthNames[month];
    }

    /**
     * Formata o dia do Mês para possuir sempre 2 casas (zero à esquerda para < 10)
     * @param {number} day - dia do mês
     * @returns {string} dia formatado com 2 casas
     */
    const formatDay = (day) => String(day).padStart(2, "0")


    /**
     * Atualiza a data
     */
    const updateDate = () => {
        const today = new Date();
        const dayOfWeek = formatDayOfWeek(today.getDay());
        const month = formatMonth(today.getMonth());
        const day = formatDay(today.getDate());
        const year = today.getFullYear();

        $date.text(`${dayOfWeek}, ${day} de ${month} de ${year}`)
    }

    let clockTimer = setInterval(updateClock, 1000)

    //Controla o estado do relógio
    let isPaused = false;

    /**
     * Função para pausar/retomar o relógio
     */
    const toggleTimer = () => {
        isPaused = !isPaused;
        if (isPaused) {
            clearInterval(clockTimer);
            // $toggleButton.text("Resume")
            // $toggleButton.css("background-color", "#ADE25D")
        }
        else {
            updateClock()
            clockTimer = setInterval(updateClock, 1000)
            // $toggleButton.text("Pausar")
            // $toggleButton.css("background-color", "rgb(6, 164, 236)")
        }
        $toggleButton.text(isPaused ? "Resumir" : "Pausar")
        $toggleButton.css("background-color", isPaused ? "#ADE25D" : "rgb(6, 164, 236)")
    }

    //Linkando o evento de clique ao botão
    $toggleButton.click(toggleTimer)


    updateClock()
    updateDate()
});