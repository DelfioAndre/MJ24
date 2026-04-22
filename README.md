# 🔐 Login com Contador Regressivo

Página de login que exibe um relógio regressivo (countdown) até a data que a verdadeira página ficará disponível.

## 📋 Características

- ✅ Tela de login responsiva e moderna
- ⏰ Contador regressivo em tempo real
- 💾 Persistência de sessão (localStorage)
- 📱 Design totalmente responsivo
- 🎨 Gradiente bonito e animações suaves
- 🚪 Função de logout

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador web
2. Digite qualquer usuário e senha (para teste, aceita qualquer combinação)
3. Clique em "Entrar"
4. Você verá o contador regressivo até a data do lançamento

## ⚙️ Configurações

### Personalizar a data de lançamento

Abra o arquivo `script.js` e procure pela linha:

```javascript
const LAUNCH_DATE = new Date('2026-05-30T23:59:59').getTime();
```

Modifique a data conforme necessário. Exemplos:
- `'2026-05-30T23:59:59'` = 30 de maio de 2026 às 23:59:59
- `'2026-06-15T12:00:00'` = 15 de junho de 2026 às 12:00:00

### Personalizar o texto

No arquivo `index.html`, você pode alterar:
- Títulos
- Labels dos campos
- Textos em geral

### Personalizar cores

No arquivo `style.css`, procure pelas cores e gradientes:
- `#667eea` (azul primário)
- `#764ba2` (roxo)
- `#ff6b6b` (vermelho)

## 📁 Estrutura de Arquivos

```
MJ/
├── index.html      # Estrutura HTML
├── style.css       # Estilos CSS
├── script.js       # Lógica JavaScript
└── README.md       # Este arquivo
```

## 🔍 Detalhes Técnicos

### Login
- Valida se os campos estão preenchidos
- Salva o usuário no localStorage
- De momento, aceita qualquer usuário/senha (para teste)
- Para produção, você pode integrar com um backend real

### Countdown
- Atualiza a cada 1 segundo
- Calcula: Dias, Horas, Minutos e Segundos
- Quando atinge a data, exibe uma mensagem de sucesso
- Mantém a sessão mesmo após recarregar a página

## 💡 Melhorias Possíveis

1. Integrar com uma API para validar credenciais reais
2. Adicionar validação de email
3. Adicionar "Lembrar-me"
4. Adicionar recovery de senha
5. Implementar autenticação segura com JWT
6. Adicionar efeitos sonoros
7. Enviar email au usuário quando a página estiver pronta

## 📝 Notas

- A página usa localStorage para persistência de sessão
- Limpar o cache/localStorage desconecta o usuário
- Para usar em produção, adicione validação de servidor
- HTTPS é recomendado para envios de credenciais

---

Desenvolvido com ❤️ para você!
