const profilePicture = document.querySelector(".perfil-img")
    fetch('https://api.github.com/users/adrianmedeirosdev')
      .then(response => response.json())
      .then(data => {
        profilePicture.src = data.avatar_url
})