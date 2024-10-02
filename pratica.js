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

// const menu = document.querySelector(".menu")
// menu.classList.add("ativo")
// menu.classList.remove("azul")
// console.log(menu.classList)
// const animais = document.querySelector(".animais")

// console.log(animais.attributes['data-texto'])

// const img = document.querySelector('img')

// img.setAttribute("alt","e uma raposa")

// const srcIMG = img.getAttribute("src")

// const possuiALT = img.hasAttribute("alt")

// console.log(possuiALT) 
// console.log(srcIMG)


// Adicione a classe ativo a todos os itens do menu
// const menuItems = document.querySelectorAll('.menu ul li')
// menuItems.forEach((items)=>{
//   items.classList.add("ativo")
// })

// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// menuItems.forEach((items)=>{
//   console.log(items)
//   items.classList.remove("ativo")
// })
// menuItems[0].classList.add("ativo")
// // Verifique se as imagens possuem o atributo alt
// const imagens = document.querySelectorAll("img")
// console.log(imagens)
// imagens.forEach((img)=>{
  
//   console.log(img.hasAttribute('alt'))
// })
// // Modifique o href do link externo no menu
// const menulink = document.querySelectorAll('.menu ul li a')
// menulink[3].setAttribute('href',"https://github.com/")
// console.log(menuItems)
//  const menuAnimais = document.querySelector(".lista-animais")
//  const heightMenu = menuAnimais.scrollHeight
//  const animaisTop = menuAnimais.offsetTop
// console.log(animaisTop)
// const rodape = document.querySelector(".rodape")

// const raposaH2 = document.querySelector('h2')

// const h2Left = raposaH2.offsetLeft

// const h2rect = raposaH2.getBoundingClientRect()
// const tamanho = window.matchMedia("(max-width: 600px)")
// console.log(tamanho)


// Verifique a distância da primeira imagem
// em relação ao topo da página
// const img = document.querySelector('img')
// const imgTop = img.offsetTop
// console.log(imgTop)
// // Retorne a soma da largura de todas as imagens7
// function somaImagens(){
//   const imagens = document.querySelectorAll('img')
//   let soma = 0
//   imagens.forEach((imagem)=>{
//  soma += imagem.offsetWidth
// })
// console.log(soma)
// }

// window.onload = function(){
//   somaImagens()
// }
// // Verifique se os links da página possuem
// // o mínimo recomendado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o google)
// const links = document.querySelectorAll('a')
// links.forEach((link)=>{
//   const linkWidth = link.offsetWidth
//   const linkHeight = link.offsetHeight
//   if(linkWidth >= 48 && linkHeight >= 48){
//     console.log("possui boa acessebilidade")
//   }else{
//     console.log('nao possui boa acessibilidade')
//   }

// })
// console.log(links)
// // Se o browser for menor que 720px,
// // adicione a classe menu-mobile ao menu

// const browserSmall = window.matchMedia('(max-width:700px)').matches

// if(browserSmall){
//   const menu = document.querySelector('.menu')
//   menu.classList.add("menu-mobile")
// }

// const animaisLista = document.querySelector('.lista-animais')

// function callBackLista(event){
//   console.log(event.target)
//   console.log(event.type)
// }
// animaisLista.addEventListener('click',callBackLista)

// const linkExterno = document.querySelector('a[href^="http"]')

// function handleLinkExterno(event){
//   event.preventDefault()
//   console.log('clickou')
//   console.log(this.getAttribute('href'))
// }

// linkExterno.addEventListener('click',handleLinkExterno)

// const h1 = document.querySelector('h1')
// function handleEvent(event){
//   console.log(event.type,event)
// }
// h1.addEventListener('click',handleEvent)
// h1.addEventListener('mouseenter',handleEvent)
// // h1.addEventListener('mousemove',handleEvent)
// window.addEventListener('scroll',handleEvent)
// window.addEventListener('resize',handleEvent)
// window.addEventListener('keydown',handleEvent)
// function keyBoard(event){
//   if(event.key == 'a'){
//     document.body.classList.toggle('azul')
//   }
//   console.log(event.key)
// }
// window.addEventListener('keydown',keyBoard)

// const img = document.querySelectorAll('img')
// function handleImg(event){
//   console.log(event.target.getAttribute("src"))
// }
// img.forEach((img)=>{
//   img.addEventListener("click",handleImg)
// })

// // Quando o usuário clicar nos links internos do site,
// // adicione a classe ativo ao item clicado e remova dos
// // demais itens caso eles possuam a mesma. Previna
// // o comportamento padrão desses links
// const links = document.querySelectorAll('a[href^="#"]')
// function adicionarClasse(event){
//   event.preventDefault()
//   links.forEach((link)=>{
//     link.classList.remove("ativo")
//   })
//  this.classList.toggle("ativo")
// }
// links.forEach((link)=>{
//   link.addEventListener('click',adicionarClasse)
// })
// // Selecione todos os elementos do site começando a partir do body,
// // ao clique mostre exatamente quais elementos estão sendo clicados

// const todosElementos = document.querySelectorAll("body * ")
// function handleElemento(event){
// // event.currentTarget.remove()

// }
// todosElementos.forEach((elemento)=>{
//   elemento.addEventListener("click",handleElemento)
// })

// // Utilizando o código anterior, ao invés de mostrar no console,
// // remova o elemento que está sendo clicado, o método remove() remove um elemento


// // Se o usuário clicar na tecla (t), aumente todo o texto do site. 

// function clickouT(event){
//   console.log(event.key)
//   if(event.key === 't')
//   document.documentElement.classList.toggle('textoMaior')
  
// }
// window.addEventListener('keydown',clickouT)
// 1
// const h1 = document.querySelector("h1")
// console.log(h1.outerHTML)


// const lista = document.querySelector(".lista-animais")
// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato')
// const contatoH1 = contato.querySelector(".titulo")



// const cloneTitulo = h1.cloneNode(true)
// cloneTitulo.classList.add(".azul")
// const faq = document.querySelector('.faq')
// faq.appendChild(cloneTitulo)



// // Duplique o menu e adicione ele em copy
// const menu = document.querySelector('.menu')
// const rodape = document.querySelector('.rodape')
// const menuNovo = menu.cloneNode(true)
// rodape.appendChild(menuNovo)

// // Selecione o primeiro DT da dl de Faq
// const faq = document.querySelector('.faq')
// const primeiroDt = faq.querySelector('dt')

// // Selecione o DD referente ao primeiro DT
// const proximoDD = primeiroDt.nextElementSibling

// console.log(proximoDD)
// // Substitua o conteúdo html de .faq pelo de .animais

// const animais = document.querySelector('.animais')

// faq.innerHTML = animais.innerHTML