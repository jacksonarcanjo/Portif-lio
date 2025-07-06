// script.js - Ativa/desativa o modo escuro e troca o emoji do botão

const toggleButton = document.getElementById('toggle-theme');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); // Adiciona ou remove a classe 'dark'
    
    // Troca o emoji conforme o tema
    if (document.body.classList.contains('dark')) {
        toggleButton.textContent = '🌞';  // Modo Claro
    } else {
        toggleButton.textContent = '🌙';  // Modo Escuro
    }
});
