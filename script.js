// Dark/Light Mode
function toggleTheme(){
  document.body.classList.toggle('dark-mode');
}

// Contact form mock (Formspree handle olduğu için opsiyonel)
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    document.getElementById('form-status').textContent = "Thanks! Your message has been sent.";
    form.reset();
  });
}
