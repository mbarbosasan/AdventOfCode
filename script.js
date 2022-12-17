let resultado = {
  soma: 0,
  numero: 0,
}

let arrayNumber = new Array();
const fetchApi = fetch("./dados.txt")
.then((response) => response.text())
.then((json) => {
  dados = JSON.stringify(json).replaceAll("\\r\\n\\r\\n", ",").replaceAll("\\n", ":").replaceAll("\\r", "").replaceAll('"', "").split(",");
  dados.forEach((item, index) => {
    let soma = 0;
    arrSum = item.split(":");
    arrayNumber.push(arrSum.reduce((acc, a) => {
      return acc + Number(a)
    }, 0));

  })
  console.log(resultado);
  arrayNumber.sort((a, b) => a - b).reverse()
  console.log(arrayNumber[0] + arrayNumber[1] + arrayNumber[3]);
})





