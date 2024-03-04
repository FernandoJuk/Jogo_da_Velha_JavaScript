var b_1_1 = document.getElementById("1-1");
var b_1_2 = document.getElementById("1-2");
var b_1_3 = document.getElementById("1-3");
var b_2_1 = document.getElementById("2-1");
var b_2_2 = document.getElementById("2-2");
var b_2_3 = document.getElementById("2-3");
var b_3_1 = document.getElementById("3-1");
var b_3_2 = document.getElementById("3-2");
var b_3_3 = document.getElementById("3-3");
var audio = document.getElementById("myAudio");
var ganhou = document.getElementById("myAudio_hanhou");
var mensagem  = document.getElementById("msg");

var players = ["X", "O"]; // Array contendo os jogadores
var cont = 0; // Variável para controlar qual jogador está jogando atualmente
clicou = 0;

// Função para verificar se uma linha possui três botões com letras iguais
function verificaLinha(b1, b2, b3) {
    return b1.textContent !== "F" && b1.textContent === b2.textContent && b2.textContent === b3.textContent;
};

function reset() {
    clicou = 0;
    b_1_1.textContent = b_1_2.textContent = b_1_3.textContent = b_2_1.textContent = b_2_2.textContent = b_2_3.textContent = b_3_1.textContent = b_3_2.textContent = b_3_3.textContent = "F";
    b_1_1.style.color = b_1_2.style.color = b_1_3.style.color = b_2_1.style.color = b_2_2.style.color = b_2_3.style.color = b_3_1.style.color = b_3_2.style.color = b_3_3.style.color = "transparent";
};

function pararEIniciarDoInicio() {
        audio.pause(); // Pausa a reprodução
        audio.currentTime = 0; // Define o tempo atual para 0 (início)
        audio.play(); // Inicia a reprodução   
  }

function esconde_resultado(){
    // Definir o estilo como "none" após 5 segundos
    setTimeout(function () {
        mensagem.style.display = "none";
    }, 5000); // 5000 milissegundos = 5 segundos
}  

function muda_letra() {
    console.log(clicou);
    if (clicou === 0) {
        pararEIniciarDoInicio();
    }   
    clicou++;
    var botaoClicado = event.target;

    // Verifica se o texto do botão é "F" (indicando que ainda não foi clicado)
    if (botaoClicado.textContent === "F") {
        // Define o texto do botão como o jogador atual (players[cont])
        botaoClicado.textContent = players[cont];

        // Alterna para o próximo jogador
        cont = (cont + 1) % players.length;

        // Define a cor do texto para visível
        botaoClicado.style.color = "#050b0f";


        // Verifica se uma linha possui três botões com letras iguais
        if (
            verificaLinha(b_1_1, b_1_2, b_1_3) || // Linha 1
            verificaLinha(b_2_1, b_2_2, b_2_3) || // Linha 2
            verificaLinha(b_3_1, b_3_2, b_3_3) || // Linha 3
            verificaLinha(b_1_1, b_2_1, b_3_1) || // Coluna 1
            verificaLinha(b_1_2, b_2_2, b_3_2) || // Coluna 2
            verificaLinha(b_1_3, b_2_3, b_3_3) || // Coluna 3
            verificaLinha(b_1_1, b_2_2, b_3_3) || // Diagonal \
            verificaLinha(b_1_3, b_2_2, b_3_1)    // Diagonal /
        ) {
            // Definir o estilo como "none" após 5 segundos
            ganhou.play();
            setTimeout(function () {
                audio.pause();
            }, 5000); // 5000 milissegundos = 5 segundos
            reset();
            //alert("Jogador " + players[(cont + 1) % players.length] + " ganhou!");
            texto_result("Jogador " + players[(cont + 1) % players.length] + " ganhou!")
            esconde_resultado();

            };
        }
        if (clicou == 9) {
            reset();
            // Definir o estilo como "none" após 5 segundos
            setTimeout(function () {
                audio.pause();
            }, 5000); // 5000 milissegundos = 5 segundos
            
            //alert("Empatou !");
            texto_result("Empatou !")
            esconde_resultado();
        };
}

function texto_result(texto){
    // Tornar visível
    mensagem.style.display = "block"; // ou "inline" ou o valor original
    mensagem.innerHTML = (texto);
}    
  



