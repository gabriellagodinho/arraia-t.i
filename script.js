const botao = document.getElementById('botaoFesta');
const musica = document.getElementById('musicaJunina');

botao.addEventListener('click', () => {
    // Mostrar popup
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

    // Reinicia e toca a música
    musica.currentTime = 0;
    musica.play();

    // Confetes por 1 segundo (leve e sem travar)
    const duracao = 1000;
    const fim = Date.now() + duracao;

    (function dispararConfetes() {
        confetti({
            particleCount: 10,
            angle: 60,
            spread: 70,
            origin: { x: Math.random() * 0.5 }
        });
        confetti({
            particleCount: 10,
            angle: 120,
            spread: 70,
            origin: { x: 1 - Math.random() * 0.5 }
        });

        if (Date.now() < fim) {
            requestAnimationFrame(dispararConfetes);
        }
    })();
});


