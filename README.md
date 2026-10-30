# Portfólio Reflexivo

Este portfólio reflexivo foi desenvolvido como trabalho de escola para a disciplina de HIPERMÍDIA E MULTIMÍDIA.

Professor: Renato Correia de Barros

## A importância do portfólio reflexivo

Diferente de um currículo tradicional, que apenas lista informações, o portfólio reflexivo exige um exercício de olhar para a própria trajetória com distância crítica: entender o que foi aprendido, como foi aprendido, e por que determinadas escolhas foram feitas ao longo do processo. Não é só uma vitrine de trabalhos prontos, é a construção de um raciocínio sobre o próprio aprendizado, o que torna o exercício de refletir tão importante quanto o produto final apresentado.

---

## Como abrir o site no computador

⚠️ **Não funciona com dois cliques no `index.html`.** O JavaScript do site usa módulos (`import`/`export`), e o navegador bloqueia módulos abertos direto do disco (endereço `file://...`): a página aparece vazia. Os vídeos do YouTube também não tocam nesse modo.

Abra sempre por um servidor local:

1. No VS Code, instale a extensão **Live Server**.
2. Clique com o botão direito no `index.html` → **Open with Live Server**.
3. O site abre no navegador em um endereço como `http://127.0.0.1:5500`.

Publicado no GitHub Pages, ele funciona normalmente.

## Onde mexer em cada coisa

| Quero mudar... | Arquivo |
|---|---|
| Textos, links e vídeos do portfólio | `js/1-data.js` |
| Textos da página "Como este site foi feito" | `js/6-data-tutorial.js` |
| Cores, fontes, tamanhos e espaços do site inteiro | `css/1-tokens.css` |
| Botões, selos, etiquetas e cards | `css/4-componentes.css` |
| Uma parte específica do site (menu, abas, vídeo, contato...) | `css/5-secoes.css` (procure o título em MAIÚSCULAS com Ctrl+F) |
| Ajustes de tablet e celular | `css/7-responsivo.css` |
