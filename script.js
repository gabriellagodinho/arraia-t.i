// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBkDolouRVqA47yolv5g4mvZ_qrqMqvHhY",
  authDomain: "arraia-ti.firebaseapp.com",
  databaseURL: "https://arraia-ti-default-rtdb.firebaseio.com",
  projectId: "arraia-ti",
  storageBucket: "arraia-ti.firebasestorage.app",
  messagingSenderId: "971248435630",
  appId: "1:971248435630:web:8d3aa402cbeb505e8d083f",
  measurementId: "G-WSB2W6Z38M"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const acessosRef = database.ref('acessos');

// Incrementa o contador de acessos
acessosRef.transaction((valorAtual) => {
  return (valorAtual || 0) + 1;
});

// (Opcional) Exibe o total de acessos na tela
const contadorEl = document.getElementById('contador');
if (contadorEl) {
  acessosRef.on('value', (snapshot) => {
    contadorEl.textContent = `🎯 ${snapshot.val()} acessos confirmados!`;
  });
}

// Evento do botão da festa
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

  // Confetes por 1 segundo
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
