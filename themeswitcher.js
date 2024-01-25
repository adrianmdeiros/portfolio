const themeSwitcherBtn = document.querySelector('.theme-switcher-btn')
const htmlElement = document.documentElement


window.onload = () => {
    const theme = localStorage.getItem('theme')
    if(theme === 'dark'){
        htmlElement.classList.add(theme)
        themeSwitcherBtn.name = 'moon-outline'
    }
}


themeSwitcherBtn.onclick = () => {
    if(htmlElement.classList.contains('dark')){
        themeSwitcherBtn.name = 'sunny-outline'
        htmlElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }else{
        themeSwitcherBtn.name = 'moon-outline'
        htmlElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }
}