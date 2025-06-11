const botao = document.getElementById('botaoFesta');
const musica = document.getElementById('musicaJunina');

botao.addEventListener('click', () => {
    // Inicia música
    musica.play();

    // Lança confetes por 5 segundos
    const duracao = 5000;
    const fim = Date.now() + duracao;

    (function lancarConfetes() {  // Removi o "ç"
        confetti({
            particleCount: 6,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 6,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < fim) {
            requestAnimationFrame(lancarConfetes);
        }
    })();
});

