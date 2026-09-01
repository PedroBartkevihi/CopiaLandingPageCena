# Côte d'Azur ville — Landing Page

Landing page de divulgação do empreendimento fictício **Côte d'Azur ville**, da
construtora **Cena Construção e Incorporação**.

Esta é uma versão modernizada de um projeto de curso feito originalmente só com
HTML e CSS. O objetivo foi atualizar o visual (layout, tipografia, cores,
espaçamentos, botões, cards, responsividade e pequenas interações) mantendo a
mesma ideia, o mesmo conteúdo e o estilo de escrita do código original.

## Tecnologias

- HTML5
- CSS3 (variáveis em `:root`, flexbox, `clamp()` e media queries)
- JavaScript (vanilla, sem dependências)
- [Google Fonts](https://fonts.google.com/) — Open Sans e Playfair Display

Sem frameworks e sem etapa de build: é só abrir o `index.html`.

## Estrutura

```
Projeto2/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── imagens/
    ├── bg-form.jpg      (imagem da capa)
    ├── arrow.png        (seta da seção de chamada)
    ├── logo1.png        (Cena Construção e Incorporação)
    ├── logo2.png        (Côte d'Azur ville)
    └── mosaico1..4.jpg  (imagens da seção Estrutura)
```

## Seções

1. **Header** — logos e menu (vira dropdown no mobile).
2. **Capa** — imagem, chamada principal e formulário de contato.
3. **Chamada** — faixa de destaque com seta e botão para o formulário.
4. **Estrutura (mosaico)** — quatro cards alternando imagem e texto.
5. **Rodapé** — logo, slogan, links e copyright.

## Interações (`js/script.js`)

- Abre/fecha o menu no mobile (com `Esc`, clique fora e clique em link).
- Sombra no header ao rolar a página.
- Elementos `[data-revelar]` surgem ao entrar na tela (`IntersectionObserver`).
- Respeita `prefers-reduced-motion` e funciona sem JavaScript.

## Como executar

Abra o `index.html` no navegador, ou rode um servidor estático na pasta do
projeto:

```bash
python -m http.server 8080
```

E acesse `http://localhost:8080`.

## Créditos

Projeto base desenvolvido durante o curso de Front-End. Imagens usadas apenas
para fins de estudo.
