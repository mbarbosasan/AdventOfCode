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
  dados.forEach((item) => {
    jogo = item.split(":")
    jogadorA = jogo[0];
    situacao = jogo[1];
    if (situacao === "scissors") {
      if (jogadorA === "scissors") {
        pontuacao += rockAgainst(jogadorA);
      } else if (jogadorA === "rock") {
        pontuacao += paperAgainst(jogadorA)
      } else {
        pontuacao += scissorsAgainst(jogadorA)
      }
    } else if (situacao === "rock") {
      if (jogadorA === "scissors") {
        pontuacao += paperAgainst(jogadorA);
      } else if (jogadorA === "rock") {
        pontuacao += scissorsAgainst(jogadorA);
      } else {
        pontuacao += rockAgainst(jogadorA)
      }
    } else {
      if (jogadorA === "scissors") {
        pontuacao += scissorsAgainst(jogadorA)
      } else if (jogadorA === "rock") {
        pontuacao += rockAgainst(jogadorA)
      } else {
        pontuacao += paperAgainst(jogadorA)
      }
    }
  }
  )
  console.log(pontuacao);
})

// A = PEDRA, B = PAPER, C = TESOURA
// X = PEDRA, Y = PAPER, C = TESOURA
// ROCK = PERDER, PAPER = EMPATAR, TESOURA = GANHAR

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




