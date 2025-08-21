// Dark/Light Mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Skills bar animation
window.addEventListener('load', () => {
  const bars = document.querySelectorAll('.skill .bar div');
  bars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });
});

// Contact form (Formspree)
const form = document.querySelector('form');
if(form){
  form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('form-status').textContent = "Thanks! Your message has been sent.";
    form.reset();
  });
}
