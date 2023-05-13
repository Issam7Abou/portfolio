const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
console.log(viewportWidth, viewportHeight);

const word = document.getElementById('wordAfter');
const rect = word.getBoundingClientRect();
console.log('top:', rect.top, 'bottom:', rect.bottom);

rect.top >= 0 && rect.bottom <= window.innerHeight ? console.log('element is in Viewport') : console.log('elem is not in the viewport');