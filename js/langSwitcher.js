const langSwitcherBtn = document.querySelector('.lang-switcher-btn')
const html = document.documentElement

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links li a')
    const navLinksText = []
    navLinks.forEach(link => {
        navLinksText.push(link.innerText)
    })  
    
    const profession = document.querySelector('.profession')
    const professionText = profession.innerText

    const aboutTitle = document.querySelector('.about h2')
    const aboutTitleText = aboutTitle.innerText
    
    const aboutCall = document.querySelector('.about h3')
    const aboutCallText = aboutCall.innerText

    const aboutText = document.querySelector('.about p')
    const aboutTextText = aboutText.innerText

    const projectsTitle = document.querySelector('.projects h2')
    const projectsTitleText = projectsTitle.innerText

    const projectNames = document.querySelectorAll('.projects-list li h3')
    const projectNamesText = []
    projectNames.forEach((project) => {
        projectNamesText.push(project.innerText)
    })

    const projectDescriptions = document.querySelectorAll('.projects-list li p')
    const projectDescriptionsText = []
    projectDescriptions.forEach((project) => {
        projectDescriptionsText.push(project.innerText)
    })

    const contactsTitle = document.querySelector('.contacts h2')
    const contactsTitleText = contactsTitle.innerText

    langSwitcherBtn.addEventListener('click', () => {
        if (html.lang === 'pt') {
            html.lang = 'en'
        }else{
            html.lang = 'pt'
        }

        fetch('https://translation.googleapis.com/language/translate/v2/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                '
            },
            body: JSON.stringify({
                q: [
                    navLinksText,
                    professionText,
                    aboutTitleText,
                    aboutCallText,
                    aboutTextText,
                    projectsTitleText,
                    projectNamesText,
                    projectDescriptionsText,
                    contactsTitleText,
                ], 
                target: html.lang,
                format: 'text'
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao traduzir o texto: ' + response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                const navLinks = document.querySelectorAll('.nav-links li a')
                navLinks.forEach((link, index) => {
                    link.innerText = data.data.translations[index].translatedText
                })
                
                const profession = document.querySelector('.profession') 
                profession.innerText = data.data.translations[3].translatedText

                const aboutTitle = document.querySelector('.about h2')
                aboutTitle.innerText = data.data.translations[4].translatedText

                const aboutCall = document.querySelector('.about h3')
                aboutCall.innerText = data.data.translations[5].translatedText
                
                const aboutText = document.querySelector('.about p')
                aboutText.innerText = data.data.translations[6].translatedText

                const projectsTitle = document.querySelector('.projects h2')
                projectsTitle.innerText = data.data.translations[7].translatedText
            
                const projectNames = document.querySelectorAll('.projects-list li h3')
                projectNames[0].innerText = data.data.translations[8].translatedText
                projectNames[1].innerText = data.data.translations[9].translatedText
                projectNames[2].innerText = data.data.translations[10].translatedText
                projectNames[3].innerText = data.data.translations[11].translatedText

                const projectDescriptions = document.querySelectorAll('.projects-list li p')
                projectDescriptions[0].innerText = data.data.translations[12].translatedText
                projectDescriptions[1].innerText = data.data.translations[13].translatedText
                projectDescriptions[2].innerText = data.data.translations[14].translatedText
                projectDescriptions[3].innerText = data.data.translations[15].translatedText

                const contactsTitle = document.querySelector('.contacts h2')
                contactsTitle.innerText = data.data.translations[16].translatedText

            })
            .catch((error) => {
                console.error('Erro:', error);
            });
    })
})