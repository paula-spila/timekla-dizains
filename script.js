const modeToggle = document.getElementById('toggle-mode');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');

if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
  modeToggle.textContent = "🌞";
} else {
  modeToggle.textContent = "🌙";
}

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
    modeToggle.textContent = "🌞";
  } else {
    localStorage.setItem('dark-mode', 'disabled');
    modeToggle.textContent = "🌙";
  }
});

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
});
