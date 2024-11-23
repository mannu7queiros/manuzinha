// Script para mostrar mais informações ao clicar no botão
document.getElementById('infoBtn').addEventListener('click', function() {
    const infoMessage = document.getElementById('infoMessage');
    if (infoMessage.style.display === 'none') {
        infoMessage.style.display = 'block';
    } else {
        infoMessage.style.display = 'none';
    }
});
