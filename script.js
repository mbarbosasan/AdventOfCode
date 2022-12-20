
// https://adventofcode.com/2022/day/3

let numberPriority = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
numberPriority = numberPriority.split("")

let sum = 0

const fetchApi = fetch("./dados.txt")
.then((response) => response.text())
.then((json) => {
  dados = JSON.stringify(json).replaceAll('"', "").replaceAll("\\r\\n", ",").split(",")
  dados.forEach((sacola) => {
    let firstHalf = Array.from(sacola).slice().splice(0, Math.ceil(sacola.length / 2))
    let lastHalf = Array.from(sacola).slice().splice(-Math.ceil(sacola.length / 2))
    let sameValueInArray = firstHalf.filter((item) => lastHalf.includes(item));
    sum += numberPriority.findIndex((item) => sameValueInArray.includes(item))
    sum++
    })
    console.log(sum)
})






