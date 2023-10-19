//WHILE
// let i = 0;
// while (i < 3) {
//     alert(i);
//     i++
// }

// for (let i = 0; i < 3; i++) {
//     alert(i)
// }

let sum = 0;
while (true) {
    const value = +prompt("Digite um número");

    if(!value) break;
    sum += value;
}
alert(`A soma dos valores é ${sum}`)

for (let i = 0; i <11; i++) {
    if (i % 2 !== 0) continue;
    alert(i)
}