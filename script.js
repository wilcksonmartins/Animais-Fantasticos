const selecionadoUl = document.querySelector("ul")
console.log(selecionadoUl)
const primeiroLi = selecionadoUl.querySelector("li")
console.log(primeiroLi)
const linkInternos = document.querySelector("[href^='#']")
console.log(linkInternos)
const gridSectionHTml = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll(".grid-section")
selecionadoUl.classList.add("grid-section")
console.log(gridSectionHTml)
console.log(gridSectionNode)
// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img")
// imagens.forEach(function(item){
//   console.log(item)
// })
// Retorne no console apenas as imagens que começaram com a palavra imagem
const apenasImagem = document.querySelectorAll('img[src^="./img/imagem"]')
console.log(apenasImagem)
// Selecione todos os links internos (onde o href começa com #)
const linksHref = document.querySelectorAll("[href^='#']")
console.log(linksHref)

linksHref.forEach(function(item){
  console.log(item)
})

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH = document.querySelector(".animais-descricao h2")
console.log(primeiroH)
// Selecione o último p do site
const ultimoP = document.querySelectorAll("p")
console.log(ultimoP[ultimoP.length - 1])