const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('link-active'));
    link.classList.add('link-active');
  })
})

