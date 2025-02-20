// navegação por tabs
function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')
  
  if (tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo')
    function activeTab (index){
      tabContent.forEach((section)=>{
        section.classList.remove("ativo")
      })
      tabContent[index].classList.add("ativo")
    }
    tabMenu.forEach((itemMenu,index)=>{
      itemMenu.addEventListener('click',()=>{
        activeTab(index)
      })
    })
  }
}
initTabNav()
// acordion list
function initAccordion(){
  const accordionItem = document.querySelectorAll(".js-accordion dt")
  if(accordionItem.length){
    accordionItem[0].classList.add('ativo')
    accordionItem[0].nextElementSibling.classList.add("ativo")
    function activeAccordion(){
      this.classList.add("ativo")
      this.nextElementSibling.classList.toggle('ativo')
    }
    accordionItem.forEach((item)=>{
      item.addEventListener('click',activeAccordion)
    })
  }
}
initAccordion()

// scroll suave link interno
function scrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href)
    const topo = section.offsetTop
    console.log(topo)
    // forma alternativa
  //   window.scrollTo({
  //     top:topo,
  //     behavior:'smooth',
  //   })
  // }
    section.scrollIntoView({
      behavior:'smooth',
      block: 'start',
    })
  
  }
  
  
  
   linksInternos.forEach((link)=>{
    link.addEventListener('click',scrollToSection)
   })
  console.log(linksInternos)
  
}
scrollSuave()
// inicio animaçao scroll
function initAnimacaoScroll(){
  const sections = document.querySelectorAll(".js-scroll")
  if(sections.length){
    const windowMetade = window.innerHeight * 0.6;
    console.log(windowMetade)
    function animaScroll(){
      sections.forEach((section)=>{
        const sectionTopo = section.getBoundingClientRect().top
       const isSectionVisible = (sectionTopo - windowMetade) < 0
        if(isSectionVisible ){
          section.classList.add('ativo')
        }else{
          section.classList.remove("ativo")
        }
       })
    }
    animaScroll()
    window.addEventListener('scroll',animaScroll)
  }
}
initAnimacaoScroll()

