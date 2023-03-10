const modeToggle = document.querySelector('.mode-toggle button');
const nav = document.querySelector('nav');
const body = document.querySelector('body');

modeToggle.addEventListener('click', function() {
  nav.classList.toggle('dark');
  body.classList.toggle('dark');
  
  const links = document.querySelectorAll('.nav-links li a');
  links.forEach(function(link) {
    link.classList.toggle('dark');
  });
  
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.classList.toggle('dark');
  
  const modeToggleBtn = document.querySelector('.mode-toggle button');
  modeToggleBtn.classList.toggle('dark');
});
