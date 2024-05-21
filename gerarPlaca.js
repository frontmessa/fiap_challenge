// script.js

// Função para gerar uma placa aleatória
function gerarPlaca() {
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numeros = '0123456789';
    let placa = '';

    // Adiciona 3 letras aleatórias
    for (let i = 0; i < 3; i++) {
        placa += letras.charAt(Math.floor(Math.random() * letras.length));
    }

    // Adiciona 4 números aleatórios
    for (let i = 0; i < 4; i++) {
        placa += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }

    return placa;
}

// Função para atualizar o texto das pistas com placas aleatórias a cada 5 segundos
function atualizarPlacas() {
    setInterval(function() {
        document.getElementById('placa1').textContent = gerarPlaca() + ' / ' + ' Pagamento via ' + (Math.random() < 0.5 ? 'TAG' : 'Placa');
        document.getElementById('placa2').textContent = gerarPlaca() + ' / ' + ' Pagamento via ' + (Math.random() < 0.5 ? 'TAG' : 'Placa');
        document.getElementById('placa3').textContent = gerarPlaca() + ' / ' + ' Pagamento via ' + (Math.random() < 0.5 ? 'TAG' : 'Placa');
        document.getElementById('placa4').textContent = gerarPlaca() + ' / ' + ' Pagamento via ' + (Math.random() < 0.5 ? 'TAG' : 'Placa');
    }, 2000); // Atualiza a cada 5 segundos (5000 milissegundos)
}

// Inicia a função para atualizar as placas quando o documento HTML estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    atualizarPlacas();
});
