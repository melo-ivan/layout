document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const menu = document.getElementById('main-menu');
  navToggle.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    menu.style.display = expanded ? '' : 'flex';
  });

  const form = document.getElementById('submitForm');
  const toast = document.getElementById('toast');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    let valid = true;
    const required = form.querySelectorAll('[required]');
    required.forEach(input=>{
      const error = input.parentElement.querySelector('.form-error');
      if(!input.value.trim()){
        valid = false;
        error.textContent = 'Campo obrigatório';
        input.setAttribute('aria-invalid','true');
      } else {
        error.textContent = '';
        input.removeAttribute('aria-invalid');
      }
    });
    if(!valid){ showToast('Preencha os campos obrigatórios.'); return; }
    showToast('Enviado com sucesso!');
    form.reset();
  });

  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'), 3000);
  }
});