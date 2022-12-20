
// https://adventofcode.com/2022/day/3

let numberPriority = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
numberPriority = numberPriority.split("")

let sum = 0

const fetchApi = fetch("./dados.txt")
.then((response) => response.text())
.then((json) => {
  count = 0
  dados = JSON.stringify(json).replaceAll('"', "").replaceAll("\\r\\n", ",").split(",")
  arrayAgrouppedElves = []
  let group = []
  dados.forEach((item) => {
    if (count < 3) {
      group.push(item)
    }
    count++
    if (count == 3) {
      sum += numberPriority.findIndex(letra => group[0].includes(letra) && group[1].includes(letra) && group[2].includes(letra))
      sum++
      count = 0;
      group = []
    }
  })
  console.log("Total: " + sum )
})






