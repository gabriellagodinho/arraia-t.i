const botao = document.getElementById('botaoFesta');
const musica = document.getElementById('musicaJunina');
let festaRodando = false;

botao.addEventListener('click', () => {
    if (festaRodando) return; // Evita múltiplos cliques
    festaRodando = true;
    botao.disabled = true;

    // Mostrar popup informando data e local
    Swal.fire({
        title: '🎊 Vai Ter Arraiá! 🎊',
        html: `
            <b>📅 Dia:</b> 18 de Junho, às 16h30<br>
            <b>📍 Local:</b> Estacionamento UAD<br><br>
            Vem cumê pamonha, sô! 😄
        `,
        icon: 'info',
        confirmButtonText: 'Oba!',
        background: '#fff8dc',
        color: '#8b0000',
        confirmButtonColor: '#d33'
    });

    // Inicia música do arraiá
    musica.currentTime = 0;
    musica.play();

    // Lança confetes por 5 segundos
    const duracao = 5000;
    const fim = Date.now() + duracao;

    (function lancarConfetes() {
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
        } else {
            festaRodando = false;
            botao.disabled = false;
        }
    })();
});


