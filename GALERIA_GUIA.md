# 🎉 Galeria de Aniversário - Guia Completo

## 🎬 Como Adicionar Suas Fotos e Vídeos

### Opção 1: Método Simples (Recomendado)

1. **Abra o arquivo `galeria.js`** em um editor de texto (Notepad, VS Code, etc.)

2. **Procure pela seção:** `const slides = [`

3. **Você verá algo assim:**
```javascript
const slides = [
    {
        tipo: 'image',
        src: 'https://via.placeholder.com/1600x1000?text=Foto+1+Aqui',  // ← AQUI!
        titulo: 'Nosso Primeiro Encontro 💕',
        descricao: 'O dia mais especial do ano começando com você'
    },
    // ... mais slides
];
```

4. **Substitua o `src` pelo caminho da sua foto:**

**Para fotos locais (na mesma pasta):**
```javascript
src: './fotos/foto1.jpg'
```

**Para vídeos locais:**
```javascript
tipo: 'video',
src: './videos/video1.mp4'
```

**Para fotos da internet:**
```javascript
src: 'https://example.com/minha-foto.jpg'
```

5. **Altere também o `titulo` e `descricao`**

6. **Salve o arquivo (Ctrl+S)**

---

## 📁 Estrutura de Pastas (Recomendada)

Crie as seguintes pastas na mesma localização de `galeria.html`:

```
MJ/
├── index.html          (Página de login)
├── galeria.html        (Página da galeria)
├── galeria.css
├── galeria.js
├── fotos/              ← Crie essa pasta
│   ├── foto1.jpg
│   ├── foto2.jpg
│   └── foto3.jpg
└── videos/             ← Crie essa pasta (se tiver vídeos)
    ├── video1.mp4
    └── video2.mp4
```

---

## 📝 Exemplos Práticos

### Exemplo 1: Galeria completa com fotos locais

```javascript
const slides = [
    {
        tipo: 'image',
        src: './fotos/primeiro_encontro.jpg',
        titulo: 'Nosso Primeiro Encontro 💕',
        descricao: 'O dia mais especial do ano'
    },
    {
        tipo: 'image',
        src: './fotos/viagem.jpg',
        titulo: 'Viagem Inesquecível ✈️',
        descricao: 'Melhores memórias juntos'
    },
    {
        tipo: 'video',
        src: './videos/mensagem.mp4',
        titulo: 'Mensagem Especial 💌',
        descricao: 'Um vídeo do meu coração'
    }
];
```

### Exemplo 2: Misturando fotos locais e online

```javascript
const slides = [
    {
        tipo: 'image',
        src: './fotos/local.jpg',
        titulo: 'Foto Local',
        descricao: 'Aqui está salva no meu computador'
    },
    {
        tipo: 'image',
        src: 'https://images.unsplash.com/photo-...',
        titulo: 'Foto Online',
        descricao: 'Foto de um site'
    }
];
```

---

## 🎮 Controles da Galeria

| Ação | Como Fazer |
|------|-----------|
| Próximo slide | Clique →, seta direita, ou swipe |
| Slide anterior | Clique ←, seta esquerda, ou swipe |
| Autoplay | Clique no botão "Autoplay" ou pressione Espaço |
| Tela Cheia | Clique ⛶ ou pressione F |
| Selecionar slide | Clique nas miniaturas (thumbnails) |

---

## 💡 Dicas Importantes

### Sobre as fotos:
- **Tamanho ideal:** 1600x1000 pixels (melhor qualidade)
- **Formatos:** JPG, PNG, WEBP
- **Tamanho do arquivo:** Até 5MB (para não ficar pesado)

### Sobre os vídeos:
- **Formatos:** MP4, WEBM
- **Tamanho do arquivo:** Até 50MB
- **Duração:** Ideal 1-2 minutos por vídeo

### Dicas de texto:
- **Títulos:** Breves e elegantes (máximo 30 caracteres)
- **Descrições:** Emocionantes e relevantes
- **Use emojis:** 💕 😊 ✈️ 🌟 💌 🎉

---

## ❓ Troubleshooting

### As fotos não aparecem?
- ❌ Verifique se o caminho está correto
- ❌ Certifique-se que a foto existe na pasta
- ❌ Use `/` nos caminhos (não `\`)
- ✅ Exemplo correto: `./fotos/minha_foto.jpg`

### Os vídeos não reproduzem?
- ❌ Certifique-se que é um arquivo MP4
- ❌ Tente em um navegador diferente
- ✅ Verifique se o arquivo não está corrompido

### Galeria muito lenta?
- ❌ Reduza o tamanho das fotos
- ❌ Comprima as imagens (use compressor.io)
- ✅ Use formato WEBP em vez de PNG

---

## 🚀 Próximos Passos

1. **Coloque suas fotos na pasta `fotos/`**
2. **Edite o `galeria.js` com os caminhos corretos**
3. **Abra `galeria.html` no navegador**
4. **A galeria abrirá automaticamente em tela cheia!**

---

## 📞 Sugestões

A galeria é totalmente personalizável! Você pode:
- ✨ Adicionar efeitos especiais
- 🎵 Adicionar música de fundo
- 🎨 Mudar cores e temas
- ⏱️ Ajustar velocidade do autoplay

---

**Feito com ❤️ para você** 💕

Aproveite sua galeria especial de aniversário!
