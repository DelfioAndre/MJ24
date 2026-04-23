// Data de lançamento da página (modifique conforme necessário)
// Exemplo: 24 de abril de 2026
const LAUNCH_DATE = new Date('2026-04-24T23:59:59').getTime();

// Elementos do DOM
const loginContainer = document.getElementById('loginContainer');
const countdownContainer = document.getElementById('countdownContainer');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const userDisplay = document.getElementById('userDisplay');

// Prevenir zoom duplo no touch
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Evitar zoom automático em inputs no iOS
if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
}

// Detectar mudança de orientação e bloquear landscape
function handleOrientationChange() {
    if (window.innerHeight < window.innerWidth) {
        // Está em landscape, tentar forçar portrait
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('portrait').catch(err => {
                // Se não conseguir travar, apenas ajusta o layout
                console.log('Não foi possível travar à orientação portrait');
            });
        }
    }
}

window.addEventListener('orientationchange', handleOrientationChange);
window.addEventListener('resize', handleOrientationChange);

// Evento de envio do formulário de login
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = document.getElementById('password').value;
    
    // Validação básica
    if (!username || !password) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Fazer login (aqui aceitamos qualquer usuário/senha para teste)
    performLogin(username);
});

// Função para realizar o login
function performLogin(username) {
    // Salvar informações do usuário no localStorage
    localStorage.setItem('loggedInUser', username);
    localStorage.setItem('loginTime', new Date().getTime());
    
    // Mostrar o display do usuário
    userDisplay.textContent = username;
    
    // Transição de telas
    loginContainer.classList.add('hidden');
    countdownContainer.classList.remove('hidden');
    
    // Garantir que o vídeo está em loop e tocando
    const videoElement = document.getElementById('backgroundVideo');
    if (videoElement) {
        videoElement.loop = true;
        videoElement.muted = true;
        videoElement.autoplay = true;
        
        // Tentar dar play ao vídeo (para maior compatibilidade)
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('Autoplay pode estar bloqueado. Tentando novamente...');
                // Retry após um pequeno delay
                setTimeout(() => {
                    videoElement.play().catch(e => console.log('Não foi possível iniciar o vídeo'));
                }, 500);
            });
        }
    }
    
    // Iniciar o countdown
    startCountdown();
}

// Função para começar o countdown
function startCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Função para atualizar o countdown
function updateCountdown() {
    const now = new Date().getTime();
    const distance = LAUNCH_DATE - now;
    
    if (distance < 0) {
        // Data chegou
        displayLaunch();
        return;
    }
    
    // Cálculos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Atualizar display com padding de zeros
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Função para exibir quando a página foi lançada
function displayLaunch() {
    const countdownBox = document.querySelector('.countdown-box');
    countdownBox.innerHTML = `
        <h1>🎉 Página Disponível!</h1>
        <p class="countdown-subtitle">A página foi lançada com sucesso!</p>
        <p style="color: #666; font-size: 16px; margin: 20px 0;">
            Em breve você será redirecionado para a página completa...
        </p>
        <button class="btn-logout" onclick="logout()">Voltar</button>
    `;
}

// Função para fazer logout
function performLogout() {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('loginTime');
    
    // Limpar fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    
    // Transição de telas
    countdownContainer.classList.add('hidden');
    loginContainer.classList.remove('hidden');
}

// Event listener do botão logout
logoutBtn.addEventListener('click', performLogout);

// Função wrapper para logout (usada no HTML)
function logout() {
    performLogout();
}

// Verificar se há usuário já logado ao carregar a página
window.addEventListener('load', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
        // Usuário já estava logado
        userDisplay.textContent = loggedInUser;
        loginContainer.classList.add('hidden');
        countdownContainer.classList.remove('hidden');
        
        // Garantir que o vídeo está configurado corretamente
        const videoElement = document.getElementById('backgroundVideo');
        if (videoElement) {
            videoElement.loop = true;
            videoElement.muted = true;
            videoElement.autoplay = true;
            
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log('Autoplay pode estar bloqueado.');
                });
            }
        }
        
        startCountdown();
    }
});
