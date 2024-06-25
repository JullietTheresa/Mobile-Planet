

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um listener para o evento 'submit' do formulário
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que o formulário envie os dados

        // Verifica se os campos de email e senha estão preenchidos
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Simulação de login bem-sucedido (verificação básica)
        if (email !== '' && password !== '') {
            // Redireciona para a página inicial (index.html)
            window.location.href = '../index/index.html';
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
