const themeSwitcherBtn = document.querySelector('.theme-switcher-btn')
const htmlElement = document.documentElement


document.addEventListener('DOMContentLoaded' , () => {
    const theme = localStorage.getItem('theme')
    if(theme === 'dark'){
        htmlElement.classList.add(theme)
        themeSwitcherBtn.name = 'moon-outline'
    }
}) 

themeSwitcherBtn.onclick = () => {
    if(htmlElement.classList.contains('dark')){
        htmlElement.classList.remove('dark')
        themeSwitcherBtn.name = 'sunny-outline'
        localStorage.setItem('theme', 'light')
    }else{
        htmlElement.classList.add('dark')
        themeSwitcherBtn.name = 'moon-outline'
        localStorage.setItem('theme', 'dark')
    }
}