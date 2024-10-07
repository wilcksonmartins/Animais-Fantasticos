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
