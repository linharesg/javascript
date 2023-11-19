$("document").ready(() => {

const $decreaser = $(".decreaser")
const $increaser = $(".increaser")
let $counter = $(".counter")

decreaserCounter = () => {
    console.log($counter)
    $counter.text(+$counter.text() -1)
}

increaserCounter = () => {
    console.log($counter)
    $counter.text(+$counter.text() + 1)
}


$decreaser.click(decreaserCounter)
$increaser.click(increaserCounter)

})