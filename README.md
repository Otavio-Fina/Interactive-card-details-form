# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![desktop](./design/final/desktop.png "Design desktop")
![desktop ativo](./design/final/desktop-active.png "Design desktop dos inputs ativos")
![desktop falho](./design/final/desktop-fail.png "Design desktop dos inputs falhos")
![mobile](./design/final/mobile.png "Design mobile")

### Links

- Github pages: [https://otavio-fina.github.io/Interactive-card-details-form/src](https://otavio-fina.github.io/Interactive-card-details-form/src)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Bootstrap](https://getbootstrap.com) - For some styles
- [React](https://reactjs.org/) - JS library
- [Webpack](https://webpack.js.org) - For modules control


### What I learned


Foi um projeto de muitos aprendizados. Inicialmente, o projeto me ajuda a melhorar minhas praticas e técnicas em HTML e CSS, tambem meus conceitos de design responsivo. Como este código CSS:
```css

.form-control:focus {
    background: linear-gradient(white, white) padding-box,
    linear-gradient(to bottom right, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) border-box;
    border-radius: 8px;
    border: 1px solid transparent;
    box-shadow: 0 0 0 0;
}

```
Este código permite usar um ***linear gradient*** como borda, utilizando um truque de 2 backgrounds, sendo que o 2º background fica atrás do 1º, só aparecendo no espaço destinado à borda, que é transparente.

 Ao descorrer do projeto, a necessesidade da implementação da lógica foi aumentando, com isso vieram muitos *aprendizados e bugs*. De inicio houve a necessidade de usar o [npm](https://www.npmjs.com) para instalar o React, e houve a necessidade de baixar e configurar, tanto o React quanto o [Babel](https://babeljs.io) (a configuração pode se vista [aqui](../babel.config.json)). Sendo assim foi necessario configurar o package.json para devido uso das dependencias. Em seguida foi necessario usar o Webpack para compilação dos modulos (você pode ver o webpack.config.js clicando [aqui](../webpack.config.js)), o unico loader necessário foi o do [Babel](https://babeljs.io). Sendo assim, foi necessario a configuração do packge.json para fazer a compilação dos códigos React pela build no cmd (você pode ver o webpack.config.js clicando [aqui](../package.json))

Com o React configurado, pude codar tranquilamente. Inicialmente programei o [atualizeCard.js](./atualizeCard.js) para atualização dos cartões de acordo com o valor do **input**, depois programei o [validation.js](./validation.js) para uma validação simples (que me tomou um certo tempo, pois não quis programar a validação de acordo com um código pronta da internet, aprendi bastante com isso, mas me arrependo um pouco hehe). Apos isso criei o [app.js](./app.js) para juntar os modulos e criar o ***root element***, para depois renderizar o codigo. O projeto teve pouco uso de JSX, porém um grande uso do hook *useState* e *Event Listeners*.

### Continued development

Com esse desenvolvimento, entendi que devo melhorar minhas práticas em React, além de aprender mais sobre Webpack e npm.


## Author

- Github - [@Otavio-Fina](https://github.com/Otavio-Fina)


