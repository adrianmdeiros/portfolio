const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach( entry => {
        if (entry.isIntersecting){
            entry.target.classList.remove('opacity-0');
            entry.target.classList.remove('blur');
        }else{
            entry.target.classList.add('opacity-0')
            entry.target.classList.add('blur');
        }
    })
})

const elements = document.querySelectorAll('.opacity-0');
elements.forEach( element => sectionObserver.observe(element) )

// const leftToRight = new IntersectionObserver((entries) => {
//     entries.forEach( entry => {
//         if(entry.isIntersecting){
//             entry.target.classList.remove("-translate-x-full")
//         }
//     })
// })

// const perfil = document.querySelector('.perfil')
// const hardSkills = document.querySelector('.hard-skills')
// leftToRight.observe(perfil)
// leftToRight.observe(hardSkills)


// const rightToLeft = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if(entry.isIntersecting){
//             entry.target.classList.remove('translate-x-full')
//         }
//     })
// })

// const about = document.querySelector('.about')
// const contacts = document.querySelector('.contacts')
// rightToLeft.observe(about)
// rightToLeft.observe(contacts)

// const projectsObserver = new IntersectionObserver(( entries ) => {
//     entries.forEach((entry) => {
//         if(entry.isIntersecting){
//             entry.target.classList.remove('translate-y-full')
//         }else{
//             entry.target.classList.add('translate-y-full')
//         }
//     })
// })

// const projects = document.querySelectorAll('.projects-list li')
// projects.forEach(project => projectsObserver.observe(project))

