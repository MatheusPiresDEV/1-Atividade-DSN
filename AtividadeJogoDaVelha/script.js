// Seleciona o elemento que mostra o jogador atual
const currentPlayer = document.querySelector(".currentPlayer");

// Inicializa o array de posições selecionadas e define o jogador inicial como "X"
let selected = Array(10).fill(null);
let player = "X";

// Definição combinações possiveis
const positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// Função para inicializar o jogo
function init() {
  // Reseta o array de posições selecionadas
  selected.fill(null);

  // Atualiza o texto do jogador atual
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;

  // Adiciona evento de clique a cada botão do jogo
  document.querySelectorAll(".veia button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

// Chama a função de inicialização ao carregar a página
init();

// Função que lida novo movimento
function newMove(e) {
  // Obtém o índice do botão clicado
  const index = e.target.getAttribute("data-i");
  // Define o texto do botão como o jogador atual
  e.target.innerHTML = player;
  // Remove o evento de clique do botão
  e.target.removeEventListener("click", newMove);
  // Marca a posição como selecionada pelo jogador atual
  selected[index] = player;

  // Verifica se há um vencedor após um pequeno atraso
  setTimeout(() => {
    check();
  }, 100);

  // Alterna o jogador
  player = player === "X" ? "O" : "X";
  // Atualiza o texto do jogador atual
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

// Função que verifica se há um vencedor ou empate
function check() {
  // Define o jogador do último movimento
  const playerLastMove = player === "X" ? "O" : "X";

  // Obtém as posições selecionadas pelo jogador do último movimento
  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  // Verifica se alguma combinação vencedora foi alcançada
  for (const pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      alert(`O JOGADOR '${playerLastMove}' GANHOU!`);
      init();
      return;
    }
  }

  // Verifica se todas as posições foram preenchidas (empate)
  if (selected.filter((item) => item).length === 9) {
    alert("DEU EMPATE!");
    init();
    return;
  }
}


