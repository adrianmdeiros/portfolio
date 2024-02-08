const profilePicture = document.querySelector(".perfil-img")
const loader = document.querySelector('.loader')

fetch('https://api.github.com/users/adrianmedeirosdev')
  .then(response => response.json())
  .then(data => {
    profilePicture.src = data.avatar_url
  })
  .finally(() => {
    profilePicture.classList.remove('hidden')
    loader.classList.add('hidden')
  })