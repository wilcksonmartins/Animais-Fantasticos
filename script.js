// const selecionadoUl = document.querySelector("ul")
// console.log(selecionadoUl)
// const primeiroLi = selecionadoUl.querySelector("li")
// console.log(primeiroLi)
// const linkInternos = document.querySelector("[href^='#']")
// console.log(linkInternos)
// const gridSectionHTml = document.getElementsByClassName('grid-section')
// const gridSectionNode = document.querySelectorAll(".grid-section")
// selecionadoUl.classList.add("grid-section")
// console.log(gridSectionHTml)
// console.log(gridSectionNode)
// // Retorne no console todas as imagens do site
// const imagens = document.querySelectorAll("img")
// // imagens.forEach(function(item){
// //   console.log(item)
// // })
// // Retorne no console apenas as imagens que começaram com a palavra imagem
// const apenasImagem = document.querySelectorAll('img[src^="./img/imagem"]')
// console.log(apenasImagem)
// // Selecione todos os links internos (onde o href começa com #)
// const linksHref = document.querySelectorAll("[href^='#']")
// console.log(linksHref)

// linksHref.forEach(function(item){
//   console.log(item)
// })

// // Selecione o primeiro h2 dentro de .animais-descricao
// const primeiroH = document.querySelector(".animais-descricao h2")
// console.log(primeiroH)
// // Selecione o último p do site
// const ultimoP = document.querySelectorAll("p")
// console.log(ultimoP[ultimoP.length - 1])

// const img = document.querySelectorAll("img")
// console.log(img)
// img.forEach(function(item,valorDoitem,array){
//   console.log(item,valorDoitem)
// })
// const titulos = document.getElementsByClassName("titulo")
// const titulosArray = Array.from(titulos)
// titulosArray.forEach(function(item,posicao){
//   console.log(item,posicao)
// })
// console.log(titulosArray)

// titulosArray.forEach((item) => {
//   console.log(item)
// })

// // Mostre no console cada parágrado do site
// const paragrafos = document.querySelectorAll("p")
// paragrafos.forEach((item,posicao)=>{
//   console.log(item,posicao)
// })
// // Mostre o texto dos parágrafos no console
// paragrafos.forEach((item)=>{
//   console.log(item.innerText)
// })
// // Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');
// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++)
// });

// imgs.forEach(() => i++);

const menu = document.querySelector(".menu")
menu.classList.add("ativo")
menu.classList.remove("azul")
console.log(menu.classList)
const animais = document.querySelector(".animais")

console.log(animais.attributes['data-texto'])

const img = document.querySelector('img')

img.setAttribute("alt","e uma raposa")

const srcIMG = img.getAttribute("src")

const possuiALT = img.hasAttribute("alt")

console.log(possuiALT) 
console.log(srcIMG)