const $startButton = $(".start")
const $pause_resumeButton = $(".pause-resume")
const $resetButton = $(".reset")

let $timer = $(".timer")
let $hour = $(".hour")
let $minute = $(".minute")
let $second = $(".second")

let isPaused = true
let justStarted = true

let clockTimer

/**
 * Inicia o cronômetro e atualiza a cada 1 segundo
 */
const startTimer = () => {
    if (justStarted) {
        restartTimer()
        clockTimer = setInterval(restartTimer, 1000)
    }
    justStarted = false
    isPaused = false
}

/**
 * Incrementa o tempo em +1, mantendo 2 dígitos
 * @param {*} time - Define o tempo a ser incrementado (hora, minuto, segundo)
 */
const increaseTime = (time) => {
    time.text(String(+time.text() + 1).padStart(2, "0"))
}

/**
 * Reseta o contador ao atingir 60 e incrementa o tempo
 */
const restartTimer = () => {

        increaseTime($second)
        if ($second.text() === '60') {
            $second.text('00')
            increaseTime($minute)
        }
        if ($minute.text() === '60') {
            $minute.text('00')
            increaseTime($hour)
        }
}

/**
 * Pausa ou continua a contagem do cronômetro
 * @returns void
 */
const pause_resume = () => {
    if (justStarted) {
        return
    }
    isPaused = !isPaused
    if (isPaused) {
        clearInterval(clockTimer)
        $pause_resumeButton.text("RESUME")

        return
    }
    $pause_resumeButton.text("PAUSE")
    clockTimer = setInterval(restartTimer, 1000)
 }

/**
 * Reseta o tempo corrido no cronômetro
 * @returns void
 */
const resetTimer = () => {
    if (justStarted) {
        return
    }
    $hour.text("00")
    $minute.text("00")
    $second.text("00")
    clearInterval(clockTimer)
    justStarted = true
    isPaused = true
 }

$startButton.click(startTimer)
$pause_resumeButton.click(pause_resume)
$resetButton.click(resetTimer)

