// ====== CONFIGURAÇÃO DE SLIDES ======
// 🎯 AQUI VOCÊ DEVE ADICIONAR SUAS FOTOS E VÍDEOS!
// 
// Instruções:
// 1. Coloque suas arquivos (fotos.jpg, video.mp4) na pasta do projeto
// 2. Modifique o 'src' apontando para o arquivo correto
// 3. Personalize o 'titulo' e 'descricao' para cada foto
// 
// Exemplo de como adicionar:
// - Foto local: src: './fotos/foto1.jpg'
// - Vídeo local: src: './videos/video1.mp4'
// - Online: src: 'https://link.com/imagem.jpg'
//
// ======= ADICIONE SEUS SLIDES ABAIXO =======

const slides = [
    {
        tipo: 'image',
        src: 'img/MJ1.JPEG',
        titulo: '💕 Nosso Começo',
        descricao: 'O dia mais especial do ano ficou ainda mais brilhante contigo.'
    },
    {
        tipo: 'image',
        src: 'img/MJ2.JPEG',
        titulo: '😊 Teu Sorriso',
        descricao: 'Cada sorriso teu é o melhor presente que posso receber.'
    },
    {
        tipo: 'image',
        src: 'img/MJ3.JPEG',
        titulo: '✈️ Aventuras Sem Fim',
        descricao: 'As melhores memórias são aquelas criadas contigo.'
    },
    {
        tipo: 'image',
        src: 'img/MJ4.JPEG',
        titulo: '😄 Risadas e Alegria',
        descricao: 'Contigo, até os dias mais normais se tornam especiais.'
    },
    {
        tipo: 'image',
        src: 'img/MJ5.JPEG',
        titulo: '🌹 Beleza Radiante',
        descricao: 'Tu és muito mais do que vejo; és tudo o que sinto.'
    },
    {
        tipo: 'image',
        src: 'img/MJ7.JPEG',
        titulo: '✨ Momentos Eternos',
        descricao: 'Queria congelar cada momento ao teu lado para sempre.'
    },
    {
        tipo: 'image',
        src: 'img/MJ8.JPEG',
        titulo: '💫 Meu Universo',
        descricao: 'Tu és meu lugar favorito no mundo inteiro.'
    },
    {
        tipo: 'image',
        src: 'img/MJ9.JPEG',
        titulo: '👀 Silenciosos',
        descricao: 'Um simples olhar teu diz tudo que preciso ouvir.'
    },
    {
        tipo: 'image',
        src: 'img/MJ10.JPEG',
        titulo: '💎 Joia Rara',
        descricao: 'Tu és aquela pessoa especial dos contos de fada.'
    },
    {
        tipo: 'video',
        src: 'video/MJ11.mp4',
        titulo: '❤️ Para Sempre',
        descricao: 'Obrigado por tornares minha vida tão bonita e real.'
    }
];

// ======= EXEMPLOS DE COMO ADICIONAR MAIS SLIDES =======
/*
    // Adicionar foto local:
    {
        tipo: 'image',
        src: './fotos/nossa_viagem.jpg',
        titulo: 'Nossa Viagem',
        descricao: 'Melhor dia de nossas vidas'
    },
    
    // Adicionar vídeo local:
    {
        tipo: 'video',
        src: './videos/momento_especial.mp4',
        titulo: 'Vídeo Especial',
        descricao: 'Um momento que queremos guardar para sempre'
    },
    
    // Adicionar foto online:
    {
        tipo: 'image',
        src: 'https://example.com/foto.jpg',
        titulo: 'Foto Online',
        descricao: 'Descrição da foto'
    }
*/

// ====== VARIÁVEIS GLOBAIS ======
let currentSlide = 0;
let autoplayActive = false;
let autoplayInterval = null;
const AUTOPLAY_DELAY = 4000; // 4 segundos

// ====== ELEMENTOS DO DOM ======
const carouselContainer = document.getElementById('carouselContainer');
const indicatorsContainer = document.getElementById('indicatorsContainer');
const thumbnailsContainer = document.getElementById('thumbnailsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const autoplayBtn = document.getElementById('autoplayBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const slideTitle = document.getElementById('slideTitle');
const slideDescription = document.getElementById('slideDescription');

// ====== INICIALIZAÇÃO ======
document.addEventListener('DOMContentLoaded', function() {
    renderSlides();
    renderIndicators();
    renderThumbnails();
    updateSlideInfo();
    setupEventListeners();
    
    // Iniciar autoplay automaticamente
    startAutoplay();
    
    // Entrar em fullscreen automaticamente
    setTimeout(function() {
        enterFullscreenAuto();
    }, 500);
});

// ====== RENDERIZAR SLIDES ======
function renderSlides() {
    carouselContainer.innerHTML = '';
    
    slides.forEach((slide, index) => {
        const slideEl = document.createElement('div');
        slideEl.className = `slide ${index === 0 ? 'active' : ''}`;
        
        let content = '';
        if (slide.tipo === 'image') {
            content = `<img src="${slide.src}" alt="${slide.titulo}">`;
        } else if (slide.tipo === 'video') {
            content = `<video autoplay muted loop playsinline><source src="${slide.src}" type="video/mp4"></video>`;
        }
        
        slideEl.innerHTML = `
            <div class="slide-placeholder">
                ${content}
            </div>
            <p class="slide-caption">${slide.descricao}</p>
        `;
        
        carouselContainer.appendChild(slideEl);
    });
}

// ====== RENDERIZAR INDICADORES ======
function renderIndicators() {
    indicatorsContainer.innerHTML = '';
    
    slides.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.setAttribute('data-slide', index);
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
}

// ====== RENDERIZAR THUMBNAILS ======
function renderThumbnails() {
    thumbnailsContainer.innerHTML = '';
    
    slides.forEach((slide, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.setAttribute('data-slide', index);
        
        if (slide.tipo === 'image') {
            thumbnail.innerHTML = `
                <img src="${slide.src}" alt="Slide ${index + 1}">
            `;
        } else {
            thumbnail.innerHTML = `
                <video autoplay muted loop playsinline><source src="${slide.src}" type="video/mp4"></video>
                <div class="thumbnail-overlay">▶</div>
            `;
        }
        
        thumbnail.addEventListener('click', () => goToSlide(index));
        thumbnailsContainer.appendChild(thumbnail);
    });
}

// ====== NAVEGAÇÃO ======
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
    resetAutoplay();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
    resetAutoplay();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    resetAutoplay();
}

// ====== ATUALIZAR CARROSSEL ======
function updateCarousel() {
    // Atualizar slides
    const allSlides = document.querySelectorAll('.slide');
    allSlides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
    
    // Atualizar indicadores
    const allIndicators = document.querySelectorAll('.indicator');
    allIndicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentSlide) {
            indicator.classList.add('active');
        }
    });
    
    // Atualizar thumbnails
    const allThumbnails = document.querySelectorAll('.thumbnail');
    allThumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.remove('active');
        if (index === currentSlide) {
            thumbnail.classList.add('active');
            // Scroll para deixar thumbnail visível
            thumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        }
    });
    
    updateSlideInfo();
}

// ====== ATUALIZAR INFORMAÇÕES DO SLIDE ======
function updateSlideInfo() {
    const currentSlideData = slides[currentSlide];
    slideTitle.textContent = currentSlideData.titulo;
    slideDescription.textContent = currentSlideData.descricao;
}

// ====== AUTOPLAY ======
function startAutoplay() {
    if (autoplayActive) return;
    
    autoplayActive = true;
    autoplayBtn.classList.add('active');
    autoplayBtn.querySelector('.control-text').textContent = 'Autoplay On';
    
    autoplayInterval = setInterval(() => {
        nextSlide();
    }, AUTOPLAY_DELAY);
}

function stopAutoplay() {
    autoplayActive = false;
    autoplayBtn.classList.remove('active');
    autoplayBtn.querySelector('.control-text').textContent = 'Autoplay';
    
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
    }
}

function toggleAutoplay() {
    if (autoplayActive) {
        stopAutoplay();
    } else {
        startAutoplay();
    }
}

function resetAutoplay() {
    if (autoplayActive) {
        stopAutoplay();
        startAutoplay();
    }
}

// ====== FULLSCREEN ======
function enterFullscreenAuto() {
    const carousel = document.querySelector('.carousel-wrapper');
    const container = carousel.querySelector('.carousel-container');
    
    container.classList.add('fullscreen');
    fullscreenBtn.classList.add('active');
    
    if (container.requestFullscreen) {
        container.requestFullscreen().catch(() => {
            // Se não conseguir requisitar fullscreen do navegador, mantém em CSS pelo menos
            console.log('Auto-fullscreen do navegador não disponível, usando CSS fullscreen');
        });
    }
}

function toggleFullscreen() {
    const carousel = document.querySelector('.carousel-wrapper');
    const container = carousel.querySelector('.carousel-container');
    
    if (container.classList.contains('fullscreen')) {
        // Sair do fullscreen
        container.classList.remove('fullscreen');
        fullscreenBtn.classList.remove('active');
        
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => {});
        }
    } else {
        // Entrar em fullscreen
        enterFullscreenAuto();
    }
}

// ====== EVENT LISTENERS ======
function setupEventListeners() {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    autoplayBtn.addEventListener('click', toggleAutoplay);
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // Teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === ' ') {
            e.preventDefault();
            toggleAutoplay();
        }
        if (e.key === 'f' || e.key === 'F') toggleFullscreen();
    });
    
    // Touch para mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const diff = touchStartX - touchEndX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
    
    // Detecção de saída de fullscreen
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            const container = document.querySelector('.carousel-container');
            container.classList.remove('fullscreen');
            fullscreenBtn.classList.remove('active');
        }
    });
}

// ====== FUNÇÃO PARA ADICIONAR SLIDES VIA JAVASCRIPT ======
function adicionarSlide(tipo, src, titulo, descricao) {
    slides.push({
        tipo: tipo,
        src: src,
        titulo: titulo,
        descricao: descricao
    });
    
    renderSlides();
    renderIndicators();
    renderThumbnails();
}

// ====== FUNÇÃO PARA ATUALIZAR SLIDES ======
function atualizarSlides(novoSlides) {
    slides.length = 0;
    slides.push(...novoSlides);
    currentSlide = 0;
    
    renderSlides();
    renderIndicators();
    renderThumbnails();
    updateSlideInfo();
}

// ====== EXEMPLO: ADICIONAR MAIS SLIDES ======
// Descomente a linha abaixo para adicionar mais slides via código
/*
adicionarSlide('image', 'https://via.placeholder.com/1600x1000?text=Foto+6', 'Título', 'Descrição');
*/

// ============================================================================
// 📸 GUIA COMPLETO PARA ADICIONAR SUAS FOTOS
// ============================================================================
//
// OPÇÃO 1: EDITAR O ARQUIVO galeria.js (Recomendado)
// ─────────────────────────────────────────────────
// 1. Abra este arquivo (galeria.js) em um editor de texto
// 2. Procure por "const slides = [" (próximo ao topo do arquivo)
// 3. Encontre os slides de exemplo com "https://via.placeholder.com..."
// 4. Substitua cada "src" pelo caminho da sua foto:
//
//    Exemplo de foto LOCAL:
//    src: './fotos/minha_foto.jpg'
//    
//    Exemplo de vídeo LOCAL:
//    src: './videos/meu_video.mp4'
//    
//    Exemplo de foto da INTERNET:
//    src: 'https://site.com/minha_foto.jpg'
//
// 5. Modifique também o 'titulo' e 'descricao' para cada slide
// 6. Salve o arquivo
//
// ─────────────────────────────────────────────────
// OPÇÃO 2: ADICIONAR DINAMICAMENTE (Avançado)
// ─────────────────────────────────────────────────
// Descomente e modifique as funções adicionarSlide no final
//
// Exemplo:
// adicionarSlide('image', './fotos/foto1.jpg', 'Meu Título', 'Minha Descrição');
// adicionarSlide('video', './videos/video1.mp4', 'Video', 'Descrição do vídeo');
//
// ─────────────────────────────────────────────────
// ESTRUTURA DE PASTAS RECOMENDADA
// ─────────────────────────────────────────────────
// MJ/
// ├── index.html
// ├── galeria.html         ← Página principal da galeria
// ├── galeria.css
// ├── galeria.js           ← Este arquivo (edite o array 'slides')
// ├── fotos/               ← Crie essa pasta para suas fotos
// │   ├── foto1.jpg
// │   ├── foto2.jpg
// │   └── foto3.jpg
// └── videos/              ← Crie essa pasta para seus vídeos
//     ├── video1.mp4
//     └── video2.mp4
//
// ============================================================================
