const menuIcon = document.querySelector('.hamburguer')
const menu = document.querySelector('.nav-links')
const menuBackground = document.querySelector('.fecha-menu')

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile')
    menuBackground.classList.toggle('isClosed')
    if(menuIcon.name === 'menu-outline'){
        menuIcon.setAttribute('name', 'close-outline')
    }else{
        menuIcon.setAttribute('name', 'menu-outline')
    }
  })

  menuBackground.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile')
    menuBackground.classList.toggle('isClosed')
    menuIcon.name = 'menu-outline'
  })

  const checkScreenWidth = () => {
    const screenWidth = window.innerWidth
    if(screenWidth > 908){
      menu.classList.remove('menu-mobile')
      menuIcon.name = 'menu-outline'
    }
  }

  window.addEventListener('resize', checkScreenWidth)