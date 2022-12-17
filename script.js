let pontuacao = 0;

let arrayNumber = new Array();
const fetchApi = fetch("./dados.txt")
.then((response) => response.text())
.then((json) => {
  dados = JSON.stringify(json)
  .replaceAll(" ", ":")
  .replaceAll("\\r\\n", ",")
  .replaceAll("/", "")
  .replaceAll('"', "")
  .replaceAll("A", "rock")
  .replaceAll("B", "paper")
  .replaceAll("C", "scissors")
  .replaceAll("X", "rock")
  .replaceAll("Y", "paper")
  .replaceAll("Z", "scissors")
  .split(",")
  dados.map((item) => {
    jogo = item.split(":")
    jogadorA = jogo[0];
    jogadorB = jogo[1];
    if (jogadorB === "scissors") {
      pontuacao += scissorsAgainst(jogadorA)
    } else if (jogadorB === "rock") {
      pontuacao += rockAgainst(jogadorA)
    } else {
      pontuacao += paperAgainst(jogadorA)
    }
  }
  )
  console.log(pontuacao);
})

// A = PEDRA, B = PAPER, C = TESOURA
// X = PEDRA, Y = PAPER, C = TESOURA

function scissorsAgainst(option) {
  if (option === "rock") {
    return 3 + 0
  } else if (option === "paper") {
    return 3 + 6
  } else {
    return 3 + 3
  }
}

function rockAgainst(option) {
  if (option === "scissors") {
    return 1 + 6
  } else if (option === 'paper') {
    return 1 + 0
  } else {
    return 1 + 3
  }
}

function paperAgainst(option) {
  if (option === "scissors") {
    return 2 + 0
  } else if (option === "rock") {
    return 2 + 6
  } else {
    return 2 + 3;
  }
}




