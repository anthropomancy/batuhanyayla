// Dark/Light Mode
function toggleTheme(){
  document.body.classList.toggle('dark-mode');
}
function showEnglish(){
  document.getElementById('about-en').style.display='block';
  document.getElementById('about-tr').style.display='none';
}
function showTurkish(){
  document.getElementById('about-en').style.display='none';
  document.getElementById('about-tr').style.display='block';
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

