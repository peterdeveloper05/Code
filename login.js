const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Credenciais simples para demonstração
    if ((username === 'user' && password === 'senha123') ||
        (username === 'admin' && password === 'admin123')) {
        message.style.color = 'green';
        message.textContent = 'Login realizado com sucesso! Redirecionando...';
        localStorage.setItem('loggedIn', 'true');
        setTimeout(function() {
            window.location.href = 'store.html';
        }, 1000);
    } else {
        message.style.color = 'red';
        message.textContent = 'Usuário ou senha incorretos.';
    }
});
