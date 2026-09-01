# Côte d'Azur ville — Landing Page (projeto de estudo)

**Ver online:** https://pedrobartkevihi.github.io/CopiaLandingPageCena/

Recriação **para fins de estudo** de uma landing page de divulgação do
empreendimento **Côte d'Azur ville**, da **Cena Construção e Incorporação**
(Florianópolis/SC).

Partindo de um exercício de curso feito só com HTML e CSS, o objetivo aqui foi
modernizar o visual — layout, tipografia, cores, espaçamentos, botões, cards,
responsividade e pequenas interações — mantendo a mesma ideia, o mesmo conteúdo
e o estilo de escrita do código original.

## Tecnologias

- HTML5
- CSS3 (variáveis em `:root`, flexbox, `clamp()` e media queries)
- JavaScript (vanilla, sem dependências)
- [Google Fonts](https://fonts.google.com/) — Open Sans (Apache 2.0) e Playfair Display (OFL)

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
5. **Rodapé** — logo, slogan e links.

## Interações (`js/script.js`)

- Abre/fecha o menu no mobile (com `Esc`, clique fora e clique em link).
- Sombra no header ao rolar a página.
- Elementos `[data-revelar]` surgem ao entrar na tela (`IntersectionObserver`).
- Feedback ao enviar o formulário (não há back-end).
- Respeita `prefers-reduced-motion` e funciona sem JavaScript.

## Como executar

Abra o `index.html` no navegador, ou rode um servidor estático na pasta do
projeto:

```bash
python -m http.server 8080
```

E acesse `http://localhost:8080`.

## Uso educacional e direitos

Este repositório é **apenas um exercício de front-end, sem fins comerciais**.

- Não possui qualquer vínculo, patrocínio ou aprovação da **Cena Construção e
  Incorporação** nem do empreendimento **Côte d'Azur ville**.
- As marcas, os logotipos, o slogan e as imagens (fotos e renders — parte deles
  com marca d'água de terceiros, como **OFICINA3D**) pertencem aos seus
  respectivos titulares e aparecem aqui só a título ilustrativo, para estudo.
- O código-fonte (HTML, CSS e JavaScript) é de autoria de **Pedro Farias** e
  pode ser reaproveitado livremente.
- Para uso como portfólio público, o recomendado é **trocar os logotipos e as
  imagens** por material próprio ou de bancos livres (ex.: Unsplash, Pexels).
- Caso algum detentor de direitos entre em contato, o conteúdo será removido.
