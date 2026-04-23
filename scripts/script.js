// Data de lançamento da página - 16:30
const LAUNCH_DATE = new Date('2026-04-24T16:30:00').getTime();

// Inicializar quando o DOM está pronto
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const countdownContainer = document.getElementById('countdownContainer');
    
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
            if (screen.orientation && screen.orientation.lock) {
                screen.orientation.lock('portrait').catch(err => {
                    console.log('Não foi possível travar à orientação portrait');
                });
            }
        }
    }

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    // Garantir que o vídeo está em configurado corretamente
    const videoElement = document.getElementById('backgroundVideo');
    if (videoElement) {
        videoElement.loop = true;
        videoElement.muted = true;
        videoElement.autoplay = true;
        
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('Autoplay pode estar bloqueado. Tentando novamente...');
                setTimeout(() => {
                    videoElement.play().catch(e => console.log('Não foi possível iniciar o vídeo'));
                }, 500);
            });
        }
    }

    // Função para atualizar o countdown
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = LAUNCH_DATE - now;
        
        if (distance < 0) {
            // Data chegou - redirecionar para galeria
            window.location.href = 'galeria.html';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    // Iniciar o countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
