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