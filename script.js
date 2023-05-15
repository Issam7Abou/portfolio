// Get the NavBar items and viewportWidth to later use on scroll function
const navLinks = document.querySelectorAll('nav a');
const viewportWidth = window.innerWidth;

// Function that scroll to the right section without cutting the content of that section
function scrollNav() {
  //loop through the navLinks
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      // Prevent the links to open without the following code
      e.preventDefault();
      const sectionId = link.getAttribute('href');
      const section = document.querySelector(sectionId);
      const navbarHeight = document.querySelector('.nav-container').offsetHeight;
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      // this will ensure that the scroll will not cut the content of that section
      if (viewportWidth < 485) {
        window.scrollTo({
          top: sectionPosition - navbarHeight - 130,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: sectionPosition - navbarHeight - 100,
          behavior: 'smooth'
        });
      }
    });
  })
}

//On Load
scrollNav();

/*
const word = document.getElementById('word');
console.log(word);

const rect = word.getBoundingClientRect();
console.log('top:', rect.top, 'bottom:', rect.bottom);

//rect.top >= 0 && rect.bottom <= window.innerHeight ? word.classList.add('word') : word.classList.remove('word');

if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
  word.classList.add('word1')
  console.log(word)
} else {
  console.log('not in viewport')
}
*/

